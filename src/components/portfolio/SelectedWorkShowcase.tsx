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

  // Map exactly 17 curated flagship projects with hero section imagery & jewel-tone palettes
  const carouselItems: HeroCarouselItem[] = PROJECTS.map((p) => ({
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
  }));

  return (
    <section
      id="work"
      className={`relative w-full bg-black text-[#F5F5F7] py-16 sm:py-24 overflow-hidden selection:bg-[#7A0F2E] selection:text-white border-t border-white/[0.06] ${className}`}
    >
      {/* Subtle radial ambient vignettes for seamless transition */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-b from-[#7A0F2E]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#7A0F2E]/5 rounded-full blur-3xl pointer-events-none" />

      {showHeading && (
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs tracking-widest text-[#A1A1AA] uppercase">
              [ SELECTED ARCHITECTURE &amp; CLIENT BUILDS ]
            </span>
          </div>

          <h2 className="font-instrument text-4xl sm:text-6xl md:text-7xl text-white font-normal tracking-tight leading-[1.05]">
            Selected Case Studies &amp; <br className="hidden sm:inline" />
            <span className="italic font-light text-[#E0A0B0]">Flagship Storefronts</span>
          </h2>

          <p className="font-lora text-base sm:text-lg text-[#A09895] max-w-2xl mx-auto leading-relaxed">
            Custom conversion architecture, high-performance web applications, and direct-to-consumer digital ecosystems engineered for growth.
          </p>
        </div>
      )}

      {/* Flagship Interactive Filmstrip Slider Container */}
      <div className="max-w-[1720px] mx-auto w-full px-4 sm:px-8 relative z-10">
        <div className="w-full h-[820px] min-h-[720px] rounded-3xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.95)] overflow-hidden relative bg-black">
          <HeroCarousel
            items={carouselItems}
            index={selectedIndex}
            onIndexChange={setSelectedIndex}
            brand="CHERRY WORKS"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default SelectedWorkShowcase;
