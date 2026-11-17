'use client';

import { BackgroundVideo } from '@/components/ui/BackgroundVideo';
import React from 'react';
import { useRouter } from 'next/navigation';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { PrimaryButton } from '@/components/ui/Buttons';

import { Accordion } from '@/components/ui/Accordion';
import { SlideUp, StaggerContainer, StaggerItem, FadeIn } from '@/components/animations/MotionWrappers';
import { FluidExpandingGrid } from '@/components/ui/fluid-expanding-grid';
import { 
  Mail, 
  ArrowRight,
  ArrowUpRight, 
  ShoppingCart,
  Zap,
  Settings,
  ShieldCheck,
  Clock
} from 'lucide-react';

export default function EcommercePage() {
  const router = useRouter();

  const fluidItems = [
    {
      id: "item-1",
      title: 'Custom Theme Architecture',
      subtitle: 'Zero bloat, blazing fast load times on all devices.',
      image: "/images/animated/watercolor/ecom_theme_1790029510785.jpg",
      color: "#7A0F2E"
    },
    {
      id: "item-2",
      title: 'Conversion-Optimized UX',
      subtitle: 'Frictionless, psychology-driven checkout flows.',
      image: "/images/animated/watercolor/ecom_ux_1790029522185.jpg",
      color: "#050505"
    },
    {
      id: "item-3",
      title: 'Seamless App Integration',
      subtitle: 'Flawless sync with Klaviyo, ERPs, and fulfillment centers.',
      image: "/images/animated/watercolor/ecom_sync_1790029583964.jpg",
      color: "#E0A0B0"
    }
  ];

  const faqs = [
    {
      question: 'Do you build custom themes from scratch?',
      answer: 'Yes. We build entirely bespoke Shopify themes (Liquid or Headless) tailored precisely to your brand\'s unique aesthetic and functional needs, rather than shoehorning your premium products into a clunky, generic template.'
    },
    {
      question: 'Can you migrate my existing store to Shopify?',
      answer: 'Absolutely. We handle end-to-end migrations from WooCommerce, Magento, or custom platforms. We meticulously map your data to ensure zero loss of products, customer history, and most importantly, we preserve your existing SEO rankings.'
    },
    {
      question: 'Do you handle third-party app integrations?',
      answer: 'Yes. A successful store requires a robust ecosystem. We integrate and configure your essential apps, including Klaviyo for email marketing, Yotpo/Okendo for reviews, and complex inventory management or ERP systems.'
    },
    {
      question: 'How long does a custom Shopify build take?',
      answer: 'A standard custom Shopify storefront typically takes 6 to 10 weeks from discovery to launch, depending heavily on the complexity of third-party integrations and bespoke features required.'
    },
    {
      question: 'Will you teach us how to manage the store post-launch?',
      answer: 'Yes, every project hand-off includes comprehensive training sessions and recorded documentation. Your team will feel completely confident managing products, fulfilling orders, and updating content without needing a developer.'
    }
  ];

  return (
    <div className="w-full bg-[#F4F0EC] text-[#3A3537]">
      {/* 1. HERO SECTION (Outcome-Focused) */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center bg-[#050505] border-b border-[#1C1417]">
        <BackgroundVideo
          src="https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/13.mp4"
          
          loop
          muted
          playsInline
          preload="auto"
          poster="/vids/13-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        />
        <div className="absolute inset-0 z-10 bg-black/40 bg-gradient-to-t from-[#050505] via-black/50 to-transparent sm:bg-none transition-opacity duration-1000"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20 flex flex-col justify-center">
          <SlideUp className="max-w-4xl space-y-6">
            <SectionLabel label="SHOPIFY E-COMMERCE" dotColor="sakura" />
            <h1 className="font-instrument text-5xl sm:text-7xl md:text-8xl text-[#FFFFFF] tracking-tight leading-[0.95]">
              Build an empire, <span className="italic text-[#E0A0B0] font-light">not just a store.</span>
            </h1>
            <p className="font-lora text-lg sm:text-2xl text-[#E4DFDD] leading-relaxed max-w-2xl drop-shadow-md">
              We design and engineer bespoke Shopify experiences optimized for insanely high conversion rates and effortless scaling.
            </p>

            <div className="pt-6 flex items-center">
              <button
                onClick={() => router.push('/contact')}
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#7A0F2E] hover:bg-[#8F1437] text-white font-manrope text-xs font-bold uppercase tracking-[0.16em] rounded-[2px] transition-all duration-300 shadow-[0_0_24px_rgba(122,15,46,0.35)]"
              >
                <span>Start Storefront Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#E0A0B0] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* 2. PROBLEM & AGITATE SECTION (PASO) */}
      <section className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideUp className="space-y-6">
            <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.25em] text-[#7A0F2E]">
              The Abandoned Cart Problem
            </span>
            <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-[#050505] tracking-tight leading-[1.1]">
              Great products. <span className="italic text-[#7A0F2E]">Terrible checkout.</span>
            </h2>
            <div className="space-y-4 font-lora text-lg text-[#504A4C] leading-relaxed">
              <p>
                You are driving solid traffic to your store, but your cart abandonment rate is through the roof. 
              </p>
              <p>
                Why? Because your current theme is clunky, the mobile experience is an afterthought, and the checkout process is confusing. Every point of friction is directly costing you money. Worse, off-the-shelf templates are making your premium products look cheap.
              </p>
              <p className="font-semibold text-[#050505]">
                Imagine a custom-built Shopify storefront that feels like a flagship luxury retail experience—seamless, blazing fast, and meticulously designed to make purchasing absolutely irresistible.
              </p>
            </div>
          </SlideUp>
          
          <SlideUp delay={0.2} className="relative h-full min-h-[400px] rounded-[2px] overflow-hidden">
            <img 
              src="/images/animated/ecom.jpeg" 
              alt="E-commerce Experience" 
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
              The Architecture of <span className="italic">Scale.</span>
            </h2>
            <p className="font-lora text-lg text-[#504A4C]">
              We eliminate friction to turn your online store into a high-performance conversion machine.
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
              "We were stuck at a 1.2% conversion rate for months. Cherryworks rebuilt our Shopify experience from the ground up, and within weeks we hit 3.8%. The ROI was instantaneous."
            </h3>
            <p className="font-manrope text-sm tracking-widest uppercase text-[#E0A0B0]">
              — James P., D2C Brand Founder
            </p>
          </SlideUp>
          
          <SlideUp delay={0.2} className="w-full md:w-1/3 flex flex-col gap-6 border-l border-[#221419] pl-8">
            <div>
              <div className="font-instrument text-5xl text-[#FFFFFF] mb-1">$5M+</div>
              <div className="font-lora text-[#A09895]">Additional revenue generated</div>
            </div>
            <div>
              <div className="font-instrument text-5xl text-[#FFFFFF] mb-1">60%</div>
              <div className="font-lora text-[#A09895]">Average drop in cart abandonment</div>
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
              Everything you need to know about our Shopify development process.
            </p>
          </SlideUp>

          <SlideUp delay={0.2}>
            <Accordion items={faqs} theme="light" />
          </SlideUp>
        </div>
      </section>

      {/* 6. FINAL CTA (Urgency & Risk-Reversal) */}
            {/* 6. FINAL CTA - Minimalist */}
      <section className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-[#050505] border-t border-[#1C1417] text-center overflow-hidden bg-grain">
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
            <button
              onClick={() => router.push('/contact')}
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#7A0F2E] hover:bg-[#8F1437] text-white font-manrope text-xs font-bold uppercase tracking-[0.18em] rounded-[2px] transition-all duration-300 shadow-[0_0_24px_rgba(122,15,46,0.35)] hover:shadow-[0_0_36px_rgba(224,160,176,0.25)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#E0A0B0] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </FadeIn>
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
