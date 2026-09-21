import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  SERVICES_LIST,
  FAQS,
  getWhatsAppUrl,
} from '@/data/siteData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { EditorialHeading } from '@/components/ui/EditorialHeading';
import { PrimaryButton } from '@/components/ui/Buttons';
import { Accordion } from '@/components/ui/Accordion';
import { PricingTabsSection } from '@/components/pricing/PricingTabsSection';
import { HeroVideoSequence } from '@/components/ui/HeroVideoSequence';
import WarpShader from '@/components/ui/wrap-shader';
import { ColorCard } from '@/components/ui/color-change-card';
import { HoverVideo } from '@/components/ui/HoverVideo';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrappers';

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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StaggerItem className="space-y-4">
            <h3 className="font-instrument text-2xl text-[#FFFFFF]">Invisible Brands</h3>
            <p className="font-lora text-[#A09895] leading-relaxed">
              Most businesses have websites that act as digital brochures—sitting quietly, waiting for traffic that never converts. Attention is wasted on generic aesthetics without a commercial engine.
            </p>
          </StaggerItem>
          <StaggerItem className="space-y-4">
            <h3 className="font-instrument text-2xl text-[#FFFFFF]">Leaky Funnels</h3>
            <p className="font-lora text-[#A09895] leading-relaxed">
              Traffic alone doesn't pay the bills. If your digital touchpoints aren't engineered to capture, nurture, and convert visitors automatically, you are actively losing revenue.
            </p>
          </StaggerItem>
          <StaggerItem className="space-y-4">
            <h3 className="font-instrument text-2xl text-[#FFFFFF]">Fragmented Systems</h3>
            <p className="font-lora text-[#A09895] leading-relaxed">
              Juggling multiple tools, disjointed branding, and manual follow-ups creates friction. A fragmented system confuses customers and exhausts your team.
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
                We combine editorial design with automated conversion architecture. It's not just about looking premium; it's about building a digital ecosystem that actively generates business.
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
                      {srv.startingPrice && (
                        <span className="inline-block mt-2 text-[11px] font-manrope font-semibold uppercase tracking-widest text-[#7D7578] group-hover:text-[#EAE4E1]">
                          Starting from {srv.startingPrice}
                        </span>
                      )}
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

      {/* 4. OUTCOMES / SOCIAL PROOF (Why Cherryworks) */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-[#0A0507] text-[#FFFFFF] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7A0F2E]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#7A0F2E]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <SlideUp className="space-y-3 max-w-3xl">
            <SectionLabel label="OUTCOMES" dotColor="sakura" />
            <EditorialHeading size="display" className="text-[#FFFFFF]">
              A simpler way to build and grow.
            </EditorialHeading>
            <p className="font-lora text-[16px] sm:text-[18px] text-[#A09895] leading-relaxed max-w-2xl pt-2">
              We leverage AI workflows and automation-first engineering to deliver faster, more precise, and highly scalable results.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerItem>
              <ColorCard
                number="01"
                heading="AI-Assisted Precision"
                bullets={[
                  "AI-driven content & research",
                  "Faster execution precision",
                  "High consistency standards",
                  "Human taste preserved"
                ]}
                imgSrc="/images/animated/ai_workflows_cherry_1788300621903.jpg"
              />
            </StaggerItem>
            <StaggerItem>
              <ColorCard
                number="02"
                heading="Conversion-First"
                bullets={[
                  "Outcome-driven architecture",
                  "Clear direct business purpose",
                  "Turns visitors into leads",
                  "Scalable paying customer funnels"
                ]}
                imgSrc="/images/animated/conversion_cherry_1788300631408.jpg"
              />
            </StaggerItem>
            <StaggerItem>
              <ColorCard
                number="03"
                heading="Automated Workflows"
                bullets={[
                  "Automated lead capture",
                  "Seamless customer communication",
                  "Instant appointment booking",
                  "Faster deal-closing sequences"
                ]}
                imgSrc="/images/animated/automation_cherry_1788300643563.jpg"
              />
            </StaggerItem>
            <StaggerItem>
              <ColorCard
                number="04"
                heading="Continuous Compounding"
                bullets={[
                  "Measurable business outcomes",
                  "Ongoing workflow improvements",
                  "Iterative scaling systems",
                  "Steady revenue growth"
                ]}
                imgSrc="/images/animated/brand_performance_cherry_1788300654055.jpg"
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 5. PRICING */}
      <PricingTabsSection />

      {/* 6. FAQ */}
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

      {/* 7. FINAL CTA */}
      <section className="relative py-28 sm:py-36 md:py-44 px-5 sm:px-8 lg:px-12 bg-[#050505] overflow-hidden">
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

        <FadeIn className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <SectionLabel label="READY TO GROW?" dotColor="sakura" className="justify-center" />
          
          <h2 className="font-instrument text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.95]">
            Let's build something <br />
            <span className="italic text-[#E0A0B0] font-light">worth scaling.</span>
          </h2>

          <p className="font-lora text-[16px] sm:text-[18px] text-white/90 max-w-xl mx-auto leading-relaxed drop-shadow-sm">
            Tell us where you are, where you want to go, and we'll help build the digital system to get you there.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <PrimaryButton variant="cherry">
                START A PROJECT →
              </PrimaryButton>
            </Link>

            <a
              href={getWhatsAppUrl("Hi Cherryworks, I'm ready to build a digital growth system for my brand.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black/40 backdrop-blur-sm border border-[#E0A0B0]/40 text-[#E0A0B0] hover:bg-[#7A0F2E] hover:text-[#FFFFFF] text-xs font-manrope font-semibold uppercase tracking-widest transition-all rounded-[2px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp →</span>
            </a>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
