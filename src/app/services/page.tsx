'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { SERVICES_LIST, getWhatsAppUrl } from '@/data/siteData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { EditorialHeading } from '@/components/ui/EditorialHeading';
import { PrimaryButton } from '@/components/ui/Buttons';
import { ArrowRight, Check, ArrowUpRight, MessageCircle } from 'lucide-react';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrappers';

interface ServicesOverviewPageProps {

}

export default function ServicesOverviewPage() {
  const router = useRouter();
  const handleNav = (route: string) => {
    router.push(`/${route}`);
  };

  return (
    <div className="w-full bg-[#F4F0EC] text-[#3A3537]">
      {/* Page Hero */}
      <section className="relative min-h-[85vh] sm:min-h-screen w-full overflow-hidden flex items-end sm:items-center bg-[#050505] border-b border-[#1C1417]">
        <video
          src="https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/cherryworks-vids/8.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/vids/8-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        />
        <div className="absolute inset-0 z-10 bg-black/35 bg-gradient-to-t from-[#050505] via-black/40 to-transparent sm:bg-none transition-opacity duration-1000"></div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-32 h-full flex flex-col justify-end sm:justify-center">
          <FadeIn className="max-w-4xl space-y-6">
            <SectionLabel label="SERVICES" dotColor="sakura" />
            <h1 className="font-instrument text-5xl sm:text-7xl md:text-8xl text-[#FFFFFF] tracking-tight leading-[0.95]">
              Digital systems designed <br />
              <span className="italic text-[#E0A0B0] font-light">around growth.</span>
            </h1>
            <p className="font-lora text-lg sm:text-xl text-[#F4F0EC] leading-relaxed max-w-2xl drop-shadow-md">
              From your first website to a complete e-commerce and growth system, Cherryworks brings
              strategy, design, technology, and automation together.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="pt-20 pb-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-24">
        {/* 4 Pillars In-Depth */}
        <StaggerContainer className="space-y-20">
          {SERVICES_LIST.map((srv, idx) => (
            <StaggerItem key={srv.id}>
            <div
              className="bg-[#FFFFFF] border border-[#E2DDD7] rounded-[2px] overflow-hidden group"
              id={`service-pillar-${srv.id}`}
            >
              {srv.videoSrc ? (
                <div className="w-full h-[250px] md:h-[350px] relative overflow-hidden bg-[#050505]">
                  <video
                    src={srv.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
          preload="auto"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
                </div>
              ) : srv.imgSrc ? (
                <div className="w-full h-[250px] md:h-[350px] relative overflow-hidden bg-[#050505]">
                  <Image 
                    src={srv.imgSrc} 
                    alt={srv.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out opacity-90" 
                  />
                  <div className="absolute inset-0 bg-[#7A0F2E]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
                </div>
              ) : null}
              
              <div className="p-8 sm:p-12 md:p-16 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className="font-instrument text-2xl text-[#7A0F2E]">
                    PILLAR {srv.number}
                  </div>
                  <h2 className="font-instrument text-4xl sm:text-5xl text-[#050505] tracking-tight">
                    {srv.title}
                  </h2>
                  <p className="font-lora text-[15px] sm:text-[17px] text-[#7D7578] leading-relaxed">
                    {srv.heroSupporting}
                  </p>
                  {srv.startingPrice && (
                    <div className="pt-2">
                      <span className="text-[11px] font-manrope font-semibold uppercase tracking-widest text-[#A09895] block">
                        Investment
                      </span>
                      <span className="font-instrument text-2xl sm:text-3xl text-[#E0A0B0]">
                        {srv.startingPrice}
                      </span>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-[#E2DDD7] lg:pl-10">
                  <div className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-[#7A0F2E]">
                    Core Deliverables & Engineering
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-[13px] font-manrope font-medium text-[#504A4C]">
                        <Check className="w-4 h-4 text-[#7A0F2E] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {srv.maintenanceNote && (
                    <div className="p-4 bg-[#FDFBF9] border border-[#221419] rounded-[2px] text-xs font-manrope font-medium text-[#7D7578] leading-relaxed">
                      {srv.maintenanceNote}
                    </div>
                  )}

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <PrimaryButton
                      variant="cherry"
                      onClick={() => handleNav(srv.route)}
                    >
                      EXPLORE {srv.title.toUpperCase()} →
                    </PrimaryButton>

                    <a
                      href={getWhatsAppUrl(srv.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-manrope font-semibold uppercase tracking-wider text-[#E0A0B0] hover:text-[#050505] py-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ask About This on WhatsApp</span>
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <SlideUp className="p-10 sm:p-14 bg-[#0E0B0D] border border-[#221419] rounded-[2px] text-center space-y-6">
          <SectionLabel label="PROJECT SCOPING" dotColor="sakura" className="justify-center" />
          <h3 className="font-instrument text-3xl sm:text-5xl text-[#FFFFFF]">
            Need a combination of multiple services?
          </h3>
          <p className="font-manrope font-medium text-[15px] text-[#A09895] max-w-xl mx-auto">
            We regularly architect cross-functional packages uniting web engineering, SEO, and social
            automation for maximum brand velocity.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <PrimaryButton variant="light" onClick={() => handleNav('contact')}>
              REQUEST CUSTOM PROPOSAL →
            </PrimaryButton>
          </div>
        </SlideUp>
      </div>
    </div>
  );
};
