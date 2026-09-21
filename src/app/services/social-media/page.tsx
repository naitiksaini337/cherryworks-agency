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
  Megaphone,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Clock
} from 'lucide-react';

export default function SocialMediaPage() {
  const router = useRouter();

  const fluidItems = [
    {
      id: "item-1",
      title: 'Data-Driven Content Strategy',
      subtitle: "Content that speaks directly to your ideal client's pain points.",
      image: "/images/animated/watercolor/social_content_1790029472002.jpg",
      color: "#7A0F2E"
    },
    {
      id: "item-2",
      title: 'Scroll-Stopping Visuals',
      subtitle: 'Premium, cohesive brand aesthetics across all formats.',
      image: "/images/animated/watercolor/social_visuals_1790029486603.jpg",
      color: "#050505"
    },
    {
      id: "item-3",
      title: 'Community & DM Automation',
      subtitle: 'Instant responses and proactive outbound engagement.',
      image: "/images/animated/watercolor/social_community_1790029499346.jpg",
      color: "#E0A0B0"
    }
  ];

  const faqs = [
    {
      question: 'Do you guarantee a certain number of followers?',
      answer: 'We guarantee high-quality, targeted reach. Vanity metrics like empty followers don\'t pay the bills; qualified leads do. Our strategy is fiercely focused on engagement, authority building, and actual conversions.'
    },
    {
      question: 'How much of my time will this actually take?',
      answer: 'Just 2 hours a month. We handle the heavy lifting: strategy, design, copywriting, and scheduling. All you need to do is review, provide occasional industry insights, and approve the content.'
    },
    {
      question: 'What platforms do you specialize in?',
      answer: 'We focus on where the attention is: Instagram, LinkedIn, and TikTok. Rather than spreading you thin, we dominate the 1 or 2 platforms where your specific target audience is actively making buying decisions.'
    },
    {
      question: 'Do you run paid social ads as part of this service?',
      answer: 'This service focuses on organic growth and community building. However, we employ a hybrid approach where we strategically boost your top-performing organic posts to maximize ROI and reach.'
    },
    {
      question: 'How do we track if the strategy is actually working?',
      answer: 'You will receive a transparent, jargon-free monthly report detailing exactly what matters: reach, engagement rate, click-through rates to your website, and direct leads generated from social channels.'
    }
  ];

  return (
    <div className="w-full bg-[#F4F0EC] text-[#3A3537]">
      {/* 1. HERO SECTION (Outcome-Focused) */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center bg-[#050505] border-b border-[#1C1417]">
        <video
          src="/vids/10.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/vids/10-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        />
        <div className="absolute inset-0 z-10 bg-black/40 bg-gradient-to-t from-[#050505] via-black/50 to-transparent sm:bg-none transition-opacity duration-1000"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20 flex flex-col justify-center">
          <SlideUp className="max-w-4xl space-y-6">
            <SectionLabel label="SOCIAL MEDIA MANAGEMENT" dotColor="sakura" />
            <h1 className="font-instrument text-5xl sm:text-7xl md:text-8xl text-[#FFFFFF] tracking-tight leading-[0.95]">
              Stop posting to an <span className="italic text-[#E0A0B0] font-light">empty room.</span>
            </h1>
            <p className="font-lora text-lg sm:text-2xl text-[#E4DFDD] leading-relaxed max-w-2xl drop-shadow-md">
              We build high-converting social media engines that drive real engagement, qualified leads, and undisputed brand authority.
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <PrimaryButton variant="light" onClick={() => router.push('/contact')}>
                GROW YOUR BRAND →
              </PrimaryButton>
              <a
                href={getWhatsAppUrl("Hi Cherryworks, I'm interested in your social media management services.")}
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
              The Noise Problem
            </span>
            <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-[#050505] tracking-tight leading-[1.1]">
              You're posting constantly. <span className="italic text-[#7A0F2E]">But no one cares.</span>
            </h2>
            <div className="space-y-4 font-lora text-lg text-[#504A4C] leading-relaxed">
              <p>
                You are posting 5 times a week. Your feed looks nice. You are using all the trending audios. But your DMs are empty and your follower count is completely stagnant.
              </p>
              <p>
                The truth? You are blending in with thousands of competitors. You don't have a content strategy; you just have a posting schedule. And it is burning you out while yielding zero ROI.
              </p>
              <p className="font-semibold text-[#050505]">
                Imagine a social presence so magnetic and authoritative that your ideal clients are actively seeking you out, saving your posts, and moving straight to your booking page.
              </p>
            </div>
          </SlideUp>
          
          <SlideUp delay={0.2} className="relative h-full min-h-[400px] rounded-[2px] overflow-hidden">
            <img 
              src="/images/animated/social.jpeg" 
              alt="Social Media Strategy" 
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
              The Architecture of <span className="italic">Attention.</span>
            </h2>
            <p className="font-lora text-lg text-[#504A4C]">
              We transform your social channels from a neglected chore into a high-octane lead generation engine.
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
              "We used to struggle just to get 10 likes. After 3 months with Cherryworks, we had a 400% increase in reach and booked 5 high-ticket clients directly through IG DMs."
            </h3>
            <p className="font-manrope text-sm tracking-widest uppercase text-[#E0A0B0]">
              — Michael T., Service Business Owner
            </p>
          </SlideUp>
          
          <SlideUp delay={0.2} className="w-full md:w-1/3 flex flex-col gap-6 border-l border-[#221419] pl-8">
            <div>
              <div className="font-instrument text-5xl text-[#FFFFFF] mb-1">3.5M+</div>
              <div className="font-lora text-[#A09895]">Organic reach generated</div>
            </div>
            <div>
              <div className="font-instrument text-5xl text-[#FFFFFF] mb-1">120%</div>
              <div className="font-lora text-[#A09895]">Average engagement growth</div>
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
              Everything you need to know about our social media partnership.
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
              Stop blending into the feed.
            </h2>
            <p className="font-lora text-xl text-[#F4F0EC] max-w-2xl mx-auto opacity-90">
              Hand over your social media to experts. Save dozens of hours a month while actually seeing a return on your brand investment.
            </p>
          </SlideUp>

          <SlideUp delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => router.push('/contact')}
              className="w-full sm:w-auto px-8 py-4 bg-[#FFFFFF] text-[#7A0F2E] hover:bg-[#050505] hover:text-[#FFFFFF] text-[12px] font-manrope font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 rounded-[2px] transition-all"
            >
              <span>Get Your Free Strategy Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={getWhatsAppUrl("Hi Cherryworks, I want to discuss a social media strategy.")}
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
              <span>Cancel Anytime After 3 Months</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Setup in 7 Days</span>
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
