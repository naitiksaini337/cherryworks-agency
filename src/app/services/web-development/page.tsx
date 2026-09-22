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
  Zap,
  TrendingUp,
  Target,
  ShieldCheck,
  Clock
} from 'lucide-react';

export default function WebDevelopmentPage() {
  const router = useRouter();

  const fluidItems = [
    {
      id: "item-1",
      title: 'Custom Next.js Infrastructure',
      subtitle: 'Lightning-fast, near-instant load times.',
      image: "/images/animated/watercolor/web_nextjs_1790029435220.jpg",
      color: "#7A0F2E"
    },
    {
      id: "item-2",
      title: 'Built-in Technical SEO',
      subtitle: 'Structured metadata and semantic HTML out of the box.',
      image: "/images/animated/watercolor/web_seo_1790029447045.jpg",
      color: "#050505"
    },
    {
      id: "item-3",
      title: 'Conversion-Focused UX',
      subtitle: 'Frictionless, guided user journeys.',
      image: "/images/animated/watercolor/web_ux_1790029460935.jpg",
      color: "#E0A0B0"
    }
  ];

  const faqs = [
    {
      question: 'Is a custom site worth the investment over a simple template?',
      answer: 'Templates are built for the masses and often bloated with unnecessary code, causing slow load times that kill conversions. A custom Next.js site is built specifically for your business goals, offering unmatched speed, bespoke design, and a unique brand experience that sets you apart from competitors.'
    },
    {
      question: 'How long does a custom build typically take?',
      answer: 'Depending on the complexity and scope, a standard custom web project takes between 4 to 8 weeks. We provide a transparent timeline with clear milestones before we even write the first line of code, ensuring you always know exactly where we stand.'
    },
    {
      question: 'What if I need to update content later? Will I be locked in?',
      answer: 'Not at all. Depending on your needs, we integrate headless CMS solutions (like Sanity or Strapi) so your team can easily manage and update content without needing a developer. We also offer affordable monthly support retainers for larger updates.'
    },
    {
      question: 'Will this new website actually improve my SEO?',
      answer: 'Yes. Site speed and user experience are major Google ranking factors. By utilizing Next.js Server-Side Rendering (SSR) and maintaining strict semantic HTML standards, your site is optimized for search engines from day one.'
    },
    {
      question: 'Do you handle the hosting and domain setup?',
      answer: 'Yes, we handle the end-to-end deployment. We typically deploy Next.js applications on Vercel for world-class edge performance, and we will manage the DNS configuration to connect your custom domain seamlessly.'
    }
  ];

  return (
    <div className="w-full bg-[#F4F0EC] text-[#3A3537]">
      {/* 1. HERO SECTION (Outcome-Focused) */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center bg-[#050505] border-b border-[#1C1417]">
        <video
          src="https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/12.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/vids/12-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        />
        <div className="absolute inset-0 z-10 bg-black/40 bg-gradient-to-t from-[#050505] via-black/50 to-transparent sm:bg-none transition-opacity duration-1000"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20 flex flex-col justify-center">
          <SlideUp className="max-w-4xl space-y-6">
            <SectionLabel label="WEB DEVELOPMENT" dotColor="sakura" />
            <h1 className="font-instrument text-5xl sm:text-7xl md:text-8xl text-[#FFFFFF] tracking-tight leading-[0.95]">
              Websites that convert traffic into <span className="italic text-[#E0A0B0] font-light">revenue.</span>
            </h1>
            <p className="font-lora text-lg sm:text-2xl text-[#E4DFDD] leading-relaxed max-w-2xl drop-shadow-md">
              Stop losing leads to a slow, confusing website. We build lightning-fast, custom Next.js experiences designed exclusively to turn clicks into clients.
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <PrimaryButton variant="light" onClick={() => router.push('/contact')}>
                START YOUR PROJECT →
              </PrimaryButton>
              <a
                href={getWhatsAppUrl("Hi Cherryworks, I'm interested in building a custom website for my business.")}
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
              The Leaky Bucket Problem
            </span>
            <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-[#050505] tracking-tight leading-[1.1]">
              You have traffic, but <span className="italic text-[#7A0F2E]">no one is buying.</span>
            </h2>
            <div className="space-y-4 font-lora text-lg text-[#504A4C] leading-relaxed">
              <p>
                You are spending thousands on ads, SEO, and social media to drive traffic. But when visitors land on your site, they leave.
              </p>
              <p>
                Your current website feels like a leaky bucket. It is slow to load, difficult to navigate on mobile, and lacks a clear path to purchase. Every bounce is lost revenue and a victory for your competitors.
              </p>
              <p className="font-semibold text-[#050505]">
                Imagine a website so seamless, fast, and intuitive that it acts as your top-performing salesperson—working 24/7 to guide visitors effortlessly to your checkout or contact form.
              </p>
            </div>
          </SlideUp>
          
          <SlideUp delay={0.2} className="relative h-full min-h-[400px] rounded-[2px] overflow-hidden">
            <img 
              src="/images/animated/web.jpeg" 
              alt="Web Development Architecture" 
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
              The Architecture of <span className="italic">Conversion.</span>
            </h2>
            <p className="font-lora text-lg text-[#504A4C]">
              We don't just build websites; we engineer digital assets designed to maximize your ROI.
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
              "Before Cherryworks, our site was a bottleneck. Now, it's our top-performing salesperson. Our conversion rate doubled in the first month."
            </h3>
            <p className="font-manrope text-sm tracking-widest uppercase text-[#E0A0B0]">
              — Sarah J., E-commerce Founder
            </p>
          </SlideUp>
          
          <SlideUp delay={0.2} className="w-full md:w-1/3 flex flex-col gap-6 border-l border-[#221419] pl-8">
            <div>
              <div className="font-instrument text-5xl text-[#FFFFFF] mb-1">50+</div>
              <div className="font-lora text-[#A09895]">Scaling brands trust us</div>
            </div>
            <div>
              <div className="font-instrument text-5xl text-[#FFFFFF] mb-1">2.4x</div>
              <div className="font-lora text-[#A09895]">Average conversion lift</div>
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
              Everything you need to know about our custom web development process.
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
              Stop losing money to a bad website.
            </h2>
            <p className="font-lora text-xl text-[#F4F0EC] max-w-2xl mx-auto opacity-90">
              Get a custom-engineered digital storefront with fixed-price milestone delivery, zero hidden fees, and absolute transparency.
            </p>
          </SlideUp>

          <SlideUp delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => router.push('/contact')}
              className="w-full sm:w-auto px-8 py-4 bg-[#FFFFFF] text-[#7A0F2E] hover:bg-[#050505] hover:text-[#FFFFFF] text-[12px] font-manrope font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 rounded-[2px] transition-all"
            >
              <span>Request a Quote Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={getWhatsAppUrl("Hi Cherryworks, I want to discuss a new website.")}
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
              <span>Fixed Price Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Fast Turnaround</span>
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
