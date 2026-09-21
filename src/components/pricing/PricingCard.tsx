import React, { useState } from 'react';
import { PricingTier } from '../../types';
import { Check, MessageCircle, ArrowRight, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/siteData';
import { motion } from 'framer-motion';

interface PricingCardProps {
  tier: PricingTier;
  serviceCategory: string;
  onSelect?: () => void;
  index?: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  serviceCategory,
  onSelect,
  index = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const whatsappText = `Hi Cherryworks, I'm interested in the ${serviceCategory} (${tier.name} tier: ${tier.price}${tier.billingPeriod || ''}).`;

  // Determine styles based on tier popularity
  const isDark = tier.isPopular;
  
  const cardClasses = isDark
    ? 'bg-[#0A0507] border-[#7A0F2E] shadow-[0_12px_40px_rgba(122,15,46,0.25)] text-[#FFFFFF]'
    : 'bg-[#FFFFFF] border-[#E2DDD7] hover:border-[#382029] shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] text-[#050505]';

  const titleClasses = isDark ? 'text-[#E0A0B0]' : 'text-[#7A0F2E]';
  const priceClasses = isDark ? 'text-[#FFFFFF]' : 'text-[#050505]';
  const periodClasses = isDark ? 'text-[#A09895]' : 'text-[#7D7578]';
  const textMutedClasses = isDark ? 'text-[#E4DFDD]' : 'text-[#504A4C]';
  const dividerClasses = isDark ? 'border-[#221419]' : 'border-[#E2DDD7]';
  const checkClasses = isDark ? 'text-[#E0A0B0]' : 'text-[#7A0F2E]';
  
  const primaryButtonClasses = isDark
    ? 'bg-[#E0A0B0] text-[#0A0507] hover:bg-[#FFFFFF]'
    : 'bg-[#FDFBF9] text-[#7A0F2E] border border-[#D0C8C5] hover:bg-[#7A0F2E] hover:text-[#FFFFFF]';
    
  const secondaryButtonClasses = isDark
    ? 'text-[#A09895] hover:text-[#E0A0B0]'
    : 'text-[#7D7578] hover:text-[#7A0F2E]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`relative p-6 sm:p-8 border transition-all duration-500 rounded-[2px] flex flex-col justify-between group overflow-hidden ${cardClasses}`}
      id={`pricing-card-${tier.name.toLowerCase()}`}
    >
      {/* Background Subtle Gradient for Popular Tier */}
      {isDark && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#7A0F2E]/10 via-transparent to-[#E0A0B0]/5 pointer-events-none" />
      )}

      {/* Popular Badge */}
      {tier.isPopular && (
        <div className="absolute -top-[1px] right-6 bg-[#7A0F2E] text-[#FFFFFF] text-[9px] font-manrope font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-b-[2px] flex items-center gap-1.5 shadow-md z-10">
          <Sparkles className="w-2.5 h-2.5" />
          Recommended
        </div>
      )}

      {/* Top Details */}
      <div className="relative z-10 space-y-5">
        <div className="flex items-center justify-between">
          <h4 className={`font-manrope text-sm uppercase tracking-[0.2em] font-bold ${titleClasses}`}>
            {tier.name}
          </h4>
        </div>

        {/* Price Display */}
        <div className="pt-2 pb-2">
          <div className="flex items-baseline gap-1 sm:gap-1.5">
            <span className={`font-instrument text-4xl sm:text-5xl md:text-6xl tracking-tight ${priceClasses}`}>
              {tier.price}
            </span>
            {tier.billingPeriod && (
              <span className={`font-manrope font-medium text-xs uppercase tracking-wider ${periodClasses}`}>
                {tier.billingPeriod}
              </span>
            )}
          </div>
          {tier.tagline && (
            <p className={`font-manrope font-medium text-[13px] mt-3 leading-relaxed ${isDark ? 'text-[#A09895]' : 'text-[#7D7578]'}`}>
              {tier.tagline}
            </p>
          )}
        </div>

        {/* Deliverables */}
        <div className={`pt-5 border-t ${dividerClasses} space-y-4`}>
          <div className={`text-[10px] font-manrope font-bold uppercase tracking-[0.2em] ${titleClasses}`}>
            Included Deliverables
          </div>
          <ul className="space-y-3">
            {(isExpanded ? tier.deliverables : tier.deliverables.slice(0, 3)).map((item, idx) => (
              <li key={idx} className={`flex items-start gap-2.5 font-lora text-[14px] sm:text-[15px] ${textMutedClasses}`}>
                <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-[5px] ${checkClasses}`} />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          {tier.deliverables.length > 3 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className={`text-[11px] font-manrope font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors pt-2 ${isDark ? 'text-[#E0A0B0] hover:text-[#FFFFFF]' : 'text-[#7A0F2E] hover:text-[#050505]'}`}
            >
              {isExpanded ? (
                <>Hide features <ChevronUp className="w-3 h-3" /></>
              ) : (
                <>+ See {tier.deliverables.length - 3} more features <ChevronDown className="w-3 h-3" /></>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className={`relative z-10 pt-6 mt-8 border-t ${dividerClasses} space-y-3`}>
        <button
          onClick={onSelect}
          className={`w-full py-3 px-4 text-xs font-manrope font-bold uppercase tracking-[0.14em] flex items-center justify-center gap-2 rounded-[2px] transition-all duration-300 active:scale-[0.98] ${primaryButtonClasses}`}
        >
          <span>Select {tier.name}</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>

        <a
          href={getWhatsAppUrl(whatsappText)}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-2.5 text-center text-[11px] font-manrope font-semibold uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-colors ${secondaryButtonClasses}`}
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>
    </motion.div>
  );
};
