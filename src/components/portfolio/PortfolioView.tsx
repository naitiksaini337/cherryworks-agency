"use client";

import React, { useState } from "react";
import SakuraEditorialPoster from "@/components/ui/sakura-editorial-poster";
import HeroCarousel, { type HeroCarouselItem } from "@/components/ui/hero-carousel";
import { Footer } from "@/components/layout/Footer";
import Skiper39 from "@/components/ui/skiper39";
import { PROJECTS } from "@/data/projects";

export default function PortfolioView() {
  const [selectedCarouselIndex, setSelectedCarouselIndex] = useState(0);

  // Map exactly 17 curated flagship projects with hero section imagery
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
    <main className="min-h-screen bg-black text-[#F5F5F7] flex flex-col selection:bg-[#7A0F2E] selection:text-white">
      {/* 1. Full-Screen Sakura Editorial Hero Section */}
      <section className="relative w-full h-auto bg-black">
        <SakuraEditorialPoster
          title={"CHERRY WORKS"}
          sceneSrc="https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=2000&q=85"
          height="180vh"
          className="w-full"
        />
      </section>

      {/* 2. Flagship Interactive Slider Showcase */}
      <section id="selector" className="relative w-full py-12 px-4 sm:px-8 max-w-[1720px] mx-auto bg-black">
        <div className="w-full h-[820px] min-h-[720px]">
          <HeroCarousel
            items={carouselItems}
            index={selectedCarouselIndex}
            onIndexChange={setSelectedCarouselIndex}
            brand="CHERRY WORKS"
            className="h-full w-full"
          />
        </div>
      </section>

      {/* 3. Collaboration, NDA Notice & Connect Footer */}
      <Footer />

      {/* 4. Bottom-Most Footer: Interactive Walking People Animation */}
      <section className="relative w-full overflow-hidden bg-black border-t border-white/[0.06]">
        <Skiper39 />
      </section>
    </main>
  );
}

