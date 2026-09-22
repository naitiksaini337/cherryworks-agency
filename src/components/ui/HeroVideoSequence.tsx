"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
const SEQUENCE = [
  {
    id: '01',
    videoUrl: 'https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/cherryworks-vids/1.mp4',
    eyebrow: '01 / WEB',
    headline: 'Build beautifully.',
    emphasis: 'Grow intelligently.',
    description: 'High-converting websites built around your brand and business goals.',
    primaryCta: 'BUILD MY WEBSITE →',
    primaryLink: '/contact'
  },
  {
    id: '02',
    videoUrl: 'https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/cherryworks-vids/2.mp4',
    eyebrow: '02 / GROW',
    headline: 'Open new doors.',
    emphasis: '',
    description: 'SEO, social media, and branding designed to put your business in front of more people.',
    primaryCta: 'GROW MY BRAND →',
    primaryLink: '/contact'
  },
  {
    id: '03',
    videoUrl: 'https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/cherryworks-vids/3.mp4',
    eyebrow: '03 / AUTOMATE',
    headline: 'Work smarter.',
    emphasis: '',
    description: 'AI-assisted workflows and automation that save time and keep your business moving.',
    primaryCta: 'AUTOMATE MY BUSINESS →',
    primaryLink: '/contact'
  },
  {
    id: '04',
    videoUrl: 'https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/cherryworks-vids/4.mp4',
    eyebrow: '04 / SCALE',
    headline: 'Connect beyond boundaries.',
    emphasis: '',
    description: 'Build your digital presence, reach new audiences, and turn attention into customers.',
    primaryCta: 'START GROWING →',
    primaryLink: '/contact'
  }
];

export const HeroVideoSequence: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Automatically play the active video, pause others, reset time if needed
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.currentTime = 0;
        video.play().catch((err) => {
          console.error("Autoplay prevented:", err);
          // If playback fails, skip to next after a delay to maintain sequence
          setTimeout(() => handleVideoEnd(index), 5000);
        });
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  function handleVideoEnd(index: number) {
    if (index === activeIndex) {
      setActiveIndex((prev) => (prev + 1) % SEQUENCE.length);
    }
  }

  const activeContent = SEQUENCE[activeIndex];

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full overflow-hidden flex items-end sm:items-center bg-[#050505]">
      {/* Videos */}
      {SEQUENCE.map((seq, idx) => (
        <video
          key={seq.id}
          ref={(el) => { videoRefs.current[idx] = el; }}
          src={seq.videoUrl}
          muted
          playsInline
          preload="auto"
          onEnded={() => handleVideoEnd(idx)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
            idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}

      {/* Dark Overlay for readability while keeping footage visually dominant */}
      <div className="absolute inset-0 z-10 bg-black/35 transition-opacity duration-1000"></div>
      
      {/* Subtle Gradient for Bottom Text area (mobile) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-black/40 to-transparent sm:bg-none"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-32 h-full flex flex-col justify-end sm:justify-center">
        
        {/* Sequence Indicators (Desktop: Right Side, Mobile: Bottom Right) */}
        <div className="absolute bottom-10 sm:bottom-24 right-5 sm:right-8 lg:right-12 flex flex-col gap-3 z-30">
          {SEQUENCE.map((seq, idx) => (
            <div
              key={seq.id}
              className={`text-xs sm:text-sm font-instrument tracking-widest transition-all duration-[700ms] ease-in-out ${
                idx === activeIndex
                  ? 'text-white opacity-100 translate-x-0 font-medium'
                  : 'text-white/50 opacity-40 translate-x-1.5'
              }`}
            >
              {seq.id}
            </div>
          ))}
        </div>

        {/* Text Area */}
        <div className="max-w-2xl">
          <div
            key={`content-${activeIndex}`}
            className="animate-fadeIn transition-opacity duration-[600ms] ease-in-out"
          >
            {/* Eyebrow */}
            <div className="text-[10px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.25em] text-[#E0A0B0] mb-3 sm:mb-4">
              {activeContent.eyebrow}
            </div>

            {/* Headline & Emphasis */}
            <h1 className="font-instrument text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.95] mb-3 sm:mb-4">
              {activeContent.headline}
              {activeContent.emphasis && (
                <>
                  <br />
                  <span className="italic font-light text-[#E0A0B0]">
                    {activeContent.emphasis}
                  </span>
                </>
              )}
            </h1>

            {/* Supporting Sentence (1-2 lines) */}
            <p className="font-lora text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed mb-6 sm:mb-8 drop-shadow-md">
              {activeContent.description}
            </p>

            {/* Single Primary CTA */}
            <div>
              <Link
                href={activeContent.primaryLink}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 bg-[#EAE4E1] text-[#050505] hover:bg-[#EAE4E1] text-xs font-manrope font-bold uppercase tracking-widest transition-all rounded-[2px] active:scale-95 shadow-md"
              >
                {activeContent.primaryCta}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
