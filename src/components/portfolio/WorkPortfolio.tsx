'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioProject } from '@/types';
import { PORTFOLIO_PROJECTS, getWhatsAppUrl } from '@/data/siteData';
import { PrimaryButton } from '@/components/ui/Buttons';
import { ProjectCard, ProjectDetailModal } from '@/components/portfolio/ProjectCard';
import { MessageCircle, Sparkles } from 'lucide-react';

const CATEGORIES = ['All', 'Websites', 'SMMA', 'SEO branding', 'E-com'];

export const WorkPortfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <div className="pt-20 pb-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3 border-b border-[#221419] pb-6">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 text-xs font-manrope font-semibold uppercase tracking-widest rounded-[2px] transition-all duration-300 border ${
                isActive 
                  ? 'text-[#FFFFFF] border-transparent' 
                  : 'text-[#A09895] bg-[#160E12] border-[#2B1B22] hover:text-[#FFFFFF] hover:border-[#7A0F2E]/60'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-[#7A0F2E] rounded-[2px] z-0"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="min-h-[500px]" // Prevent layout jumping
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 }
              },
              exit: {
                opacity: 0,
                scale: 0.95,
                transition: { duration: 0.2 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                // Create an uneven layout look for desktop
                className={idx % 2 === 1 ? "md:mt-12" : ""}
              >
                <ProjectCard
                  project={project}
                  index={idx}
                  onSelect={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Scaling Architecture Callout */}
      <div className="p-8 sm:p-12 bg-[#0A0709] border border-[#221419] rounded-[2px] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-[10px] font-manrope font-bold uppercase tracking-widest text-[#E0A0B0]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Growth Directory</span>
          </div>
          <h3 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF]">
            Have a project in mind for your brand?
          </h3>
          <p className="font-manrope font-medium text-xs sm:text-sm text-[#A09895] max-w-xl">
            We partner with founders to engineer high-converting digital storefronts, customized
            lead capture funnels, and automated growth systems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <Link href="/contact">
            <PrimaryButton variant="cherry">
              START A PROJECT →
            </PrimaryButton>
          </Link>

          <a
            href={getWhatsAppUrl(
              "Hi Cherryworks, I'd like to discuss a custom project for my brand."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-manrope font-semibold uppercase tracking-widest text-[#E0A0B0] border border-[#7A0F2E] hover:bg-[#7A0F2E] hover:text-[#FFFFFF] transition-all rounded-[2px] w-full sm:w-auto"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Inquiries</span>
          </a>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
