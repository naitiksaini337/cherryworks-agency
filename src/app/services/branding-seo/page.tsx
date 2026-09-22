'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { PrimaryButton } from '@/components/ui/Buttons';
import { getWhatsAppUrl } from '@/data/siteData';
import { Accordion } from '@/components/ui/Accordion';
import { SlideUp, StaggerContainer, StaggerItem, FadeIn } from '@/components/animations/MotionWrappers';
import { FluidExpandingGrid } from '@/components/ui/fluid-expanding-grid';
import { 
  MessageCircle, 
  ArrowRight, 
  Search,
  PenTool,
  TrendingUp,
  ShieldCheck,
  Clock
} from 'lucide-react';

export default function BrandingSeoPage() {
  const router = useRouter();

  const fluidItems = [
    {
      id: "item-1",
      title: 'Technical & On-Page SEO',
      subtitle: 'Rank for high-intent keywords that actually matter.',
      image: "/images/animated/watercolor/brand_seo_1790029595067.jpg",
      color: "#7A0F2E"
    },
    {
      id: "item-2",
      title: 'Premium Brand Identity',
      subtitle: 'Bespoke logos, typography, and visual systems.',
      image: "/images/animated/watercolor/brand_identity_1790029607291.jpg",
      color: "#050505"
    },
    {
      id: "item-3",
      title: 'Content & Backlink Strategy',
      subtitle: 'Authoritative content that Google loves and rewards.',
      image: "/images/animated/watercolor/brand_content_1790029617964.jpg",
      color: "#E0A0B0"
    }
  ];

  const faqs = [
    {
      question: 'How long does SEO take to see actual results?',
      answer: 'SEO is a compounding long-term investment. Typically, you will start seeing significant movement in rankings and traffic between 3 to 6 months. We provide transparent monthly reports so you can track the exact ROI.'
    },
    {
      question: 'What exactly is included in the Branding package?',
      answer: 'Our comprehensive branding suite includes logo design, primary and secondary color palettes, typography systems, comprehensive brand guidelines, and social media assets to ensure consistency everywhere.'
    },
    {
      question: 'Do you also do Local SEO?',
      answer: 'Absolutely. If you have a physical location or a specific service area, we heavily optimize your Google Business Profile, manage local citations, and drive localized traffic straight to your door.'
    },
    {
      question: 'Can we just do SEO without the branding?',
      answer: 'Yes. While we highly recommend the combination for maximum conversion—since traffic is useless if the brand looks untrustworthy—we do offer standalone SEO and standalone Branding packages tailored to your needs.'
    },
    {
      question: 'Are your SEO tactics safe from Google penalties?',
      answer: '100%. We strictly adhere to white-hat, Google-approved SEO practices. No spammy links, no keyword stuffing, just high-quality technical optimization and authoritative content.'
    }
  ];

  return (
    <div className="w-full bg-[#F4F0EC] text-[#3A3537]">
      {/* 1. HERO SECTION (Outcome-Focused) */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center bg-[#050505] border-b border-[#1C1417]">
        <video
          src="https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/11.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/vids/11-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        />
        <div className="absolute inset-0 z-10 bg-black/40 bg-gradient-to-t from-[#050505] via-black/50 to-transparent sm:bg-none transition-opacity duration-1000"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20 flex flex-col justify-center">
          <SlideUp className="max-w-4xl space-y-6">
            <SectionLabel label="BRANDING & SEO" dotColor="sakura" />
            <h1 className="font-instrument text-5xl sm:text-7xl md:text-8xl text-[#FFFFFF] tracking-tight leading-[0.95]">
              Rank higher. <span className="italic text-[#E0A0B0] font-light">Look better.</span>
            </h1>
            <p className="font-lora text-lg sm:text-2xl text-[#E4DFDD] leading-relaxed max-w-2xl drop-shadow-md">
              A premium brand identity backed by aggressive search engine optimization. Dominate Google and look like the undisputed industry leader when they find you.
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <PrimaryButton variant="light" onClick={() => router.push('/contact')}>
                DOMINATE YOUR MARKET →
              </PrimaryButton>
              <a
                href={getWhatsAppUrl("Hi Cherryworks, I'm interested in your Branding and SEO services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#7A0F2E]/50 bg-[#0A0507]/50 backdrop-blur-sm text-[11px] font-manrope font-semibold uppercase tracking-widest text-[#E0A0B0] hover:bg-[#7A0F2E] hover:text-[#FFFFFF] transition-all rounded-[2px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* 2. PROBLEM & AGITATE SECTION (PASO) */}
      <section className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideUp className="space-y-6">
            <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.25em] text-[#7A0F2E]">
              The Invisible Brand Problem
            </span>
            <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-[#050505] tracking-tight leading-[1.1]">
              Great product. <span className="italic text-[#7A0F2E]">Invisible presence.</span>
            </h2>
            <div className="space-y-4 font-lora text-lg text-[#504A4C] leading-relaxed">
              <p>
                You have a fantastic product or service. But no one can find you on Google. And on the rare occasion they do, your branding looks cheap, outdated, and erodes trust instantly.
              </p>
              <p>
                Every day you are losing high-intent, ready-to-buy customers to competitors who have inferior services, but better branding and higher search rankings.
              </p>
              <p className="font-semibold text-[#050505]">
                Imagine securing Page 1 of Google for your most lucrative keywords, and greeting those visitors with a brand identity so premium that price resistance completely disappears.
              </p>
            </div>
          </SlideUp>
          
          <SlideUp delay={0.2} className="relative h-full min-h-[400px] rounded-[2px] overflow-hidden">
            <img 
              src="/images/animated/seo.jpeg" 
              alt="SEO & Branding Strategy" 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-[#7A0F2E]/10 mix-blend-multiply"></div>
          </SlideUp>
        </div>
      </section>

      {/* 3. SOLUTION & BENEFITS (Feature + Benefit + Meaning) */}
      <section className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto space-y-16">
          <SlideUp className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-[#050505] tracking-tight">
              The Architecture of <span className="italic">Authority.</span>
            </h2>
            <p className="font-lora text-lg text-[#504A4C]">
              Traffic without trust is useless. Trust without traffic is invisible. We deliver both.
            </p>
          </SlideUp>

          <FadeIn delay={0.2} className="w-full">
            <FluidExpandingGrid items={fluidItems} />
          </FadeIn>
        </div>
      </section>

      {/* 4. SOCIAL PROOF */}
      <section className="px-5 sm:px-8 lg:px-12 py-24 bg-[#0A0507] text-[#FFFFFF]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <SlideUp className="flex-1 space-y-6">
            <div className="flex items-center gap-2">
              {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
            </div>
            <h3 className="font-instrument text-3xl sm:text-4xl leading-tight">
              "Cherryworks completely overhauled our brand identity and executed a flawless SEO strategy. We now rank #1 for our core services, and the new look allows us to charge 30% more."
            </h3>
            <p className="font-manrope text-sm tracking-widest uppercase text-[#E0A0B0]">
              — David R., Agency Director
            </p>
          </SlideUp>
          
          <SlideUp delay={0.2} className="w-full md:w-1/3 flex flex-col gap-6 border-l border-[#221419] pl-8">
            <div>
              <div className="font-instrument text-5xl text-[#FFFFFF] mb-1">200K+</div>
              <div className="font-lora text-[#A09895]">Organic visitors driven last year</div>
            </div>
            <div>
              <div className="font-instrument text-5xl text-[#FFFFFF] mb-1">Page 1</div>
              <div className="font-lora text-[#A09895]">Rankings achieved consistently</div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* 5. FAQ / OBJECTION HANDLING */}
      <section className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto">
          <SlideUp className="text-center space-y-4 mb-16">
            <h2 className="font-instrument text-4xl sm:text-5xl text-[#050505] tracking-tight">
              Common Questions
            </h2>
            <p className="font-lora text-lg text-[#7D7578]">
              Everything you need to know about our SEO and Branding process.
            </p>
          </SlideUp>

          <SlideUp delay={0.2}>
            <Accordion items={faqs} theme="light" />
          </SlideUp>
        </div>
      </section>

      {/* 6. FINAL CTA (Urgency & Risk-Reversal) */}
      <section className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#7A0F2E] text-[#FFFFFF]">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <SlideUp className="space-y-6">
            <h2 className="font-instrument text-5xl sm:text-6xl md:text-7xl tracking-tight">
              Stop hiding on Page 2.
            </h2>
            <p className="font-lora text-xl text-[#F4F0EC] max-w-2xl mx-auto opacity-90">
              Claim your rightful spot at the top of Google with a brand identity that commands respect and drives massive conversions.
            </p>
          </SlideUp>

          <SlideUp delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => router.push('/contact')}
              className="w-full sm:w-auto px-8 py-4 bg-[#FFFFFF] text-[#7A0F2E] hover:bg-[#050505] hover:text-[#FFFFFF] text-[12px] font-manrope font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 rounded-[2px] transition-all"
            >
              <span>Get Your Free SEO Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={getWhatsAppUrl("Hi Cherryworks, I want to discuss a Branding and SEO strategy.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#FFFFFF]/30 text-[#FFFFFF] hover:bg-[#FFFFFF]/10 text-[12px] font-manrope font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 rounded-[2px] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with us first</span>
            </a>
          </SlideUp>
          
          <FadeIn delay={0.4} className="flex items-center justify-center gap-6 text-[12px] font-manrope font-medium text-[#E0A0B0] pt-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>White-Hat Only</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Transparent Monthly Reporting</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-[#E0A0B0]" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
