'use client';

import React from 'react';
import { ABOUT_BELIEFS, FAQS, getWhatsAppUrl } from '@/data/siteData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { PrimaryButton } from '@/components/ui/Buttons';
import { MessageCircle, ArrowRight } from 'lucide-react';
import WarpShader from '@/components/ui/wrap-shader';
import Link from 'next/link';
import { SlideUp, FadeIn, StaggerContainer } from '@/components/animations/MotionWrappers';
import { Accordion } from '@/components/ui/Accordion';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#F4F0EC] text-[#3A3537] selection:bg-[#7A0F2E] selection:text-white">
      {/* 1. HERO SECTION (Outcome-Focused) */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center bg-[#050505] border-b border-[#1C1417]">
        <video
          src="https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/9.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/vids/9-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        />
        <div className="absolute inset-0 z-10 bg-black/40 bg-gradient-to-t from-[#050505] via-black/50 to-transparent sm:bg-none transition-opacity duration-1000"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20 flex flex-col justify-center">
          <SlideUp className="max-w-4xl space-y-6">
            <SectionLabel label="ABOUT CHERRYWORKS STUDIOS" dotColor="sakura" />
            <h1 className="font-instrument text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.95]">
              Growth deserves <br />
              <span className="italic text-[#E0A0B0] font-light">better than guesswork.</span>
            </h1>
            <p className="font-lora text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
              We combine creative direction, intelligent automation, and practical business execution to help brands grow predictably.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link href="/contact">
                <PrimaryButton variant="cherry">
                  WORK WITH US <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </PrimaryButton>
              </Link>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* 2. THE PROBLEM (Agitation/Current State) */}
      <section className="py-24 sm:py-32 bg-[#F4F0EC] border-b border-[#E2DDD7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <StaggerContainer className="space-y-8 order-2 lg:order-1">
              <SlideUp>
                <SectionLabel label="THE INDUSTRY PROBLEM" dotColor="cherry" theme="light" />
                <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-[#050505] tracking-tight leading-[1.05] mt-6">
                  Most agencies isolate <span className="italic text-[#7A0F2E]">design from growth.</span>
                </h2>
              </SlideUp>

              <SlideUp>
                <p className="font-lora text-[17px] sm:text-[19px] text-[#504A4C] leading-relaxed">
                  Business owners often find themselves choosing between beautiful branding that doesn't convert, or high-converting funnels that look cheap.
                  Digital growth shouldn't be a disjointed puzzle of tools, slow websites, and uncoordinated marketing efforts.
                </p>
              </SlideUp>

              <SlideUp className="space-y-4 pt-4">
                {[
                  "Agencies that don't understand your sales process.",
                  "Beautiful websites that fail to capture leads.",
                  "Social media that looks good but brings no revenue.",
                  "Disjointed tech stacks that create more manual work."
                ].map((pain, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7A0F2E] mt-2.5 shrink-0" />
                    <p className="font-lora text-[16px] text-[#3A3537] leading-relaxed">{pain}</p>
                  </div>
                ))}
              </SlideUp>
            </StaggerContainer>

            <FadeIn className="order-1 lg:order-2">
              <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-[#EBE5DF] relative rounded-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/animated/3.jpeg')] bg-cover bg-center opacity-90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1417]/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="font-instrument text-2xl mb-2">The gap we saw.</p>
                  <p className="font-lora text-white/80 text-sm">We realized there had to be a way to merge premium aesthetics with ruthless conversion architecture.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION / APPROACH (Transformation) */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#E2DDD7]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-[#EBE5DF] relative rounded-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/animated/4.jpeg')] bg-cover bg-center opacity-90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1417]/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="font-instrument text-2xl mb-2">Our Story.</p>
                  <p className="font-lora text-white/80 text-sm">Built from a desire to make digital growth straightforward.</p>
                </div>
              </div>
            </FadeIn>

            <StaggerContainer className="space-y-8">
              <SlideUp>
                <SectionLabel label="OUR APPROACH" dotColor="cherry" theme="light" />
                <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-[#050505] tracking-tight leading-[1.05] mt-6">
                  A unified engine for <span className="italic text-[#7A0F2E]">digital growth.</span>
                </h2>
              </SlideUp>

              <SlideUp>
                <p className="font-lora text-[17px] sm:text-[19px] text-[#504A4C] leading-relaxed">
                  Cherryworks was founded on a simple premise: a brand's digital presence should not be a complex puzzle.
                  We set out to build a studio that unifies design, technology, and automation—delivering high-performing digital assets that just work and drive real commercial growth.
                </p>
              </SlideUp>

              <SlideUp className="space-y-4 pt-4">
                {[
                  "Premium Aesthetics: Design that commands authority.",
                  "Conversion Architecture: Engineered for user action.",
                  "Intelligent Automation: Scale without manual friction."
                ].map((pillar, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7A0F2E] mt-2.5 shrink-0" />
                    <p className="font-lora text-[16px] text-[#3A3537] leading-relaxed">{pillar}</p>
                  </div>
                ))}
              </SlideUp>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* 4. SOCIAL PROOF / AUTHORITY (Studio Philosophy) */}
      <section className="py-24 sm:py-32 bg-[#050505] text-[#FFFFFF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4 space-y-6">
              <SlideUp>
                <SectionLabel label="STUDIO PHILOSOPHY" dotColor="sakura" />
                <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] mt-6">
                  What We <br /> <span className="italic text-[#E0A0B0]">Believe</span>
                </h2>
                <p className="font-manrope font-semibold uppercase tracking-widest text-xs text-[#E0A0B0] mt-4">
                  Execution without fluff.
                </p>
              </SlideUp>
            </div>

            <div className="lg:col-span-8 flex flex-col">
              <StaggerContainer>
                {ABOUT_BELIEFS.map((belief, idx) => (
                  <SlideUp
                    key={belief.number}
                    className={`py-8 sm:py-12 flex flex-col sm:flex-row gap-6 sm:gap-12 items-start ${idx !== 0 ? 'border-t border-[#1C1417]' : 'pt-0'
                      }`}
                  >
                    <div className="font-instrument text-4xl sm:text-5xl text-[#E0A0B0] shrink-0 w-12 sm:w-16">
                      {belief.number}
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-instrument text-2xl sm:text-3xl text-white tracking-tight">
                        {belief.title}
                      </h3>
                      <p className="font-lora text-[16px] text-white/70 leading-relaxed max-w-xl">
                        {belief.description}
                      </p>
                    </div>
                  </SlideUp>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 sm:py-32 bg-[#F4F0EC] border-b border-[#E2DDD7]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <SlideUp>
              <SectionLabel label="FAQ" dotColor="cherry" className="justify-center" theme="light" />
              <h2 className="font-instrument text-4xl sm:text-5xl text-[#050505] tracking-tight mt-6">
                Common Questions
              </h2>
            </SlideUp>
          </div>

          <SlideUp>
            <Accordion items={FAQS.slice(0, 5)} theme="light" />
          </SlideUp>

          <SlideUp className="mt-12 text-center">
            <p className="font-lora text-[#504A4C] text-[16px]">
              Still have questions? <Link href="/contact" className="text-[#7A0F2E] underline underline-offset-4 decoration-[#7A0F2E]/30 hover:decoration-[#7A0F2E] transition-colors">Reach out directly.</Link>
            </p>
          </SlideUp>
        </div>
      </section>

      {/* 6. FINAL CTA (Edge-to-Edge Dramatic) */}
      <section className="relative py-28 sm:py-36 md:py-44 px-5 sm:px-8 lg:px-12 bg-[#050505] text-center flex flex-col items-center justify-center overflow-hidden">
        <WarpShader
          colors={[
            "hsl(340, 85%, 15%)",
            "hsl(345, 60%, 72%)",
            "hsl(343, 78%, 28%)",
            "hsl(348, 50%, 82%)",
          ]}
          speed={0.8}
          className="opacity-70"
        />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none z-0"></div>

        <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
          <SlideUp>
            <SectionLabel label="READY TO GROW?" dotColor="sakura" className="justify-center" />
          </SlideUp>

          <SlideUp>
            <h3 className="font-instrument text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.95]">
              Let's build something <br />
              <span className="italic text-[#E0A0B0] font-light">worth scaling.</span>
            </h3>
          </SlideUp>

          <SlideUp>
            <p className="font-lora text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Tell us where you are, where you want to go, and we'll help build the digital system to
              get you there.
            </p>
          </SlideUp>

          <SlideUp className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <PrimaryButton variant="cherry">
                START A PROJECT <ArrowRight className="w-4 h-4 ml-2 inline-block" />
              </PrimaryButton>
            </Link>
            <a
              href={getWhatsAppUrl("Hi Cherryworks Studios, I'd like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black/40 backdrop-blur-sm border border-[#E0A0B0]/40 text-[#E0A0B0] hover:bg-[#7A0F2E] hover:text-[#FFFFFF] text-xs font-manrope font-semibold uppercase tracking-widest transition-all rounded-[2px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp →</span>
            </a>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
