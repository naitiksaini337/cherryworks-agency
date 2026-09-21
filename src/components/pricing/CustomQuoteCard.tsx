import React from 'react';
import { ArrowRight, Check, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/siteData';
import { motion } from 'framer-motion';

interface CustomQuoteCardProps {
  onStartQuote: () => void;
}

export const CustomQuoteCard: React.FC<CustomQuoteCardProps> = ({ onStartQuote }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="p-6 sm:p-10 md:p-12 bg-[#050505] border border-[#221419] rounded-[2px] relative overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
      id="custom-web-pricing-card"
    >
      {/* Cinematic Background Gradients */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-gradient-to-l from-[#7A0F2E]/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#E0A0B0]/5 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center relative z-10">
        {/* Left Info */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#160A0E] border border-[#381622] rounded-[2px] shadow-sm">
            <Sparkles className="w-3 h-3 text-[#E0A0B0]" />
            <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-[#E0A0B0]">
              Custom Web Development
            </span>
          </div>

          <h3 className="font-instrument text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight leading-[1.05]">
            Every business has different requirements.
          </h3>

          <p className="font-lora text-[15px] sm:text-[17px] text-[#A09895] leading-relaxed max-w-xl">
            We scope custom websites around your conversion goals, complexity, system integrations,
            and growth plans rather than forcing you into a rigid template.
          </p>

          {/* Core inclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#1C1417]">
            <div className="flex items-start gap-2.5 text-[14px] font-manrope font-medium text-[#E4DFDD]">
              <Check className="w-4 h-4 text-[#7A0F2E] flex-shrink-0 mt-0.5" />
              <span>Bespoke semantic architecture</span>
            </div>
            <div className="flex items-start gap-2.5 text-[14px] font-manrope font-medium text-[#E4DFDD]">
              <Check className="w-4 h-4 text-[#7A0F2E] flex-shrink-0 mt-0.5" />
              <span>Full Google & WhatsApp integrations</span>
            </div>
            <div className="flex items-start gap-2.5 text-[14px] font-manrope font-medium text-[#E4DFDD]">
              <Check className="w-4 h-4 text-[#7A0F2E] flex-shrink-0 mt-0.5" />
              <span>Google Sheets lead sync & booking setup</span>
            </div>
            <div className="flex items-start gap-2.5 text-[14px] font-manrope font-medium text-[#E4DFDD]">
              <Check className="w-4 h-4 text-[#7A0F2E] flex-shrink-0 mt-0.5" />
              <span>Desktop & mobile speed optimization</span>
            </div>
          </div>
        </div>

        {/* Right Scope Details & Actions */}
        <div className="lg:col-span-5 bg-[#0A0507]/80 backdrop-blur-md border border-[#221419] p-6 sm:p-8 rounded-[2px] space-y-6 shadow-xl">
          <div>
            <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-[#7A0F2E]">
              Pricing Structure
            </span>
            <div className="font-instrument text-3xl sm:text-4xl text-[#FFFFFF] mt-2">
              Project-Based
            </div>
            <p className="text-[13px] font-manrope font-medium text-[#A09895] mt-2 leading-relaxed">
              Transparent, milestone-based quotes based on exact scope and features required.
            </p>
          </div>

          <div className="pt-5 border-t border-[#221419] space-y-3">
            <div className="text-[11px] font-manrope font-bold uppercase tracking-[0.15em] text-[#E0A0B0]">
              Optional Monthly Maintenance
            </div>
            <div className="font-instrument text-3xl text-[#FFFFFF] tracking-tight">
              ₹4,000–₹8,000<span className="text-sm font-manrope font-medium text-[#7D7578] tracking-normal">/month</span>
            </div>
            <p className="text-[13px] font-lora text-[#A09895] leading-relaxed">
              Includes website maintenance, content updates, basic SEO changes, bug support, and
              integration monitoring.
            </p>
          </div>

          <div className="pt-4 space-y-3">
            <button
              onClick={onStartQuote}
              className="w-full py-3.5 px-5 bg-[#7A0F2E] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#050505] text-xs font-manrope font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 rounded-[2px] transition-all duration-300 active:scale-[0.98]"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={getWhatsAppUrl(
                "Hi Cherryworks, I'd like to get a custom quote for a bespoke web development project."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-[11px] font-manrope font-bold uppercase tracking-[0.15em] text-[#A09895] hover:text-[#E0A0B0] flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
