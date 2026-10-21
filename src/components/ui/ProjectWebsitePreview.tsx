"use client";

import React from "react";
import { Lock, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectWebsitePreviewProps {
  id?: string | number;
  title: string;
  image?: string;
  accent?: string;
  liveUrl?: string;
  niche?: string;
  client?: string;
  isCurrent?: boolean;
}

export function ProjectWebsitePreview({
  id,
  title,
  image,
  accent = "#7A0F2E",
  liveUrl = "https://www.cherryworks.agency",
  niche = "Website",
  client,
  isCurrent = false,
}: ProjectWebsitePreviewProps) {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    setImageError(false);
    setImageLoaded(false);
  }, [image, id]);

  let hostname = "cherryworks.agency";
  try {
    hostname = new URL(liveUrl).hostname.replace(/^www\./, "");
  } catch {
    hostname = liveUrl;
  }

  // Tailored SVG graphics & metadata per project index/id
  const getProjectGraphic = (idStr?: string | number) => {
    const key = String(idStr || "01").padStart(2, "0");
    switch (key) {
      case "01": // Lull Sleep Restorative Science
        return (
          <svg className="w-16 h-16 opacity-90 text-[#B9A8FF]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M38 34a14 14 0 1 1-16-20 14 14 0 0 0 16 20z" />
            <path d="M42 16l1.5 3.5 3.5 1.5-3.5 1.5L42 26l-1.5-3.5-3.5-1.5 3.5-1.5z" fill="currentColor" stroke="none" />
            <circle cx="22" cy="22" r="1.5" fill="currentColor" stroke="none" />
            <path d="M46 30l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="currentColor" stroke="none" />
          </svg>
        );
      case "02": // Nordic Coffee
        return (
          <svg className="w-16 h-16 opacity-85 text-[#C88A58]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 24h32v20a10 10 0 0 1-10 10H22a10 10 0 0 1-10-10V24z" />
            <path d="M44 30h6a6 6 0 0 1 0 12h-6" />
            <path d="M22 14c0 4-4 4-4 8M30 12c0 4-4 4-4 8M38 14c0 4-4 4-4 8" strokeDasharray="2 2" />
          </svg>
        );
      case "03": // RapidFlow Plumbing
        return (
          <svg className="w-16 h-16 opacity-85 text-[#0284C7]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="32" cy="32" r="20" />
            <path d="M32 20v12l8 4" />
            <path d="M16 12h32M24 8h16" />
            <path d="M32 44v8M28 52h8" />
          </svg>
        );
      case "04": // ORA Fine Jewelry
        return (
          <svg className="w-16 h-16 opacity-85 text-[#D4AF37]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8">
            <polygon points="32,8 54,24 44,54 20,54 10,24" />
            <polygon points="32,8 44,54 20,54" />
            <line x1="10" y1="24" x2="54" y2="24" />
          </svg>
        );
      case "05": // Sunflower Dental
        return (
          <svg className="w-16 h-16 opacity-85 text-[#EAB308]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 16c6-4 18-4 24 0 6 5 8 16 6 24-2 9-8 16-10 20-3-5-6-14-8-14s-5 9-8 14c-2-4-8-11-10-20-2-8 0-19 6-24z" />
          </svg>
        );
      case "06": // Hans & Smith Architecture
        return (
          <svg className="w-16 h-16 opacity-85 text-[#A1A1AA]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="14" y="20" width="36" height="34" />
            <line x1="14" y1="36" x2="50" y2="36" />
            <line x1="32" y1="20" x2="32" y2="54" />
            <path d="M10 20l22-12 22 12" />
          </svg>
        );
      case "07": // Apoplabs Energy
        return (
          <svg className="w-16 h-16 opacity-85 text-[#22C55E]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="36,8 18,34 32,34 28,56 46,30 32,30" />
          </svg>
        );
      case "08": // Cardinal Electric
        return (
          <svg className="w-16 h-16 opacity-85 text-[#EF4444]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="38,6 16,34 30,34 24,58 48,26 34,26" />
            <circle cx="32" cy="32" r="28" strokeDasharray="4 4" />
          </svg>
        );
      case "09": // Petal & Lime Bakehouse
        return (
          <svg className="w-16 h-16 opacity-85 text-[#EC4899]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 40h40v12H12zM16 28h32v12H16zM22 18h20v10H22z" />
            <circle cx="32" cy="12" r="3" fill="currentColor" />
          </svg>
        );
      case "10": // Bluegrass Roofing
        return (
          <svg className="w-16 h-16 opacity-85 text-[#3B82F6]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 38L32 16l24 22" />
            <path d="M18 30v22h28V30" />
            <path d="M42 22v-6h6v12" />
          </svg>
        );
      case "11": // WILDSTEM Candles
        return (
          <svg className="w-16 h-16 opacity-85 text-[#A855F7]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="22" y="26" width="20" height="28" rx="3" />
            <path d="M32 26V20" />
            <path d="M32 10c-3 4-3 7 0 10 3-3 3-6 0-10z" fill="currentColor" />
          </svg>
        );
      case "12": // Whitfield Dermatology
        return (
          <svg className="w-16 h-16 opacity-85 text-[#14B8A6]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M32 12v40M12 32h40" />
            <circle cx="32" cy="32" r="24" strokeDasharray="3 3" />
          </svg>
        );
      case "13": // Aurelia Interiors
        return (
          <svg className="w-16 h-16 opacity-85 text-[#D97706]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="12" y="16" width="40" height="36" rx="2" />
            <path d="M12 28h40M26 28v24" />
          </svg>
        );
      case "14": // Steth Medical NYC
        return (
          <svg className="w-16 h-16 opacity-85 text-[#6366F1]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="32" cy="32" r="14" />
            <circle cx="32" cy="32" r="22" strokeDasharray="2 4" />
            <path d="M32 18v28M18 32h28" />
          </svg>
        );
      case "15": // Lumina Skin Clinic
        return (
          <svg className="w-16 h-16 opacity-85 text-[#F43F5E]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="32,10 38,26 54,32 38,38 32,54 26,38 10,32 26,26" />
          </svg>
        );
      case "16": // Cherry Works Agency
        return (
          <svg className="w-16 h-16 opacity-85 text-[#FDA4AF]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="32" cy="32" r="20" />
            <polygon points="32,18 42,38 22,38" fill="currentColor" opacity="0.3" />
            <circle cx="32" cy="32" r="6" fill="currentColor" />
          </svg>
        );
      case "17": // Moggerisland Streetwear
        return (
          <svg className="w-16 h-16 opacity-90 text-[#D4AF37]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 46c4-12 10-18 16-18s12 6 16 18" />
            <path d="M32 12v16M24 16l8 12 8-12" />
            <circle cx="32" cy="46" r="4" fill="currentColor" />
            <path d="M10 52c12 2 32 2 44 0" strokeDasharray="3 3" />
          </svg>
        );
      default:
        return (
          <svg className="w-16 h-16 opacity-85 text-white/80" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="12" y="12" width="40" height="40" rx="8" />
            <path d="M24 32h16M32 24v16" />
          </svg>
        );
    }
  };

  return (
    <div className="relative h-full w-full flex flex-col bg-[#0A0A0C] text-white overflow-hidden select-none">
      {/* ── Minimal macOS Browser Header ── */}
      <div className="h-7 shrink-0 bg-[#0E0E12] border-b border-white/[0.06] flex items-center justify-between px-3 z-10">
        {/* Traffic Light Window Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
          <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
        </div>

        {/* Minimal URL Address Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/50 border border-white/5 text-[10px] font-mono text-[#A1A1AA] max-w-[65%] truncate">
          <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
          <span className="truncate">{hostname}</span>
        </div>

        {/* Status Dot */}
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: accent }}
        />
      </div>

      {/* ── Viewport Canvas / Conditional Extended Landscape Preview vs Unextended Artwork ── */}
      {isCurrent && image && !imageError ? (
        /* ══════════════════════════════════════════════════════════════
           EXTENDED STATE (isCurrent === true):
           Images are ONLY shown here when the card extends.
           Upper section: Niche, Title, and Live indicator.
           Lower side: Real Landscape Desktop Website Screenshot View (16:10).
           ══════════════════════════════════════════════════════════════ */
        <div className="relative flex-1 w-full flex flex-col justify-between overflow-hidden bg-[#070709]">
          {/* Subtle Accent Glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: `radial-gradient(circle at 50% 20%, ${accent} 0%, transparent 65%)`,
            }}
          />

          {/* Upper Area: Project Branding Info */}
          <div className="relative z-10 px-3.5 pt-2.5 pb-1 flex items-center justify-between gap-2 shrink-0">
            <div className="flex flex-col text-left min-w-0 pr-1">
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#A1A1AA] font-semibold truncate">
                {niche}
              </span>
              <span
                className="text-xs sm:text-[13px] font-semibold text-white tracking-tight truncate drop-shadow-sm"
                style={{ fontFamily: "var(--font-merriweather), Georgia, serif" }}
              >
                {title ? title.split("\n")[0] : client}
              </span>
            </div>

            <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-[9px] font-mono text-emerald-300 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-wider font-semibold">LIVE</span>
            </div>
          </div>

          {/* Lower Side: Real Landscape View of Website (16:10 aspect ratio) */}
          <div className="relative z-10 mx-2.5 mb-2.5 rounded-xl overflow-hidden border border-white/15 bg-black shadow-[0_8px_24px_rgba(0,0,0,0.85)] aspect-[16/10] shrink-0 group/img">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-neutral-900/60 animate-pulse flex items-center justify-center z-10">
                <div className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
              </div>
            )}

            <img
              src={image}
              alt={`${client || title} landscape website preview`}
              loading="lazy"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/card:scale-105 select-none pointer-events-none will-change-transform"
            />

            {/* Subtle bottom gradient & landscape watermark */}
            <div className="absolute inset-x-0 bottom-0 h-7 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none z-10 flex items-end justify-between px-2.5 pb-1">
              <span className="text-[8px] font-mono tracking-wider text-white/50 uppercase">
                Landscape View
              </span>
              <span className="text-[8px] font-mono text-white/40">
                16:10
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* ══════════════════════════════════════════════════════════════
           UNEXTENDED / INACTIVE STATE (isCurrent === false):
           Images are NOT shown. Only the clean vector graphic artwork & title.
           ══════════════════════════════════════════════════════════════ */
        <div className="relative flex-1 flex flex-col items-center justify-center p-3 sm:p-4 overflow-hidden bg-[#0A0A0C]">
          {/* Subtle Ambient Accent Glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: `radial-gradient(circle at 50% 45%, ${accent} 0%, transparent 65%)`,
            }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center gap-2.5 my-auto">
            <div className="w-10 h-10 p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] shadow-md backdrop-blur-sm flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
              {getProjectGraphic(id)}
            </div>

            <div className="flex flex-col items-center text-center gap-0.5 max-w-[190px]">
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#A1A1AA] font-semibold truncate w-full">
                {niche}
              </span>
              <span
                className="text-xs font-semibold text-white/90 tracking-tight truncate w-full"
                style={{ fontFamily: "var(--font-merriweather), Georgia, serif" }}
              >
                {title ? title.split("\n")[0] : client}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectWebsitePreview;
