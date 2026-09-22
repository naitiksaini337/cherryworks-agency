"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../../types';

interface AccordionProps {
  items: FAQItem[];
  theme?: 'dark' | 'light';
}

export const Accordion: React.FC<AccordionProps> = ({ items, theme = 'dark' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLight = theme === 'light';

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full divide-y divide-[#1F181B]">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            onMouseEnter={() => setOpenIndex(idx)}
            className={`py-5 transition-colors duration-200 ${
              isLight ? 'border-b border-[#050505]/10' : 'border-b border-[#E2DDD7]'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
              aria-expanded={isOpen}
              id={`faq-btn-${idx}`}
            >
              <span
                className="font-instrument text-xl md:text-2xl transition-colors duration-200 text-[#7A0F2E]"
              >
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#7A0F2E] border-[#7A0F2E] text-[#FFFFFF]'
                    : isLight
                    ? 'border-[#050505]/20 text-[#050505] group-hover:border-[#7A0F2E]'
                    : 'border-[#2D1F24] text-[#7D7578] group-hover:border-[#7A0F2E] group-hover:text-[#3A3537]'
                }`}
              >
                {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              </span>
            </button>

            {isOpen && (
              <div className="pt-3.5 pb-1 pr-6 animate-fadeIn">
                <p
                  className="font-lora text-[16px] leading-relaxed text-[#504A4C]"
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
