import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  SERVICES_LIST,
  FAQS,
} from '@/data/siteData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { EditorialHeading } from '@/components/ui/EditorialHeading';
import { PrimaryButton } from '@/components/ui/Buttons';
import { Accordion } from '@/components/ui/Accordion';
import { HeroVideoSequence } from '@/components/ui/HeroVideoSequence';
import { ColorCard } from '@/components/ui/color-change-card';
import { HoverVideo } from '@/components/ui/HoverVideo';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrappers';
import { SelectedWorkShowcase } from '@/components/portfolio/SelectedWorkShowcase';

export const metadata: Metadata = {
  title: 'Cherryworks | Strategic Design & Automated Conversion Systems',
  description: 'Cherryworks is a premium digital growth partner. We build aesthetic, high-converting digital ecosystems that turn attention into automated business revenue.',
  openGraph: {
    title: 'Cherryworks | Strategic Design & Automated Conversion Systems',
    description: 'We build aesthetic, high-converting digital ecosystems that turn attention into automated business revenue.',
    images: [{ url: '/images/cherryworks-og.jpg' }],
  },
};

export default function HomePage() {
  return (
    <div className="w-full bg-[#0A0507] text-[#FFFFFF] overflow-hidden">
      
      {/* 1. HERO */}
      <HeroVideoSequence />

      {/* 2. PROBLEM / AGITATION (The Reality of Digital Presence) */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
        <SlideUp className="space-y-3 max-w-3xl">
          <SectionLabel label="THE REALITY" dotColor="cherry" />
          <EditorialHeading size="display" className="text-[#FFFFFF]">
            Your digital presence should do <span className="italic font-light text-[#7A0F2E]">more than exist.</span>
          </EditorialHeading>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <StaggerItem className="space-y-3">
            <h3 className="font-instrument text-2xl text-[#FFFFFF]">Passive Storefronts</h3>
            <p className="font-lora text-[#A09895] text-[15px] leading-relaxed">
              Websites that function as quiet brochures—pleasing surfaces without commercial intent or clear conversion pathways.
            </p>
          </StaggerItem>
          <StaggerItem className="space-y-3">
            <h3 className="font-instrument text-2xl text-[#FFFFFF]">Lost Attention</h3>
            <p className="font-lora text-[#A09895] text-[15px] leading-relaxed">
              Visitors arrive, browse briefly, and vanish. Without deliberate conversion design, marketing spend yields zero compounding return.
            </p>
          </StaggerItem>
          <StaggerItem className="space-y-3">
            <h3 className="font-instrument text-2xl text-[#FFFFFF]">Fragmented Craft</h3>
            <p className="font-lora text-[#A09895] text-[15px] leading-relaxed">
              Disconnected tools, sluggish templates, and inconsistent aesthetics that slowly erode customer confidence and brand value.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* 3. SOLUTION / BENEFITS (The 4 Pillars) */}
      <section id="services-section" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-[#F4F0EC] text-[#050505] border-y border-[#E2DDD7]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D5CEC8]">
            <SlideUp className="space-y-3 max-w-3xl">
              <SectionLabel label="OUR SOLUTION" dotColor="cherry" theme="light" />
              <EditorialHeading size="display" className="text-[#050505]">
                Everything your brand needs to grow online.
              </EditorialHeading>
              <p className="font-lora text-[16px] sm:text-[18px] text-[#3A3537] leading-relaxed max-w-2xl pt-2">
                Editorial visual standards paired with high-performance web engineering. Systems crafted to turn attention into customer revenue.
              </p>
            </SlideUp>
            <Link
              href="/services"
              className="text-xs font-manrope font-semibold uppercase tracking-widest text-[#7A0F2E] hover:text-[#050505] flex items-center gap-2 group transition-colors"
            >
              <span>Explore All Pillars</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <StaggerContainer className="divide-y divide-[#E2DDD7]">
            {SERVICES_LIST.map((srv) => (
              <StaggerItem key={srv.id}>
                <Link
                  href={`/${srv.route}`}
                  className="block group relative cursor-pointer overflow-hidden transition-all duration-500 rounded-[2px] active:scale-[0.98] sm:active:scale-100 hover:-translate-y-1 sm:hover:-translate-y-2"
                >
                  {/* Background Video/Image on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 overflow-hidden bg-[#050505]">
                    {srv.videoSrc ? (
                      <HoverVideo src={srv.videoSrc} />
                    ) : (
                      <div
                        className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-100 transition-transform duration-[1.5s]"
                        style={{ backgroundImage: `url(${srv.imgSrc})` }}
                      ></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#050505]/95 via-[#7A0F2E]/40 to-[#0A0507]/90 animate-bg-gradient backdrop-blur-sm"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 py-8 sm:py-14 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-center border border-transparent group-hover:border-[#7A0F2E]/30">
                    <div className="lg:col-span-2 font-instrument text-xl sm:text-3xl text-[#7A0F2E] group-hover:text-[#E0A0B0] transition-colors">
                      PILLAR {srv.number}
                    </div>
                    <div className="lg:col-span-4">
                      <h3 className="font-instrument text-2xl sm:text-4xl md:text-5xl text-[#050505] group-hover:text-[#FFFFFF] transition-colors">
                        {srv.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-5">
                      <p className="font-lora text-[15px] sm:text-[17px] text-[#3A3537] leading-relaxed group-hover:text-[#F4F0EC] transition-colors line-clamp-2 sm:line-clamp-none">
                        {srv.shortDescription}
                      </p>
                    </div>
                    <div className="lg:col-span-1 flex justify-end">
                      <div className="w-10 h-10 rounded-full border border-[#D5CEC8] flex items-center justify-center text-[#3A3537] group-hover:border-[#7A0F2E] group-hover:bg-[#7A0F2E] group-hover:text-[#FFFFFF] transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Flagship Interactive Project Showcase */}
      <SelectedWorkShowcase />

      {/* 4. OUTCOMES / SOCIAL PROOF (Why Cherryworks) */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-[#0A0507] text-[#FFFFFF] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7A0F2E]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#7A0F2E]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <SlideUp className="space-y-4 max-w-3xl">
            <SectionLabel label="STUDIO PHILOSOPHY" dotColor="sakura" />
            <EditorialHeading size="display" className="text-[#FFFFFF]">
              Architecture without excess.
            </EditorialHeading>
            <p className="font-lora text-[16px] sm:text-[18px] text-[#A09895] leading-relaxed max-w-2xl pt-2">
              We operate as an agile design and engineering studio. No bloated agency retainers, no layers of middle management. Just refined craft and focused execution.
            </p>
          </SlideUp>

          <SlideUp className="max-w-3xl pt-2">
            <p className="font-lora text-lg sm:text-xl text-white/80 leading-relaxed font-light">
              Every deliverable—from custom Next.js storefronts to organic search foundations—is built to run fast, convert reliably, and reflect high-end brand authority.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-[#F4F0EC] text-[#050505] border-y border-[#E2DDD7]">
        <div className="max-w-5xl mx-auto space-y-12">
          <FadeIn className="space-y-3">
            <SectionLabel label="FREQUENTLY ASKED QUESTIONS" dotColor="cherry" theme="light" />
            <EditorialHeading size="display" className="text-[#050505]">
              Clear answers for ambitious brands.
            </EditorialHeading>
          </FadeIn>
          <Accordion items={FAQS} />
        </div>
      </section>

      {/* 7. FINAL CTA - Minimalist */}
      <section className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-[#050505] border-t border-[#1C1417] text-center overflow-hidden bg-grain">
        {/* Subtle ambient cherry aura */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[200px] pointer-events-none -z-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(122, 15, 46, 0.2), transparent 70%)',
          }}
        />

        <FadeIn className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="font-instrument text-4xl sm:text-6xl md:text-7xl text-white font-normal tracking-tight leading-[1.05]">
            Let&apos;s build something <br className="hidden sm:inline" />
            <span className="italic font-light text-[#E0A0B0]">worth scaling.</span>
          </h2>

          <div className="pt-2 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#7A0F2E] hover:bg-[#8F1437] text-white font-manrope text-xs font-bold uppercase tracking-[0.18em] rounded-[2px] transition-all duration-300 shadow-[0_0_24px_rgba(122,15,46,0.35)] hover:shadow-[0_0_36px_rgba(224,160,176,0.25)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#E0A0B0] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
