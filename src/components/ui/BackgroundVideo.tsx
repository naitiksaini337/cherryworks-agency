'use client';

import React, { useRef, useEffect } from 'react';

interface BackgroundVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
}

export function BackgroundVideo({ src, poster, className, ...props }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Attempt to play the video. Catch and ignore any abort errors, 
      // such as low power mode restrictions on autoplaying background videos.
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Background video autoplay prevented (likely power-saving mode):', error.message);
        });
      }
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={className}
      loop
      muted
      playsInline
      preload="auto"
      {...props}
    />
  );
}
