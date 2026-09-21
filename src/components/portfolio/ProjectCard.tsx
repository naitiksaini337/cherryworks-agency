import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PortfolioProject } from '../../types';
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers, Smartphone, ShoppingBag } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/siteData';

interface ProjectCardProps {
  project: PortfolioProject;
  onSelect: (project: PortfolioProject) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  return (
    <motion.div
      onClick={() => onSelect(project)}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { y: 0 },
        hover: { y: -8, transition: { type: 'spring', stiffness: 300, damping: 25 } }
      }}
      className="group cursor-pointer border border-[#221419] bg-[#0A0709] rounded-[2px] overflow-hidden flex flex-col active:scale-[0.98] sm:active:scale-100 h-full"
      id={`portfolio-card-${project.id}`}
    >
      {/* Visual Composition Stage */}
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#1A1215] bg-[#0E0B0D]">
        {/* Subtle Ambient Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accentGradient} opacity-30 group-hover:opacity-50 transition-opacity duration-700`}
        />
        
        <motion.div 
          className="w-full h-full relative z-10"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.03, transition: { duration: 0.4, ease: "easeOut" } }
          }}
        >
          {project.imageUrl ? (
            <Image 
              src={project.imageUrl} 
              alt={`${project.name} thumbnail`} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: project.imagePlaceholderColor }}>
              <div className="text-center space-y-2">
                <div className="font-instrument text-2xl md:text-3xl text-[#FFFFFF] tracking-tight">
                  {project.name}
                </div>
                <p className="font-manrope font-medium text-[11px] text-[#A09895] uppercase tracking-widest">
                  {project.category}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Content & Metadata */}
      <div className="p-6 md:p-8 flex flex-col flex-grow space-y-4">
        <div>
          <span className="text-[11px] font-manrope font-semibold uppercase tracking-[0.2em] text-[#E0A0B0] block mb-2">
            {project.category}
          </span>
          <h3 className="font-instrument text-2xl md:text-3xl text-[#FFFFFF] tracking-tight transition-colors">
            {project.name}
          </h3>
        </div>

        <p className="font-lora text-[15px] text-[#A09895] leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack Pills */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-[10px] font-manrope font-medium text-[#E4DFDD] bg-[#160E12] border border-[#2B1B22] px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="pt-6 mt-auto">
          <div className="inline-flex items-center gap-2 text-xs font-manrope font-semibold uppercase tracking-wider text-[#E0A0B0] group-hover:text-[#FFFFFF] transition-colors">
            <span>View Project</span>
            <motion.div
              variants={{
                initial: { x: 0 },
                hover: { x: 4 }
              }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectDetailModal: React.FC<{
  project: PortfolioProject | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#000000]/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#050505] border border-[#2B1B22] rounded-[2px] p-6 sm:p-8 md:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.9)] space-y-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-xs font-manrope font-medium uppercase tracking-widest px-3 py-1.5 border border-[#3A1F2B] text-[#A09895] hover:text-[#FFFFFF] hover:border-[#7A0F2E] transition-all rounded-[2px]"
        >
          Close [Esc]
        </button>

        {/* Category & Title */}
        <div className="space-y-2">
          <div className="text-[11px] font-manrope font-semibold uppercase tracking-[0.25em] text-[#7A0F2E]">
            Case Study Overview • {project.category}
          </div>
          <h2 className="font-instrument text-3xl sm:text-4xl md:text-5xl text-[#FFFFFF]">
            {project.name}
          </h2>
          <p className="font-lora text-[16px] text-[#A09895] leading-relaxed pt-2">
            {project.fullOverview}
          </p>
        </div>

        {/* Services Provided Matrix */}
        <div className="space-y-3 pt-4 border-t border-[#1F1418]">
          <h4 className="text-xs font-manrope font-semibold uppercase tracking-widest text-[#E0A0B0] flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Engineering & Deliverables</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.servicesProvided.map((srv, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 bg-[#160E12] border border-[#2B1B22]/60 rounded-[2px]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#7A0F2E] flex-shrink-0" />
                <span className="text-[13px] font-manrope font-medium text-[#E4DFDD]">{srv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-3 pt-4 border-t border-[#1F1418]">
          <h4 className="text-xs font-manrope font-semibold uppercase tracking-widest text-[#E0A0B0] flex items-center gap-2">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Architecture Highlights</span>
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="text-[13px] font-manrope font-medium text-[#A09895] flex items-start gap-2.5"
              >
                <span className="text-[#7A0F2E] font-bold">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA Actions */}
        <div className="pt-6 border-t border-[#1F1418] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E4DFDD] text-[#050505] hover:bg-[#FFFFFF] text-xs font-manrope font-semibold uppercase tracking-widest transition-all rounded-[2px]"
              >
                <span>Visit Live Store</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={getWhatsAppUrl(
                `Hi Cherryworks, I saw your case study for ${project.name} (${project.liveUrl || ''}) and would like to build a similar high-converting store for my brand.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#7A0F2E] text-white hover:bg-[#8C1835] text-xs font-manrope font-semibold uppercase tracking-widest transition-all rounded-[2px]"
            >
              Inquire on WhatsApp →
            </a>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 border border-[#3A1F2B] text-[#A09895] hover:text-[#FFFFFF] text-xs font-manrope font-medium uppercase tracking-widest transition-colors rounded-[2px]"
          >
            Back to Directory
          </button>
        </div>
      </div>
    </div>
  );
};
