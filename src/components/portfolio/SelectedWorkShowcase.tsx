"use client";

import React, { useState } from "react";
import HeroCarousel, { type HeroCarouselItem } from "@/components/ui/hero-carousel";
import { PROJECTS } from "@/data/projects";

export interface SelectedWorkShowcaseProps {
  className?: string;
  showHeading?: boolean;
}

export function SelectedWorkShowcase({
  className = "",
  showHeading = true,
}: SelectedWorkShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Map curated flagship projects with hero section imagery & palettes
  const carouselItems: HeroCarouselItem[] = React.useMemo(
    () =>
      PROJECTS.map((p) => ({
        id: p.id,
        title: p.title,
        image: p.imageUrl,
        accent: p.accentColor,
        palette: p.palette,
        liveUrl: p.liveUrl,
        niche: p.niche,
        client: p.client,
        credit: p.client.toUpperCase(),
        meta: [p.niche.toUpperCase(), p.location.toUpperCase(), p.clientMetrics.toUpperCase()],
      })),
    []
  );

  return (
    <section
      id="work"
      className={`relative w-full bg-[#050505] text-[#F5F5F7] py-16 sm:py-24 overflow-hidden selection:bg-[#7A0F2E] selection:text-white border-t border-[#1C1417] bg-grain ${className}`}
    >
      {/* Subtle radial ambient vignettes for seamless transition */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-b from-[#7A0F2E]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#7A0F2E]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Minimalist Work Section Header */}
      {showHeading && (
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-8 sm:mb-12 text-center space-y-3 relative z-10">
          <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.25em] text-[#E0A0B0] block">
            Selected Work
          </span>

          <h2 className="font-instrument text-4xl sm:text-6xl text-white font-normal tracking-tight leading-[1.05]">
            Featured Architecture &amp;{" "}
            <span className="italic font-light text-[#E0A0B0]">Storefronts</span>
          </h2>

          <p className="font-lora text-sm sm:text-base text-[#A09895] max-w-xl mx-auto leading-relaxed">
            Custom web systems and digital storefronts engineered for performance.
          </p>
        </div>
      )}

      {/* Flagship Interactive Filmstrip Scroll Slider */}
      <div className="max-w-[1720px] mx-auto w-full px-4 sm:px-8 relative z-10">
        <div className="w-full h-[800px] min-h-[700px] rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.95)] overflow-hidden relative bg-black">
          <HeroCarousel
            items={carouselItems}
            index={selectedIndex}
            onIndexChange={setSelectedIndex}
            brand="CHERRYWORKS"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default SelectedWorkShowcase;
