"use client";

// A full-bleed editorial hero driven by a filmstrip of live website mockups.
//
// Every card shares one top edge. The focused card unfurls to full height while
// its neighbours stay clipped to half, presenting crisp macOS browser window previews.
// Changing focus re-grades the ambient background to that website's palette.
import * as React from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import ProjectWebsitePreview from "@/components/ui/ProjectWebsitePreview";
import { WarpShader } from "@/components/ui/wrap-shader";

export interface HeroCarouselItem {
  id?: string | number;
  title: string;
  image: string;
  credit?: string;
  meta?: string[];
  accent?: string;
  palette?: string[];
  liveUrl?: string;
  category?: string;
  niche?: string;
  client?: string;
}

export interface HeroCarouselProps {
  items: HeroCarouselItem[];
  index?: number;
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  onSelectProject?: (item: HeroCarouselItem, index: number) => void;
  brand?: React.ReactNode;
  onBack?: () => void;
  onMenu?: () => void;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
}

/* Ratios for high visual impact, clear layout & comfortable breathing space */
const CARD_H = 0.39; // 39% of container height for rich landscape lower deck
const CARD_AR = 0.88; // proportional browser window ratio
const GAP = 0.035;
const STRIP_TOP = 0.26; // gives ample room for title above and enhanced button below
const TITLE = 0.054; // headline size in Merriweather
const LABEL = 0.012;
const PAD = 0.024;
const RAIL = 0.22;

const WHEEL_THRESHOLD = 50;
const WHEEL_COOLDOWN = 380;

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

/**
 * Converts any hex code into a deep, rich, dark jewel tone for high-contrast OLED black themes
 */
function toDarkTone(hex: string, factor = 0.42): string {
  let clean = hex.replace("#", "");
  if (clean.length === 3) {
    clean = clean.split("").map((c) => c + c).join("");
  }
  const r = parseInt(clean.substring(0, 2), 16) || 0;
  const g = parseInt(clean.substring(2, 4), 16) || 0;
  const b = parseInt(clean.substring(4, 6), 16) || 0;

  const dr = Math.round(r * factor);
  const dg = Math.round(g * factor);
  const db = Math.round(b * factor);

  return `#${dr.toString(16).padStart(2, "0")}${dg.toString(16).padStart(2, "0")}${db.toString(16).padStart(2, "0")}`;
}

export function HeroCarousel({
  items,
  index: controlled,
  defaultIndex = 0,
  onIndexChange,
  onSelectProject,
  brand,
  autoplay = false,
  autoplayDelay = 5000,
  className,
}: HeroCarouselProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const [box, setBox] = React.useState({ w: 0, h: 0 });
  const [uncontrolled, setUncontrolled] = React.useState(defaultIndex);
  const [dragging, setDragging] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const reduced = useReducedMotion();

  const last = items.length - 1;
  const index = clamp(controlled ?? uncontrolled, 0, Math.max(0, last));

  const go = React.useCallback(
    (next: number) => {
      const clamped = clamp(next, 0, Math.max(0, last));
      if (controlled === undefined) setUncontrolled(clamped);
      if (clamped !== index) onIndexChange?.(clamped);
    },
    [controlled, index, last, onIndexChange]
  );

  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const read = () =>
      setBox({ w: stage.clientWidth, h: stage.clientHeight });
    read();
    const ro = new ResizeObserver(read);
    ro.observe(stage);
    return () => ro.disconnect();
  }, []);

  const fullH = clamp(box.h * CARD_H, 200, 420);
  const halfH = fullH * 0.48;
  const cardW = fullH * CARD_AR;
  const gap = Math.max(8, Math.round(cardW * GAP));
  const step = cardW + gap;
  const pad = Math.max(20, Math.round(box.w * PAD));

  const xFor = React.useCallback(
    (i: number) => box.w / 2 - (i * step + cardW / 2),
    [box.w, step, cardW]
  );
  const x = useMotionValue(0);
  const target = xFor(index);

  const swing = reduced
    ? { duration: 0 }
    : { duration: 0.7, ease: "easeOut" as const };
  const spring = reduced
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 260, damping: 32, mass: 0.9 };

  React.useEffect(() => {
    if (dragging) return;
    const run = animate(x, target, spring);
    return () => run.stop();
  }, [target, dragging, reduced, x]);

  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let acc = 0;
    let until = 0;

    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const stuck = (delta > 0 && index === last) || (delta < 0 && index === 0);
      if (stuck) {
        acc = 0;
        return;
      }
      e.preventDefault();
      const now = e.timeStamp;
      if (now < until) return;
      acc += delta;
      if (Math.abs(acc) < WHEEL_THRESHOLD) return;
      go(index + Math.sign(acc));
      acc = 0;
      until = now + WHEEL_COOLDOWN;
    };

    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [go, index, last]);

  React.useEffect(() => {
    if (!autoplay || paused || dragging || items.length < 2) return;
    const id = window.setTimeout(
      () => go(index === last ? 0 : index + 1),
      autoplayDelay
    );
    return () => window.clearTimeout(id);
  }, [autoplay, autoplayDelay, dragging, go, index, items.length, last, paused]);

  const active = items[index];
  if (!active) return null;

  const lines = active.title.split("\n");
  const accent = active.accent ?? "#7A0F2E";
  const palette = active.palette && active.palette.length >= 3
    ? active.palette
    : [accent, `${accent}cc`, `${accent}77`];

  // Deep dark jewel tones calibrated with pitch black for intense dark high-contrast
  const shaderColors = [
    toDarkTone(palette[0], 0.45),
    toDarkTone(palette[1] || accent, 0.35),
    toDarkTone(accent, 0.5),
    "#000000",
  ];

  return (
    <div
      ref={stageRef}
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label="Interactive Project Showcase"
      onKeyDown={(e) => {
        const keys: Record<string, number> = {
          ArrowLeft: index - 1,
          ArrowRight: index + 1,
          Home: 0,
          End: last,
        };
        if (!(e.key in keys)) return;
        e.preventDefault();
        go(keys[e.key]!);
      }}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className={cn(
        "relative h-full w-full overflow-hidden bg-black text-white select-none rounded-3xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.95)]",
        "outline-none focus-visible:ring-2 focus-visible:ring-[#7A0F2E]",
        className
      )}
    >
      {/* ── Background: Extremely Black Canvas + Dynamic Warp Shader with Dark High Contrast ── */}
      <div className="absolute inset-0 pointer-events-none bg-black overflow-hidden">
        {/* Dynamic Warp Shader loaded with dark jewel tones on pitch black */}
        <div className="absolute -inset-[10%] opacity-70 mix-blend-screen scale-110">
          <WarpShader
            colors={shaderColors}
            proportion={0.55}
            softness={2}
            distortion={0.16}
            swirl={0.6}
            shape="checks"
            speed={0.35}
            scale={1.2}
          />
        </div>

        {/* Ambient radial glow mapped to project accent - deep & moody */}
        <div
          className="absolute inset-0 transition-all duration-700 opacity-60"
          style={{
            background: `radial-gradient(circle at 50% 36%, ${toDarkTone(accent, 0.4)}60 0%, ${toDarkTone(accent, 0.2)}20 45%, rgba(0,0,0,0.85) 75%, #000000 100%)`,
          }}
        />

        {/* Extreme black vignettes ensuring true OLED black background around titles & controls */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_32%,rgba(0,0,0,0.85)_75%,#000000_100%)] pointer-events-none" />
      </div>

      {/* ── Top bar: Minimal Co-Brand & Counter ── */}
      <div
        className="absolute inset-x-0 flex items-center justify-between px-6 sm:px-8 z-30 pointer-events-auto"
        style={{ top: Math.max(16, box.h * 0.03) }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: accent, boxShadow: `0 0 12px ${accent}` }}
          />
          <div className="text-xs font-mono-tech text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            PROJECT {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </div>
        </div>

        {brand ? (
          <div
            className="hidden sm:block font-bold tracking-[0.08em] uppercase text-xs sm:text-sm text-[#F5F5F7]/90"
            style={{ fontFamily: "var(--font-merriweather), Georgia, serif" }}
          >
            {brand}
          </div>
        ) : null}
      </div>

      {/* ── Headline block in Merriweather font, centered horizontally in the section ── */}
      <div
        className="absolute inset-x-0 top-0 flex flex-col justify-end pointer-events-none z-20"
        style={{
          height: `${STRIP_TOP * 100}%`,
          paddingLeft: pad,
          paddingRight: pad,
          paddingBottom: Math.round(box.h * 0.02),
        }}
      >
        <div className="flex w-full items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={index}
              className="font-bold leading-[1.05] tracking-[-0.02em] text-[#F5F5F7] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] text-center max-w-4xl mx-auto"
              style={{
                fontFamily: "var(--font-merriweather), Georgia, serif",
                fontSize: Math.max(26, Math.round(box.h * TITLE)),
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              {active.title.replace(/\n/g, " ")}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Left / Right Quick Arrow Steppers ── */}
      <button
        type="button"
        onClick={() => go(index - 1)}
        disabled={index === 0}
        aria-label="Previous project"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#141418]/90 hover:bg-[#7A0F2E] border border-white/15 text-white disabled:opacity-20 flex items-center justify-center backdrop-blur-xl shadow-2xl transition-all active:scale-95 cursor-pointer pointer-events-auto"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={() => go(index + 1)}
        disabled={index === last}
        aria-label="Next project"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#141418]/90 hover:bg-[#7A0F2E] border border-white/15 text-white disabled:opacity-20 flex items-center justify-center backdrop-blur-xl shadow-2xl transition-all active:scale-95 cursor-pointer pointer-events-auto"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ── The strip: one shared top edge, with live browser window mockups ── */}
      <div
        className="absolute inset-x-0 z-20"
        style={{ top: `${STRIP_TOP * 100}%`, height: fullH }}
      >
        <motion.div
          className="flex items-start"
          style={{ gap, x, cursor: dragging ? "grabbing" : "grab" }}
          drag="x"
          dragMomentum={false}
          dragElastic={0.08}
          dragConstraints={{ left: xFor(last), right: xFor(0) }}
          onDragStart={() => setDragging(true)}
          onDragEnd={(_, info) => {
            setDragging(false);
            const thrown = x.get() + info.velocity.x * 0.12;
            const targetIndex = Math.round((box.w / 2 - thrown - cardW / 2) / step);
            go(targetIndex);
          }}
        >
          {items.map((item, i) => {
            const isCurrent = i === index;
            return (
              <motion.button
                key={item.id ?? i}
                type="button"
                aria-label={item.title.replace(/\n/g, " ")}
                aria-current={isCurrent}
                onClick={() => {
                  go(i);
                  if (onSelectProject) onSelectProject(item, i);
                }}
                className={cn(
                  "relative shrink-0 overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer group/card",
                  isCurrent
                    ? "border-white/40 shadow-[0_16px_40px_rgba(0,0,0,0.9)]"
                    : "border-white/10 opacity-55 hover:opacity-85"
                )}
                style={{ width: cardW }}
                animate={{ height: isCurrent ? fullH : halfH }}
                transition={spring}
              >
                {/* Tailored Vector & CSS Browser Window Mockup */}
                <ProjectWebsitePreview
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  accent={item.accent}
                  liveUrl={item.liveUrl}
                  niche={item.niche}
                  client={item.client}
                  isCurrent={isCurrent}
                />

                {/* Overlay on inactive cards */}
                <motion.span
                  aria-hidden
                  className="absolute inset-0 bg-black/40 group-hover/card:bg-black/15 transition-colors pointer-events-none"
                  animate={{ opacity: isCurrent ? 0 : 0.4 }}
                  transition={spring}
                />
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* ── Fixed-Size Redirect to Website Button: Constant Dimensions & Dynamic Project Accent Color ── */}
      {active.liveUrl && (
        <div
          className="absolute inset-x-0 z-30 flex justify-center pointer-events-auto px-4"
          style={{
            top: box.h > 0 ? STRIP_TOP * box.h + fullH + 20 : "68%",
          }}
        >
          <a
            href={active.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta inline-flex items-center justify-center gap-2 w-32 h-11 rounded-full text-white font-semibold text-xs sm:text-sm font-sans tracking-wide transition-colors duration-500 shadow-xl cursor-pointer active:scale-95"
            style={{
              backgroundColor: accent,
              boxShadow: `0 0 24px ${accent}60, 0 8px 24px rgba(0,0,0,0.6)`,
            }}
          >
            <span>Visit</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </a>
        </div>
      )}

      {/* ── Position rail & 01/15 Style Indicator (Replaced # numberings) ── */}
      <div
        className="absolute z-20 flex items-center justify-between pointer-events-auto"
        style={{
          left: pad,
          right: pad,
          bottom: Math.max(16, box.h * 0.02),
        }}
      >
        <div style={{ width: Math.max(140, box.w * RAIL) }} className="relative h-1.5 bg-white/15 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 rounded-full"
            style={{
              width: `${100 / items.length}%`,
              backgroundColor: accent,
              boxShadow: `0 0 10px ${accent}`,
            }}
            animate={{ left: `${(index / items.length) * 100}%` }}
            transition={spring}
          />
        </div>

        {/* 01/15 in this style */}
        <div className="text-xs font-mono-tech font-bold text-white tracking-widest bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full shadow-inner backdrop-blur-md">
          <span className="text-white">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-white/40 mx-1">/</span>
          <span className="text-white/60">{String(items.length).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
