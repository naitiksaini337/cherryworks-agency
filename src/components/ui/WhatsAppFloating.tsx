"use client";

// This comment forces the TS server to re-parse the file.

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/siteData';

interface WhatsAppFloatingProps {
  customMessage?: string;
  className?: string;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({
  customMessage = "Hi Cherryworks Studios, I'd like to ask a quick question about growing our digital presence.",
  className = '',
}) => {
  const handleClick = () => {
    window.open(getWhatsAppUrl(customMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`fixed bottom-6 right-5 z-40 md:hidden flex items-center ${className}`}
      id="persistent-mobile-whatsapp"
    >
      <button
        onClick={handleClick}
        className="flex items-center gap-2.5 px-4 py-3 bg-[#0A120E] text-[#E0F0E6] border border-[#34483B] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.8)] active:scale-95 transition-all"
        aria-label="Direct WhatsApp Chat"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E0A0B0] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#7A0F2E]"></span>
        </span>
        <MessageCircle className="w-4 h-4 text-[#E0A0B0]" />
        <span className="text-[12px] font-manrope font-semibold tracking-wider uppercase">
          WhatsApp Direct
        </span>
      </button>
    </div>
  );
};
