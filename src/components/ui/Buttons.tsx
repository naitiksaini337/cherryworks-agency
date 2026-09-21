import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/siteData';

interface ButtonBaseProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const PrimaryButton: React.FC<
  ButtonBaseProps & {
    variant?: 'dark' | 'light' | 'cherry';
    showArrow?: boolean;
  }
> = ({
  children = 'START A PROJECT →',
  onClick,
  className = '',
  id,
  type = 'button',
  disabled = false,
  variant = 'light',
  showArrow = true,
}) => {
  const variantStyles = {
    light:
      'bg-[#F4F0EC] text-[#050505] hover:bg-[#EAE4E1] hover:shadow-[0_0_20px_rgba(244,240,236,0.15)] border border-[#F4F0EC]',
    dark:
      'bg-[#F4F0EC] text-[#3A3537] hover:bg-[#FDFBF9] hover:border-[#7A0F2E] border border-[#2A2A2A]',
    cherry:
      'bg-[#7A0F2E] text-[#FFFFFF] hover:bg-[#8C1835] hover:shadow-[0_0_24px_rgba(122,15,46,0.35)] border border-[#7A0F2E]',
  };

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[13px] font-manrope font-semibold uppercase tracking-[0.14em] transition-all duration-300 rounded-[2px] disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${className}`}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};

export const SecondaryButton: React.FC<
  ButtonBaseProps & {
    theme?: 'dark' | 'light';
  }
> = ({
  children = 'EXPLORE OUR WORK',
  onClick,
  className = '',
  id,
  type = 'button',
  theme = 'dark',
}) => {
  const isLight = theme === 'light';

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[13px] font-manrope font-semibold uppercase tracking-[0.14em] transition-all duration-300 rounded-[2px] ${
        isLight
          ? 'text-[#050505] border border-[#050505]/20 hover:border-[#050505] hover:bg-[#F4F0EC]/5'
          : 'text-[#EAE4E1] hover:text-[#FFFFFF] border border-[#F4F0EC]/20 hover:border-[#F4F0EC]/60 hover:bg-[#F4F0EC]/5'
      } ${className}`}
    >
      <span>{children}</span>
    </button>
  );
};

export const WhatsAppButton: React.FC<
  ButtonBaseProps & {
    customMessage?: string;
    variant?: 'outline' | 'solid';
    label?: string;
  }
> = ({
  customMessage,
  className = '',
  id = 'whatsapp-button',
  variant = 'outline',
  label = 'CHAT ON WHATSAPP →',
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(getWhatsAppUrl(customMessage), '_blank', 'noopener,noreferrer');
    }
  };

  if (variant === 'solid') {
    return (
      <button
        id={id}
        onClick={handleClick}
        className={`group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[13px] font-manrope font-semibold uppercase tracking-[0.14em] bg-[#1a2f23] text-[#E0F0E6] border border-[#34483B] hover:bg-[#34483B] hover:text-[#FFFFFF] transition-all duration-300 rounded-[2px] ${className}`}
      >
        <MessageCircle className="w-3.5 h-3.5 text-[#E0A0B0] group-hover:scale-110 transition-transform" />
        <span>{label}</span>
      </button>
    );
  }

  return (
    <button
      id={id}
      onClick={handleClick}
      className={`group inline-flex items-center justify-center gap-2.5 px-5 py-3 text-[12px] font-manrope font-semibold uppercase tracking-[0.14em] text-[#E0A0B0] border border-[#7A0F2E]/40 hover:border-[#E0A0B0] hover:bg-[#7A0F2E]/10 transition-all duration-300 rounded-[2px] ${className}`}
    >
      <MessageCircle className="w-3.5 h-3.5 text-[#E0A0B0] group-hover:rotate-6 transition-transform" />
      <span>{label}</span>
    </button>
  );
};
