import React from 'react';
import { SlideUp } from '@/components/animations/MotionWrappers';
import { WorkPortfolio } from '@/components/portfolio/WorkPortfolio';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work & Projects | Cherryworks Studios',
  description: 'Explore our portfolio of high-converting web apps, mobile applications, brand systems, and UI/UX design. We bring ideas to life through code and design.',
  openGraph: {
    title: 'Work & Projects | Cherryworks Studios',
    description: 'Explore our portfolio of high-converting web apps, mobile applications, brand systems, and UI/UX design.',
  }
};

export default function WorkPage() {
  return (
    <div className="w-full min-h-screen bg-[#050505] text-[#E4DFDD]">
      {/* Hero */}
      <section className="relative min-h-[85vh] sm:min-h-screen w-full overflow-hidden flex items-end sm:items-center bg-[#050505] border-b border-[#1C1417]">
        <video
          src="https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/7.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        />
        <div className="absolute inset-0 z-10 bg-black/35 bg-gradient-to-t from-[#050505] via-black/40 to-transparent sm:bg-none transition-opacity duration-1000"></div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-32 h-full flex flex-col justify-end sm:justify-center">
          <div className="max-w-4xl space-y-6">
          <SlideUp>
            <SectionLabel label="SELECTED WORK" dotColor="sakura" />
          </SlideUp>
          <SlideUp delay={0.1}>
            <h1 className="font-instrument text-5xl sm:text-7xl md:text-8xl text-[#FFFFFF] tracking-tight leading-[0.95]">
              Digital experiences built to <br />
              <span className="italic text-[#E0A0B0] font-light">move businesses forward.</span>
            </h1>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="font-manrope font-medium text-base sm:text-xl text-[#F4F0EC] leading-relaxed max-w-2xl drop-shadow-md">
              A growing collection of websites, e-commerce experiences, and digital systems created by
              CherryScaling Studios.
            </p>
          </SlideUp>
          </div>
        </div>
      </section>

      <WorkPortfolio />
    </div>
  );
}
