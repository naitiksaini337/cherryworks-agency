'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { BackgroundVideo } from '@/components/ui/BackgroundVideo';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Accordion } from '@/components/ui/Accordion';
import { SlideUp, FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrappers';
import { getWhatsAppUrl } from '@/data/siteData';
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  Check,
  ShieldCheck,
  Clock,
  ShoppingBag,
  Globe,
  TrendingUp,
  Share2,
  Percent,
} from 'lucide-react';

const BUNDLE_STACKS = [
  {
    id: 'launch-stack',
    badge: 'Popular for New Launches',
    title: 'The Launch & Authority Stack',
    services: ['Web Development', 'Branding & SEO'],
    description:
      'A bespoke digital presence coupled with technical SEO dominance. Designed to launch your brand with instant credibility and organic visibility.',
    deliverables: [
      'Bespoke Next.js / React responsive web architecture',
      'Technical SEO, Schema markup & Google Search Console setup',
      'Brand visual identity, typography system & palette',
      'Google My Business & Local SEO dominance',
      'Automated lead capture & WhatsApp conversion routing',
      'High-speed desktop & mobile optimization',
    ],
    idealFor: 'Startups, studios, and businesses upgrading from cookie-cutter templates.',
    whatsappMessage:
      'Hi Cherryworks, I want to discuss the Launch & Authority Stack (Web Development + Branding/SEO) and explore bundle discounts for my project scale.',
  },
  {
    id: 'commerce-stack',
    badge: 'High Conversion Architecture',
    title: 'The Commerce Flagship Stack',
    services: ['Shopify Storefront', 'E-commerce SEO', 'Email Flows'],
    description:
      'A custom Shopify storefront engineered to eliminate cart abandonment, maximize average order value, and scale your product revenue.',
    deliverables: [
      'Bespoke Liquid Shopify theme development (Zero bloat)',
      'Frictionless mobile checkout & dynamic cart drawer',
      'Automated email flows (abandoned cart, post-purchase, VIP nurture)',
      'E-commerce SEO architecture & structured product data',
      'Seamless payment gateway, analytics & pixel setup',
      'Post-launch recorded training for easy catalog updates',
    ],
    idealFor: 'D2C brands, boutique retailers, and scaling physical/digital product companies.',
    whatsappMessage:
      'Hi Cherryworks, I want to discuss the Commerce Flagship Stack (Shopify + E-commerce SEO + Email Workflows) and explore bundle discounts for my project scale.',
  },
  {
    id: 'full-growth-stack',
    badge: 'Maximum Compounding • Best Value',
    title: 'The Full-Spectrum Growth Engine',
    services: ['Web Development', 'Shopify Storefront', 'Branding & SEO', 'Social Media Management'],
    description:
      'Our complete end-to-end digital growth infrastructure. We build your high-converting storefront, rank you on search, and produce content that converts followers into buyers.',
    deliverables: [
      'Comprehensive custom web or Shopify flagship architecture',
      'Complete Branding suite + Ongoing SEO & AI-discovery ranking',
      'End-to-end social engine (cinematic Reels, Carousels & Stories)',
      'Automated Instagram DM lead qualification & CRM syncing',
      'Dedicated strategy sessions & monthly conversion reviews',
      'Priority sprint turnaround & continuous engineering support',
    ],
    idealFor: 'High-growth founders wanting an elite, unified team without managing multiple agencies.',
    whatsappMessage:
      'Hi Cherryworks, I want to discuss the Full-Spectrum Growth Engine (Web + E-commerce + SEO + Social Media) and explore bundle discounts for my project scale.',
  },
  {
    id: 'creator-stack',
    badge: 'Audience to Revenue',
    title: 'The Creator & Personal Brand Stack',
    services: ['Social Media Management', 'Lead Funnel Web Architecture'],
    description:
      'Turn social media attention into owned revenue. We craft engaging content, manage your distribution, and route high-intent leads straight into your calendar or WhatsApp.',
    deliverables: [
      'High-converting personal brand portfolio or booking website',
      'Strategic social content production (Reels, Carousels, Stories)',
      'Automated DM to WhatsApp / Email funnel triggers',
      'Content positioning mentorship & aesthetic curation',
      'Google Sheets client data workflow & booking automation',
      'Weekly performance metrics & growth tracking',
    ],
    idealFor: 'Consultants, creators, executives, and high-ticket service providers.',
    whatsappMessage:
      'Hi Cherryworks, I want to discuss the Creator & Personal Brand Stack (Social Media + Lead Web Funnel) and explore bundle discounts for my project scale.',
  },
];

const PRICING_FAQS = [
  {
    question: 'Why do you not have fixed pricing tables for your services?',
    answer:
      'Every brand has a different scope, technical complexity, and target market. Fixed package tables either force you to pay for features you do not need, or restrict your project to rigid templates. We quote based on the exact scale, pages, integrations, and business goals of your project.',
  },
  {
    question: 'How do the service bundle discounts work?',
    answer:
      'When you combine multiple services into a bundle—such as Web Development with SEO, or Shopify E-commerce with Social Media Management—our discovery, design systems, and engineering workflows overlap. This eliminates duplicate overhead, allowing us to pass significant bundle discounts directly to you.',
  },
  {
    question: 'Can I create a custom bundle with different services?',
    answer:
      'Absolutely. You are never locked into predefined packages. Whether you need a 3-page custom web application with automated booking, or a full Shopify build with weekly social reels, we will tailor the bundle to match your exact roadmap.',
  },
  {
    question: 'How fast can I get a quote on WhatsApp?',
    answer:
      'You can message us directly on WhatsApp with a short note or voice memo outlining your project and desired services. We typically review your requirements and provide an estimated scope, timeline, and bundle pricing options within a few hours.',
  },
  {
    question: 'What are your payment terms and delivery milestones?',
    answer:
      'All projects are structured around transparent milestone-based deliverables (e.g., initial deposit on kickoff, milestone review approval, and final deployment). You never face surprise retainers or hidden agency fees.',
  },
];

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="w-full bg-[#F4F0EC] text-[#3A3537]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] sm:min-h-screen w-full overflow-hidden flex items-end sm:items-center bg-[#050505] border-b border-[#1C1417]">
        <BackgroundVideo
          src="https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/6.mp4"
          loop
          muted
          playsInline
          preload="auto"
          poster="/vids/6-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        />
        <div className="absolute inset-0 z-10 bg-black/45 bg-gradient-to-t from-[#050505] via-black/40 to-transparent transition-opacity duration-1000" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-32 h-full flex flex-col justify-end sm:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-4xl space-y-6"
          >
            <SectionLabel label="TAILORED INVESTMENT & BUNDLES" dotColor="sakura" />
            <h1 className="font-instrument text-5xl sm:text-7xl md:text-8xl text-[#FFFFFF] tracking-tight leading-[0.95]">
              Pricing built around <br />
              <span className="italic text-[#E0A0B0] font-light">your scale & vision.</span>
            </h1>

            {/* Core User-Requested Statement */}
            <div className="p-5 sm:p-7 bg-[#14080D]/80 backdrop-blur-md border border-[#7A0F2E]/60 rounded-[2px] max-w-2xl shadow-2xl">
              <p className="font-lora text-[16px] sm:text-[19px] text-[#F4F0EC] leading-relaxed">
                Pricing totally depends upon the project scale and size. If you want to combine the
                projects into bundles and the services into a bundle, there can be some discounts.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl(
                  "Hi Cherryworks, I'd like to combine projects into a bundle and explore bundle discounts for my project scale."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 text-xs font-manrope font-bold uppercase tracking-[0.15em] bg-[#7A0F2E] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#050505] transition-all duration-300 rounded-[2px] shadow-lg shadow-[#7A0F2E]/30"
              >
                <MessageCircle className="w-4 h-4 text-[#E0A0B0] group-hover:text-[#050505] transition-colors" />
                <span>Discuss WhatsApp Bundle</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => {
                  const section = document.getElementById('bundle-stacks-section');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-manrope font-semibold uppercase tracking-[0.14em] text-[#E0A0B0] border border-[#7A0F2E]/50 hover:bg-[#7A0F2E]/20 transition-all rounded-[2px]"
              >
                <span>Explore Bundle Stacks</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE SPOTLIGHT WHATSAPP BUNDLE HERO CARD */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <SlideUp className="relative p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#120509] via-[#090306] to-[#050505] border border-[#7A0F2E] rounded-[2px] overflow-hidden shadow-[0_20px_70px_rgba(122,15,46,0.25)]">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A0F2E]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E0A0B0]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#260A14] border border-[#7A0F2E] rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-[#E0A0B0]" />
                <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-[#E0A0B0]">
                  Multi-Service Bundle Advantage
                </span>
              </div>

              <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] tracking-tight leading-[1.05]">
                Combine your services. <br />
                <span className="italic text-[#E0A0B0]">Unlock custom bundle savings.</span>
              </h2>

              <p className="font-lora text-[16px] sm:text-[18px] text-[#D0C8C5] leading-relaxed">
                When you combine Web Development, SEO, Shopify, or Social Media into a unified
                growth bundle, you eliminate the friction and duplicate fees of working with separate
                freelancers or disconnected agencies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#26141B]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7A0F2E]/40 border border-[#7A0F2E] flex items-center justify-center shrink-0 mt-0.5">
                    <Percent className="w-3.5 h-3.5 text-[#E0A0B0]" />
                  </div>
                  <div>
                    <span className="font-manrope font-bold text-xs uppercase tracking-wider text-[#FFFFFF] block">
                      Bundle Discounts
                    </span>
                    <span className="font-lora text-xs text-[#A09895]">
                      Direct cost savings when bundling 2+ services together.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7A0F2E]/40 border border-[#7A0F2E] flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5 text-[#E0A0B0]" />
                  </div>
                  <div>
                    <span className="font-manrope font-bold text-xs uppercase tracking-wider text-[#FFFFFF] block">
                      Unified Aesthetic
                    </span>
                    <span className="font-lora text-xs text-[#A09895]">
                      Consistent design language from website to reels and ad creatives.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7A0F2E]/40 border border-[#7A0F2E] flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5 text-[#E0A0B0]" />
                  </div>
                  <div>
                    <span className="font-manrope font-bold text-xs uppercase tracking-wider text-[#FFFFFF] block">
                      Single Dedicated Lead
                    </span>
                    <span className="font-lora text-xs text-[#A09895]">
                      One senior studio contact managing your entire digital infrastructure.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7A0F2E]/40 border border-[#7A0F2E] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#E0A0B0]" />
                  </div>
                  <div>
                    <span className="font-manrope font-bold text-xs uppercase tracking-wider text-[#FFFFFF] block">
                      Synchronized Delivery
                    </span>
                    <span className="font-lora text-xs text-[#A09895]">
                      All assets engineered in tandem for a high-impact coordinated launch.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right WhatsApp Action Card */}
            <div className="lg:col-span-5 bg-[#17090F] border border-[#7A0F2E]/70 p-7 sm:p-9 rounded-[2px] space-y-6 shadow-2xl relative">
              <div className="space-y-2">
                <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-[#E0A0B0]">
                  Direct WhatsApp Access
                </span>
                <h3 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF]">
                  Request Your Custom Bundle Quote
                </h3>
                <p className="font-lora text-sm text-[#A09895] leading-relaxed">
                  Tell us what services your brand needs. We will scope the project size and share
                  discounted bundle packages directly on WhatsApp.
                </p>
              </div>

              <div className="p-4 bg-[#0A0507] border border-[#2B141E] rounded-[2px] space-y-2">
                <div className="flex items-center gap-2 text-xs font-manrope font-semibold text-[#E0A0B0]">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Instant Studio Response</span>
                </div>
                <p className="font-lora text-xs text-[#8E8688]">
                  Chat directly with the founders. No pushy sales calls, no waiting days for a proposal.
                </p>
              </div>

              <a
                href={getWhatsAppUrl(
                  "Hi Cherryworks, I'm interested in combining projects into a bundle. Can you share custom pricing and bundle discounts for my project scale?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#25D366] text-[#050505] hover:bg-[#1EBE5D] font-manrope font-bold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2.5 rounded-[2px] transition-all shadow-lg active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat for WhatsApp Bundle</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] font-manrope font-medium text-[#7D7578]">
                <span>✓ Milestone billing</span>
                <span>•</span>
                <span>✓ Zero hidden fees</span>
                <span>•</span>
                <span>✓ Fast turnaround</span>
              </div>
            </div>
          </div>
        </SlideUp>
      </section>

      {/* 3. POPULAR BUNDLE STACKS */}
      <section id="bundle-stacks-section" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-[#FFFFFF] border-y border-[#E2DDD7]">
        <div className="max-w-7xl mx-auto space-y-16">
          <SlideUp className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.25em] text-[#7A0F2E]">
              Modular Solutions
            </span>
            <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-[#050505] tracking-tight">
              Popular Service <span className="italic text-[#7A0F2E]">Bundles.</span>
            </h2>
            <p className="font-lora text-lg text-[#504A4C]">
              Every bundle is tailored to your scope. Explore how ambitious brands combine our
              services for maximum leverage and discounted package rates.
            </p>
          </SlideUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {BUNDLE_STACKS.map((stack) => (
              <SlideUp
                key={stack.id}
                className="flex flex-col p-8 sm:p-10 bg-[#FAF7F4] border border-[#E4DFDD] rounded-[2px] justify-between relative group hover:border-[#7A0F2E]/60 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="space-y-6">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.18em] px-3 py-1 bg-[#1A0B10] text-[#E0A0B0] rounded-full">
                      {stack.badge}
                    </span>
                    <span className="text-[10px] font-manrope font-semibold uppercase tracking-wider text-[#7A0F2E]">
                      Bundle Savings Available
                    </span>
                  </div>

                  {/* Title & Services Pills */}
                  <div className="space-y-3">
                    <h3 className="font-instrument text-3xl sm:text-4xl text-[#050505] tracking-tight">
                      {stack.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.services.map((srv, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-manrope font-semibold px-2.5 py-1 bg-[#FFFFFF] border border-[#DCD5D1] text-[#3A3537] rounded-[2px]"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="font-lora text-[15px] text-[#605A5C] leading-relaxed">
                    {stack.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-4 border-t border-[#E8E2DE] space-y-3">
                    <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-[#7A0F2E] block">
                      Key Deliverables Included:
                    </span>
                    <ul className="space-y-2.5">
                      {stack.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[13px] font-manrope font-medium text-[#403B3D]">
                          <Check className="w-4 h-4 text-[#7A0F2E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div className="p-3.5 bg-[#FFFFFF] border border-[#E2DDD7] rounded-[2px] text-xs font-lora text-[#605A5C]">
                    <strong className="font-manrope font-bold text-[#050505] uppercase tracking-wider text-[10px] block mb-1">
                      Best For:
                    </strong>
                    {stack.idealFor}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-8 mt-6 border-t border-[#E8E2DE] space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-manrope font-bold uppercase tracking-wider text-[#7A0F2E] block">
                        Investment
                      </span>
                      <span className="font-instrument text-2xl text-[#050505]">
                        Custom Scoped
                      </span>
                    </div>
                    <span className="text-[11px] font-manrope font-bold uppercase tracking-wider text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-1 rounded-[2px]">
                      Discount Eligible
                    </span>
                  </div>

                  <a
                    href={getWhatsAppUrl(stack.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-[#050505] text-[#FFFFFF] hover:bg-[#7A0F2E] text-xs font-manrope font-bold uppercase tracking-[0.14em] flex items-center justify-center gap-2 rounded-[2px] transition-all duration-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#E0A0B0]" />
                    <span>Inquire for This Bundle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW OUR PRICING WORKS (3 PILLARS) */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
        <SlideUp className="text-center max-w-3xl mx-auto space-y-4">
          <SectionLabel label="THE SCOPING PROCESS" dotColor="cherry" theme="light" />
          <h2 className="font-instrument text-4xl sm:text-5xl text-[#050505] tracking-tight">
            How our dynamic pricing works.
          </h2>
          <p className="font-lora text-lg text-[#504A4C]">
            We operate with absolute transparency. You get an exact quote based on what you actually
            need to succeed.
          </p>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SlideUp delay={0.1} className="p-8 bg-[#FFFFFF] border border-[#E2DDD7] rounded-[2px] space-y-4 shadow-sm">
            <div className="font-instrument text-4xl text-[#7A0F2E]">01</div>
            <h3 className="font-instrument text-2xl text-[#050505]">
              Project Scale & Scope
            </h3>
            <p className="font-lora text-[15px] text-[#605A5C] leading-relaxed">
              We break down your goals, the number of pages, custom features, animations, and technical
              integrations required. You only pay for what moves your business forward.
            </p>
          </SlideUp>

          <SlideUp delay={0.2} className="p-8 bg-[#FFFFFF] border border-[#E2DDD7] rounded-[2px] space-y-4 shadow-sm">
            <div className="font-instrument text-4xl text-[#7A0F2E]">02</div>
            <h3 className="font-instrument text-2xl text-[#050505]">
              Multi-Service Bundle Savings
            </h3>
            <p className="font-lora text-[15px] text-[#605A5C] leading-relaxed">
              When you combine multiple services into a single project bundle, we eliminate redundant
              discovery time and onboarding. That operational efficiency is directly converted into
              bundle discounts.
            </p>
          </SlideUp>

          <SlideUp delay={0.3} className="p-8 bg-[#FFFFFF] border border-[#E2DDD7] rounded-[2px] space-y-4 shadow-sm">
            <div className="font-instrument text-4xl text-[#7A0F2E]">03</div>
            <h3 className="font-instrument text-2xl text-[#050505]">
              Transparent Milestones
            </h3>
            <p className="font-lora text-[15px] text-[#605A5C] leading-relaxed">
              Every deliverable is mapped to clear milestone dates. No mystery agency bills, no
              surprise hourly rates, and no recurring commitments unless you choose ongoing maintenance.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* 5. PRICING & BUNDLE FAQS */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-[#F4F0EC] border-t border-[#E2DDD7]">
        <div className="max-w-4xl mx-auto space-y-12">
          <SlideUp className="text-center space-y-4">
            <SectionLabel label="FREQUENTLY ASKED QUESTIONS" dotColor="cherry" theme="light" />
            <h2 className="font-instrument text-4xl sm:text-5xl text-[#050505] tracking-tight">
              Clear answers on pricing & bundles.
            </h2>
            <p className="font-lora text-lg text-[#7D7578]">
              Everything you need to know about how we scope and discount custom bundles.
            </p>
          </SlideUp>

          <SlideUp delay={0.2}>
            <Accordion items={PRICING_FAQS} theme="light" />
          </SlideUp>
        </div>
      </section>

      {/* 6. FINAL BOTTOM CTA */}
      <section className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#7A0F2E] text-[#FFFFFF]">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <SlideUp className="space-y-6">
            <h2 className="font-instrument text-5xl sm:text-6xl md:text-7xl tracking-tight">
              Ready to scope your custom bundle?
            </h2>
            <p className="font-lora text-xl text-[#F4F0EC] max-w-2xl mx-auto opacity-90">
              Tell us what you are building. We will assess your scale, apply applicable bundle
              discounts, and give you an immediate, transparent proposal.
            </p>
          </SlideUp>

          <SlideUp delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={getWhatsAppUrl(
                "Hi Cherryworks, I want to discuss a custom project bundle and see what discounts are available for my project."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#FFFFFF] text-[#7A0F2E] hover:bg-[#050505] hover:text-[#FFFFFF] text-[12px] font-manrope font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 rounded-[2px] transition-all shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Claim WhatsApp Bundle Discount</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => router.push('/contact')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#FFFFFF]/40 text-[#FFFFFF] hover:bg-[#FFFFFF]/10 text-[12px] font-manrope font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 rounded-[2px] transition-all"
            >
              <span>Submit Project Brief</span>
            </button>
          </SlideUp>

          <FadeIn delay={0.4} className="flex flex-wrap items-center justify-center gap-6 text-[12px] font-manrope font-medium text-[#E0A0B0] pt-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Milestone-Based Guarantees</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Fast Turnaround on Proposals</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
