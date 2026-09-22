'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { SERVICES_LIST, getWhatsAppUrl } from '@/data/siteData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { PricingCard } from '@/components/pricing/PricingCard';
import { CustomQuoteCard } from '@/components/pricing/CustomQuoteCard';

type CategoryType = 'all' | 'social' | 'seo' | 'ecommerce' | 'web';

const CATEGORIES: { id: CategoryType; label: string }[] = [
  { id: 'all', label: 'All Packages' },
  { id: 'social', label: 'Social Media' },
  { id: 'seo', label: 'Branding + SEO' },
  { id: 'ecommerce', label: 'Shopify E-commerce' },
  { id: 'web', label: 'Web Development' },
];

export default function PricingPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  return (
    <div className="w-full bg-[#F4F0EC] text-[#3A3537]">
      {/* Hero */}
      <section className="relative min-h-[85vh] sm:min-h-screen w-full overflow-hidden flex items-end sm:items-center bg-[#050505] border-b border-[#1C1417]">
        <video
          src="https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/cherryworks-vids/6.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/vids/6-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        />
        <div className="absolute inset-0 z-10 bg-black/35 bg-gradient-to-t from-[#050505] via-black/40 to-transparent sm:bg-none transition-opacity duration-1000"></div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-32 h-full flex flex-col justify-end sm:justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-4xl space-y-6"
          >
            <SectionLabel label="PRICING & SYSTEMS" dotColor="sakura" />
            <h1 className="font-instrument text-5xl sm:text-7xl md:text-8xl text-[#FFFFFF] tracking-tight leading-[0.95]">
              Transparent systems. <br />
              <span className="italic text-[#E0A0B0] font-light">Predictable growth.</span>
            </h1>
            <p className="font-lora text-lg sm:text-xl text-[#E4DFDD] leading-relaxed max-w-2xl drop-shadow-md">
              Choose the exact growth infrastructure your brand requires. No hidden retainers, no
              unclear deliverables.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="pt-20 pb-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-20">
        {/* Category Filter Tabs */}
        <div className="relative flex flex-wrap items-center gap-2 border-b border-[#E2DDD7] pb-4">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-5 py-3 text-[11px] font-manrope font-bold uppercase tracking-[0.15em] rounded-[2px] transition-colors duration-300 ${
                  isActive ? 'text-[#FFFFFF]' : 'text-[#7D7578] hover:text-[#050505]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="pricingCategoryPill"
                    className="absolute inset-0 bg-[#7A0F2E] rounded-[2px] z-0 shadow-md"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sections Wrapper */}
        <div className="space-y-24">
          <AnimatePresence mode="popLayout">
            {/* 1. Social Media Packages */}
            {(activeCategory === 'all' || activeCategory === 'social') && (
              <motion.div 
                key="social-section"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-[#7A0F2E]">
                    Service 02
                  </span>
                  <h2 className="font-instrument text-4xl sm:text-5xl text-[#050505] tracking-tight">
                    Social Media Management
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {SERVICES_LIST.find((s) => s.id === 'social-media')?.packages?.map((tier, idx) => (
                    <PricingCard
                      key={tier.name}
                      tier={tier}
                      serviceCategory="Social Media Management"
                      index={idx}
                      onSelect={() => router.push('/contact')}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* 2. Branding + SEO Packages */}
            {(activeCategory === 'all' || activeCategory === 'seo') && (
              <motion.div 
                key="seo-section"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-[#7A0F2E]">
                    Service 03
                  </span>
                  <h2 className="font-instrument text-4xl sm:text-5xl text-[#050505] tracking-tight">
                    Branding + SEO
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {SERVICES_LIST.find((s) => s.id === 'branding-seo')?.packages?.map((tier, idx) => (
                    <PricingCard
                      key={tier.name}
                      tier={tier}
                      serviceCategory="Branding + SEO"
                      index={idx}
                      onSelect={() => router.push('/contact')}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* 3. Shopify E-commerce Packages */}
            {(activeCategory === 'all' || activeCategory === 'ecommerce') && (
              <motion.div 
                key="ecommerce-section"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-[#7A0F2E]">
                    Service 04
                  </span>
                  <h2 className="font-instrument text-4xl sm:text-5xl text-[#050505] tracking-tight">
                    Shopify E-commerce Storefronts
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                  {SERVICES_LIST.find((s) => s.id === 'ecommerce')?.packages?.map((tier, idx) => (
                    <PricingCard
                      key={tier.name}
                      tier={tier}
                      serviceCategory="Shopify E-commerce"
                      index={idx}
                      onSelect={() => router.push('/contact')}
                    />
                  ))}
                </div>

                {/* Maintenance Box */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 bg-[#0E0B0D] border border-[#221419] rounded-[2px] shadow-lg mt-6"
                >
                  <div className="text-[11px] font-manrope font-semibold uppercase tracking-[0.2em] text-[#E0A0B0]">
                    Monthly Shopify Store Maintenance
                  </div>
                  <div className="font-instrument text-3xl sm:text-4xl text-[#FFFFFF] mt-3">
                    ₹2,000–₹5,000<span className="text-sm font-manrope font-medium text-[#7D7578] tracking-normal">/month</span>
                  </div>
                  <p className="font-lora text-[15px] text-[#A09895] mt-3 max-w-2xl leading-relaxed">
                    Includes store maintenance, product catalog uploads, app monitoring, email flow
                    updates, and ongoing conversion improvements.
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* 4. Custom Web Development */}
            {(activeCategory === 'all' || activeCategory === 'web') && (
              <motion.div 
                key="web-section"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.2em] text-[#7A0F2E]">
                    Service 01
                  </span>
                  <h2 className="font-instrument text-4xl sm:text-5xl text-[#050505] tracking-tight">
                    Custom Web Development
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                  {SERVICES_LIST.find((s) => s.id === 'web-development')?.packages?.map((tier, idx) => (
                    <PricingCard
                      key={tier.name}
                      tier={tier}
                      serviceCategory="Web Development"
                      index={idx}
                      onSelect={() => router.push('/contact')}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
