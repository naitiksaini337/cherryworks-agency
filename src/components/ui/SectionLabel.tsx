import React from 'react';

interface SectionLabelProps {
  label: string;
  theme?: 'dark' | 'light';
  className?: string;
  dotColor?: 'cherry' | 'sage' | 'sakura' | 'ivory';
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  label,
  theme = 'dark',
  className = '',
  dotColor = 'cherry',
}) => {
  const isLight = theme === 'light';

  const dotClasses = {
    cherry: 'bg-[#7A0F2E]',
    sage: 'bg-[#708070]',
    sakura: 'bg-[#E0A0B0]',
    ivory: 'bg-[#F4F0EC]',
  };

  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[11px] font-manrope font-semibold uppercase tracking-[0.25em] ${
        isLight ? 'text-[#7A0F2E]' : 'text-[#E0A0B0]'
      } ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotClasses[dotColor]}`} />
      <span>{label}</span>
    </div>
  );
};
