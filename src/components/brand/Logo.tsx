import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'icon-only';
  theme?: 'dark' | 'light';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'dark',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer group transition-transform duration-300 hover:opacity-95 ${className}`}
      id="brand-logo"
      role="banner"
      aria-label="Cherryworks Studios"
    >
      <div className="relative flex items-center justify-center">
        <Image
          src="/cherryworkslogo.svg"
          alt="Cherryworks Studios Logo"
          width={500}
          height={93}
          priority
          className={`h-16 sm:h-20 md:h-24 w-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-contain transition-transform duration-500 group-hover:scale-[1.02]`}
        />
      </div>
    </div>
  );
};

