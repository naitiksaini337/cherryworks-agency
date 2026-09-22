'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { BRAND, getWhatsAppUrl } from '@/data/siteData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProjectInquiryForm } from '@/components/forms/ProjectInquiryForm';
import { Mail, MessageCircle, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrappers';

interface ContactPageProps {
  
}

export default function ContactPage() {
  const router = useRouter();
  const scrollToForm = () => {
    const el = document.getElementById('inquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#050505] text-[#F4F0EC]">
      {/* ========================================================================= */}
      {/* 1. CINEMATIC FULL-WIDTH CONTACT HERO SECTION                             */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] sm:min-h-screen w-full overflow-hidden flex items-end sm:items-center bg-[#050505]">
        {/* Full-width Video */}
        <video
          src="https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/cherryworks-vids/5.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/vids/5-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Minimal Darkness Overlay (Clean & High Contrast) */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        {/* Subtle Bottom & Mobile Gradient for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent z-10"></div>

        {/* Hero Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-32 h-full flex flex-col justify-end sm:justify-center">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <SlideUp className="mb-3 sm:mb-4">
              <SectionLabel label="CONTACT" dotColor="sakura" />
            </SlideUp>

            {/* Headline */}
            <SlideUp delay={0.1}>
              <h1 className="font-instrument text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.95] mb-3 sm:mb-4">
                Let's build your <br />
                <span className="italic font-light text-[#E0A0B0]">next move.</span>
              </h1>
            </SlideUp>

            {/* Supporting Copy */}
            <SlideUp delay={0.2}>
              <p className="font-lora text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed mb-6 sm:mb-8 drop-shadow-md">
                Tell us about your business, what you're trying to achieve, and where you need help.
              </p>
            </SlideUp>
            
            {/* CTAs */}
            <SlideUp delay={0.3} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 bg-[#EAE4E1] text-[#050505] hover:bg-[#FFFFFF] text-xs font-manrope font-bold uppercase tracking-widest transition-all rounded-[2px] active:scale-95 shadow-lg"
              >
                START AN INQUIRY ↓
              </button>

              <a
                href={getWhatsAppUrl(
                  "Hi Cherryworks, I'm reaching out directly to discuss a project."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 bg-[#7A0F2E] hover:bg-[#8C1835] text-[#FFFFFF] text-xs font-manrope font-bold uppercase tracking-widest transition-all rounded-[2px] shadow-[0_0_24px_rgba(122,15,46,0.4)] border border-[#A3163E] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#FFFFFF]" />
                <span>CHAT ON WHATSAPP →</span>
              </a>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DIRECT CHANNELS & PROJECT INQUIRY FORM                                */}
      {/* ========================================================================= */}
      <div id="inquiry-section" className="w-full py-20 sm:py-28 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Studio Channels */}
          <div className="lg:col-span-5 space-y-8">
            <SlideUp className="space-y-3">
              <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.25em] text-[#7A0F2E]">
                Direct Communication
              </span>
              <h2 className="font-instrument text-3xl sm:text-4xl text-[#FFFFFF]">
                Fast, direct access to the studio team.
              </h2>
              <p className="font-lora text-[15px] sm:text-[16px] text-[#A09895] leading-relaxed mb-8">
                Whether you have a fully scoped website brief or simply want to explore what's
                possible, we respond quickly with clear pricing and timelines.
              </p>
            </SlideUp>

            {/* Direct Channel Cards */}
            <StaggerContainer className="space-y-4">
              {/* WhatsApp Card - Highlighted */}
              <StaggerItem>
                <a
                  href={getWhatsAppUrl(
                    "Hi Cherryworks, I'm reaching out directly to discuss a project."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-gradient-to-br from-[#200A13] via-[#14060C] to-[#0A0709] border border-[#7A0F2E] shadow-[0_4px_30px_rgba(122,15,46,0.3)] hover:shadow-[0_4px_40px_rgba(122,15,46,0.5)] hover:border-[#A3163E] rounded-[2px] block group transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7A0F2E]/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#7A0F2E] border border-[#A3163E] flex items-center justify-center text-[#FFFFFF] shadow-md group-hover:scale-105 transition-transform">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-manrope font-bold uppercase tracking-wider text-[#E0A0B0]">
                            Priority Fast Channel
                          </span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-manrope font-bold uppercase bg-[#7A0F2E] text-[#FFFFFF] tracking-wider">
                            Instant
                          </span>
                        </div>
                        <div className="font-instrument text-xl sm:text-2xl text-[#FFFFFF] group-hover:text-[#E0A0B0] transition-colors mt-0.5">
                          Chat on WhatsApp
                        </div>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#7A0F2E]/20 border border-[#7A0F2E] flex items-center justify-center text-[#FFFFFF] group-hover:bg-[#7A0F2E] transition-all">
                      <ArrowUpRight className="w-4 h-4 text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                  <p className="text-xs font-manrope font-medium text-[#D0C8C5] mt-3.5 relative z-10">
                    Direct chat with the studio for fast quotes, brief discussions, and immediate project questions.
                  </p>
                </a>
              </StaggerItem>

              {/* Email Card */}
              <StaggerItem>
                <div className="p-6 bg-[#0A0709] border border-[#1F1418] rounded-[2px] space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#140D10] border border-[#2B1720] flex items-center justify-center text-[#A09895]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-manrope font-bold uppercase tracking-wider text-[#7D7578]">
                        Email
                      </div>
                      <a 
                        href={`mailto:${BRAND.email}`} 
                        className="inline-flex items-center gap-1.5 font-instrument text-lg text-[#FFFFFF] hover:text-[#E0A0B0] transition-all group"
                      >
                        <span>{BRAND.email}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* Location Card */}
              <StaggerItem>
                <div className="p-6 bg-[#0A0709] border border-[#1F1418] rounded-[2px] space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#140D10] border border-[#2B1720] flex items-center justify-center text-[#708070]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-manrope font-bold uppercase tracking-wider text-[#7D7578]">
                        Headquarters & Reach
                      </div>
                      <div className="font-instrument text-lg text-[#FFFFFF]">{BRAND.location}</div>
                    </div>
                  </div>
                  <p className="text-xs font-manrope font-medium text-[#7D7578] pt-1">
                    Serving clients across major Indian cities and global international markets.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Response Time Guarantee */}
            <SlideUp delay={0.2} className="p-4 bg-[#120B0E] border border-[#26151C] rounded-[2px] flex items-start gap-3 text-xs font-manrope font-medium text-[#A09895]">
              <Clock className="w-4 h-4 text-[#E0A0B0] flex-shrink-0 mt-0.5" />
              <span>
                Standard inquiry response turnaround is under 24 hours. WhatsApp inquiries are
                typically acknowledged in real-time.
              </span>
            </SlideUp>
          </div>

          {/* Right Column: High-Converting Project Inquiry Form */}
          <SlideUp delay={0.2} className="lg:col-span-7 bg-[#0A0709] border border-[#1F1418] p-6 sm:p-10 rounded-[2px] space-y-6">
            <div className="border-b border-[#1C1417] pb-4">
              <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.25em] text-[#7A0F2E]">
                Step 1 of 1
              </span>
              <h3 className="font-instrument text-3xl sm:text-4xl text-[#FFFFFF] mt-1">
                Project Inquiry Form
              </h3>
              <p className="text-xs font-manrope font-medium text-[#A09895] mt-1">
                Fill in the details below to receive a custom proposal and milestone breakdown.
              </p>
            </div>

            <ProjectInquiryForm />
          </SlideUp>
        </div>
      </div>
    </div>
  </div>
  );
}
