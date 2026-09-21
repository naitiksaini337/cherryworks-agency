import React from 'react';

interface EditorialHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'hero' | 'display' | 'section' | 'card';
  theme?: 'dark' | 'light';
  className?: string;
  italicText?: string;
}

export const EditorialHeading: React.FC<EditorialHeadingProps> = ({
  children,
  as: Component = 'h2',
  size = 'section',
  theme = 'dark',
  className = '',
}) => {
  const isLight = theme === 'light';

  const sizeClasses = {
    hero: 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] font-normal',
    display: 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] font-normal',
    section: 'text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.08] font-normal',
    card: 'text-2xl sm:text-3xl tracking-tight leading-[1.15] font-normal',
  };

  const textTheme = isLight ? 'text-[#050505]' : 'text-[#050505]';

  return (
    <Component
      className={`font-instrument ${sizeClasses[size]} ${textTheme} ${className}`}
    >
      {children}
    </Component>
  );
};
