'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_LIST } from '@/data/siteData';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { EditorialHeading } from '@/components/ui/EditorialHeading';
import { PricingCard } from '@/components/pricing/PricingCard';
import { CustomQuoteCard } from '@/components/pricing/CustomQuoteCard';

type TabType = 'social' | 'seo' | 'ecommerce' | 'web';

const TABS: { id: TabType; label: string }[] = [
  { id: 'social', label: 'Social Media' },
  { id: 'seo', label: 'Branding + SEO' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'web', label: 'Web Dev' },
];

export const PricingTabsSection: React.FC = () => {
  const router = useRouter();
  const [activePricingTab, setActivePricingTab] = useState<TabType>('social');

  return (
    <section id="pricing-section" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
      <div className="space-y-4 max-w-3xl">
        <SectionLabel label="PACKAGES & TRANSPARENCY" dotColor="sakura" />
        <EditorialHeading size="display" className="text-[#FFFFFF]">Choose the system your brand needs.</EditorialHeading>
        <p className="font-lora text-[17px] text-[#7D7578] leading-relaxed">
          Transparent pricing engineered for sustainable compounding. No hidden agency fees.
        </p>
      </div>

      {/* Pricing Category Tabs */}
      <div className="relative flex flex-wrap gap-2 border-b border-[#E2DDD7] pb-4">
        {TABS.map((tab) => {
          const isActive = activePricingTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActivePricingTab(tab.id)}
              className={`relative px-5 py-3 text-[11px] font-manrope font-bold uppercase tracking-[0.15em] rounded-[2px] transition-colors duration-300 ${
                isActive ? 'text-[#FFFFFF]' : 'text-[#7D7578] hover:text-[#050505]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="pricingTabPillHome"
                  className="absolute inset-0 bg-[#7A0F2E] rounded-[2px] z-0"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Contents */}
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          {activePricingTab === 'social' && (
            <motion.div 
              key="social"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
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

          {activePricingTab === 'seo' && (
            <motion.div 
              key="seo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
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

          {activePricingTab === 'ecommerce' && (
            <motion.div 
              key="ecommerce"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
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

              {/* Maintenance Banner */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 md:p-8 bg-[#0E0B0D] border border-[#221419] rounded-[2px] shadow-lg"
              >
                <div className="text-[11px] font-manrope font-semibold uppercase tracking-[0.2em] text-[#E0A0B0]">
                  Monthly Shopify Store Maintenance
                </div>
                <div className="font-instrument text-3xl sm:text-4xl text-[#FFFFFF] mt-3">
                  ₹2,000–₹5,000<span className="text-sm font-manrope font-medium text-[#7D7578] tracking-normal">/month</span>
                </div>
                <p className="font-lora text-[15px] text-[#A09895] mt-3 max-w-2xl leading-relaxed">
                  Includes store maintenance, continuous product uploads, app health monitoring, email
                  flow updates, and conversion rate improvements.
                </p>
              </motion.div>
            </motion.div>
          )}

          {activePricingTab === 'web' && (
            <motion.div 
              key="web"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
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
    </section>
  );
};
