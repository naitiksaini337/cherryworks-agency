'use client';

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export interface ColorChangeCardItem {
  number?: string;
  tag?: string;
  heading: string;
  description: string;
  imgSrc?: string;
  badge?: string;
}

interface ColorChangeCardsProps {
  items?: ColorChangeCardItem[];
  columns?: 2 | 4;
}

const defaultItems: ColorChangeCardItem[] = [
  {
    number: "01",
    tag: "Intelligence",
    heading: "Plan",
    description: "Deep commercial understanding and strategic mapping for scale.",
    imgSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    tag: "Execution",
    heading: "Build",
    description: "Meticulous design & high-performance frontend engineering.",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    tag: "Conversion",
    heading: "Optimize",
    description: "Continuous refinement of funnels, SEO, and user experience.",
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    tag: "Compounding",
    heading: "Scale",
    description: "Automated systems that drive sustainable revenue growth.",
    imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
  },
];

export const ColorChangeCards: React.FC<ColorChangeCardsProps> = ({
  items = defaultItems,
  columns = 2,
}) => {
  return (
    <div className="w-full">
      <div
        className={`grid w-full grid-cols-1 gap-5 sm:gap-6 ${
          columns === 4
            ? "md:grid-cols-2 lg:grid-cols-4"
            : "md:grid-cols-2"
        }`}
      >
        {items.map((card, idx) => (
          <ColorCard
            key={idx}
            number={card.number}
            tag={card.tag}
            heading={card.heading}
            description={card.description}
            imgSrc={card.imgSrc}
            badge={card.badge}
          />
        ))}
      </div>
    </div>
  );
};

// --- Card Component ---
export interface ColorCardProps {
  number?: string;
  tag?: string;
  heading: string;
  description?: string;
  bullets?: string[];
  imgSrc?: string;
  badge?: string;
}

export const ColorCard: React.FC<ColorCardProps> = ({
  number,
  tag,
  heading,
  description,
  bullets,
  badge,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative min-h-[340px] w-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full min-h-[340px]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2px] border border-[#2B1B22] bg-[#050505] shadow-sm transition-all duration-500 hover:border-[#7A0F2E] flex flex-col justify-between overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-[#0A0507]/80 to-[#12060A]/60" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#7A0F2E]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Top Details (Number / Tag / Arrow) */}
          <div className="relative z-20 flex items-start justify-between p-6 sm:p-7">
            <div className="flex items-center gap-3">
              {number && (
                <span className="font-instrument text-2xl sm:text-3xl text-[#7A0F2E] group-hover:text-[#E0A0B0] transition-colors">
                  {number}
                </span>
              )}
              {tag && (
                <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-[#A09895] px-2 py-0.5 rounded-[1px] bg-[#160E12] border border-[#2B1B22] group-hover:border-[#7A0F2E]/60 group-hover:text-[#E0A0B0] transition-colors">
                  {tag}
                </span>
              )}
            </div>

            <div className="w-9 h-9 rounded-full bg-[#160E12] border border-[#2B1B22] flex items-center justify-center text-[#A09895] group-hover:bg-[#7A0F2E] group-hover:border-[#7A0F2E] group-hover:text-[#FFFFFF] transition-all duration-300">
              <FiArrowRight className="text-lg transition-transform duration-500 group-hover:-rotate-45" />
            </div>
          </div>

          {/* Bottom Content (Front) */}
          <div className="relative z-20 flex flex-col justify-end p-6 sm:p-7 pt-0 space-y-4">
            <div className="font-instrument text-2xl sm:text-3xl md:text-4xl text-[#FFFFFF] tracking-tight group-hover:text-[#FFFFFF] flex flex-wrap gap-x-2 gap-y-0.5 items-center">
              {heading.split(" ").map((word, wIdx) => (
                <span key={wIdx} className="inline-flex whitespace-nowrap">
                  {word.split("").map((letter, lIdx) => (
                    <AnimatedLetter letter={letter} key={lIdx} />
                  ))}
                </span>
              ))}
            </div>

            {badge && (
              <div className="pt-2 border-t border-[#1F1418]">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-manrope font-semibold uppercase tracking-widest text-[#E0A0B0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A0F2E]" />
                  {badge}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2px] border border-[#7A0F2E] bg-[#0A0709] flex flex-col justify-center p-6 sm:p-8 overflow-hidden shadow-[0_12px_36px_rgba(122,15,46,0.25)]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-[#12060A]/80 to-[#7A0F2E]/10" />

          <div className="relative z-20 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-manrope font-semibold uppercase tracking-widest text-[#E0A0B0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A0F2E]" />
              {heading}
            </div>
            
            {bullets && bullets.length > 0 ? (
              <ul className="space-y-2.5 font-lora text-[14px] sm:text-[15px] leading-relaxed text-[#E4DFDD]">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#E0A0B0] mt-1 text-[8px] opacity-80">◆</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-lora text-[14px] sm:text-[15px] leading-relaxed text-[#E4DFDD]">
                {description}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- AnimatedLetter Helper Component ---
interface AnimatedLetterProps {
  letter: string;
}

const letterVariants: Variants = {
  hover: {
    y: "-50%",
  },
};

export const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ letter }) => {
  if (letter === " ") {
    return <span className="inline-block w-2">&nbsp;</span>;
  }

  return (
    <div className="inline-block h-[34px] sm:h-[40px] overflow-hidden leading-none select-none">
      <motion.span
        className="flex min-w-[2px] flex-col"
        style={{ y: "0%" }}
        variants={letterVariants}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      >
        <span className="h-[34px] sm:h-[40px] flex items-center">{letter}</span>
        <span className="h-[34px] sm:h-[40px] flex items-center text-[#E0A0B0]">{letter}</span>
      </motion.span>
    </div>
  );
};

export default ColorChangeCards;
