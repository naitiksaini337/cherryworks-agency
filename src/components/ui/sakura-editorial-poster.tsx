"use client";

import { useEffect, useRef, useState } from "react";

export type SakuraEditorialKeyword = {
  label: string;
};

export type SakuraEditorialPosterProps = {
  title?: string;
  keywords?: SakuraEditorialKeyword[];
  headline?: string;
  body?: string;
  subheadline?: string;
  footerLeft?: string;
  footerCenter?: string;
  footerRight?: string;
  socialHandle?: string;
  sceneSrc?: string;
  sceneAlt?: string;
  foregroundSrc?: string | null;
  foregroundAlt?: string;
  height?: string;
  forceProgress?: number;
  preview?: boolean;
  className?: string;
};

// High-resolution reliable photography fallback assets
const FALLBACK_SCENE =
  "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=2000&q=85";
const FALLBACK_FOREGROUND =
  "https://design-layer.com/dev/sakura-editorial-poster/hero-branch.png?v=2";

const FONT_LINK_ID = "sakura-editorial-poster-fonts";
const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Jost:wght@300;400;500;600&family=Saira+Extra+Condensed:wght@700;800&display=swap";

export const SAKURA_EDITORIAL_DEFAULT_KEYWORDS: SakuraEditorialKeyword[] = [
  { label: "Bloom" },
  { label: "Pause" },
  { label: "Return" },
];

const DEFAULT_BODY =
  "For a few still days the canopy turns pale pink, and the street below goes quiet. Walk while the color lasts — it is already leaving, petal by petal, into the wind.";

const FRAME_PAD_CLASS = "p-0";

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function getScrollParent(el: HTMLElement): HTMLElement | Window {
  let node: HTMLElement | null = el.parentElement;
  while (node && node !== document.body && node !== document.documentElement) {
    const style = window.getComputedStyle(node);
    const oy = style.overflowY;
    if ((oy === "auto" || oy === "scroll") && node.scrollHeight > node.clientHeight + 1) {
      return node;
    }
    node = node.parentElement;
  }
  return window;
}

function readScrollProgress(
  track: HTMLElement,
  scrollRoot: HTMLElement | Window,
): number {
  const useWindowScroll =
    scrollRoot === window ||
    !(scrollRoot instanceof HTMLElement) ||
    (typeof document !== "undefined" &&
      (scrollRoot === document.documentElement || scrollRoot === document.body));

  if (useWindowScroll) {
    const rect = track.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const scrollable = track.offsetHeight - vh;
    if (scrollable <= 0) return 1;
    return clamp01(-rect.top / scrollable);
  }

  const rootRect = scrollRoot.getBoundingClientRect();
  const trackRect = track.getBoundingClientRect();
  const scrollable = track.offsetHeight - scrollRoot.clientHeight;
  if (scrollable <= 0) return 1;
  return clamp01((rootRect.top - trackRect.top) / scrollable);
}

type TitleChar = {
  key: string;
  char: string;
  index: number;
  fromCenter: number;
};

function splitTitleChars(title: string): TitleChar[] {
  const chars = Array.from(title);
  const mid = Math.max(chars.length - 1, 1) / 2;
  return chars.map((char, index) => ({
    key: `${index}-${char === " " ? "sp" : char}`,
    char: char === " " ? "\u00A0" : char,
    index,
    fromCenter: mid <= 0 ? 0 : Math.abs(index - mid) / mid,
  }));
}

function charReveal(progress: number, fromCenter: number, lineIndex = 0): number {
  const lineDelay = lineIndex * 0.05;
  const start = lineDelay + fromCenter * 0.14;
  const end = Math.min(1, start + 0.24);
  return clamp01((progress - start) / Math.max(0.001, end - start));
}

function useSakuraEditorialFonts() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(FONT_LINK_ID)) return;
    const link = document.createElement("link");
    link.id = FONT_LINK_ID;
    link.rel = "stylesheet";
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }, []);
}

function SakuraFitTitle({
  title,
  revealProgress,
}: {
  title: string;
  revealProgress: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLSpanElement>(null);
  const [fontPx, setFontPx] = useState<number | null>(null);

  const lines = title.includes("\n") ? title.split("\n") : [title];
  const probeLine = lines.reduce((a, b) => (a.length > b.length ? a : b), lines[0] || "");
  const titleProgress = clamp01(revealProgress / 0.45);

  useEffect(() => {
    const wrap = wrapRef.current;
    const probe = probeRef.current;
    if (!wrap || !probe) return;

    const PROBE = 100;
    let cancelled = false;
    const fit = () => {
      if (cancelled) return;
      // Allow the longest line to scale comfortably on PC up to 140px
      const availableWidth = wrap.clientWidth * 0.94;
      const next = (availableWidth / Math.max(1, probe.scrollWidth)) * PROBE;
      if (!Number.isFinite(next) || next <= 0) return;
      setFontPx(Math.min(140, Math.max(38, Math.round(next))));
    };

    const ro = new ResizeObserver(fit);
    ro.observe(wrap);

    const fonts = document.fonts;
    const onFonts = () => {
      void fonts?.ready.then(fit);
    };
    fonts?.addEventListener?.("loadingdone", onFonts);
    void (async () => {
      try {
        await fonts?.ready;
      } catch {
        /* fallback metrics */
      }
      fit();
    })();
    fit();

    return () => {
      cancelled = true;
      ro.disconnect();
      fonts?.removeEventListener?.("loadingdone", onFonts);
    };
  }, [title]);

  const titleStyle = {
    fontFamily: 'var(--font-merriweather), Georgia, serif',
    fontWeight: 900,
    letterSpacing: "-0.01em",
    WebkitFontSmoothing: "antialiased" as const,
    MozOsxFontSmoothing: "grayscale" as const,
    textRendering: "geometricPrecision" as const,
    textShadow: "0 2px 14px rgba(0,0,0,0.85)",
  };

  return (
    <div
      ref={wrapRef}
      className="absolute inset-x-4 sm:inset-x-8 max-w-[1500px] mx-auto top-[clamp(2.5rem,7.2vh,5.8rem)] z-20 overflow-visible text-center"
    >
      <span
        ref={probeRef}
        aria-hidden
        className="pointer-events-none invisible absolute whitespace-nowrap uppercase leading-none"
        style={{ ...titleStyle, fontSize: 100 }}
      >
        {probeLine}
      </span>
      <h1
        className="m-0 overflow-visible text-center uppercase text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center gap-2 sm:gap-4"
        style={{
          ...titleStyle,
          fontSize: fontPx != null ? `${fontPx}px` : "clamp(38px, 8vw, 128px)",
          lineHeight: 1.05,
        }}
      >
        {lines.map((line, lineIndex) => {
          const chars = splitTitleChars(line);
          const isDivider = line.trim() === "×" || line.trim().toLowerCase() === "x";
          return (
            <span
              key={`line-${lineIndex}`}
              className={cn(
                "block whitespace-nowrap overflow-visible font-black tracking-tight text-white",
                isDivider && "text-[#FDA4AF] text-[1.45em] leading-none my-1.5 sm:my-3 tracking-widest font-black opacity-95 drop-shadow-[0_2px_16px_rgba(253,164,175,0.55)]"
              )}
            >
              {chars.map((item) => {
                const revealVal = charReveal(titleProgress, item.fromCenter, lineIndex);
                // Invisible on initial load (revealVal = 0), then blooms smoothly into view on scroll
                const t = revealVal;
                const y = (1 - revealVal) * (18 + item.fromCenter * 20);
                const side = item.index < chars.length / 2 ? 1 : -1;
                const x =
                  (1 - revealVal) *
                  (item.fromCenter > 0.01 ? item.fromCenter * 14 * side : 0);
                return (
                  <span
                    key={item.key}
                    aria-hidden
                    className="inline-block"
                    style={{
                      opacity: t,
                      transform: `translate3d(${x}px, ${y}px, 0)`,
                      willChange: "transform, opacity",
                    }}
                  >
                    {item.char}
                  </span>
                );
              })}
            </span>
          );
        })}
        <span className="sr-only">{title.replace(/\n/g, " ")}</span>
      </h1>
    </div>
  );
}

function SakuraHeroVisual({
  title,
  sceneSrc,
  sceneAlt,
  foregroundSrc,
  foregroundAlt,
  revealProgress,
}: {
  title: string;
  sceneSrc: string;
  sceneAlt: string;
  foregroundSrc: string | null;
  foregroundAlt: string;
  revealProgress: number;
}) {
  const [imgSrc, setImgSrc] = useState(sceneSrc);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src={imgSrc}
          alt={sceneAlt}
          onError={() => setImgSrc(FALLBACK_SCENE)}
          className="absolute inset-0 h-full w-full scale-105 object-cover object-center"
          draggable={false}
        />
        {/* Subtle dark vignette overlay for high contrast readability in pure black */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/60 pointer-events-none" />
        {/* Top gradient scrim behind hero typography ensuring rich contrast and legibility */}
        <div className="absolute inset-x-0 top-0 h-[72%] bg-gradient-to-b from-black/95 via-black/70 to-transparent pointer-events-none z-10" />
      </div>

      {/* Layer 2 (z-20): Editorial title typography behind the flower branch */}
      <SakuraFitTitle title={title} revealProgress={revealProgress} />

      {/* Layer 3 (z-30): Foreground floral branch cutting in front of typography with realistic drop shadow */}
      {foregroundSrc ? (
        <img
          src={foregroundSrc}
          alt={foregroundAlt}
          className="pointer-events-none absolute bottom-0 left-1/2 z-30 h-auto w-[min(82%,65cqh)] -translate-x-[38%] translate-y-[20%] object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)] drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]"
          draggable={false}
        />
      ) : null}

      {/* Floating subtle scroll indicator on initial view, gently fading as user scrolls */}
      <div
        className="absolute bottom-8 inset-x-0 z-45 flex flex-col items-center justify-center transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: Math.max(0, 1 - revealProgress * 4.5),
          transform: `translate3d(0, ${revealProgress * 30}px, 0)`,
        }}
      >
        <div className="w-5 h-9 rounded-full border border-white/25 flex items-start justify-center p-1 bg-black/30 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          <div className="w-1 h-2 rounded-full bg-[#FDA4AF] animate-bounce" />
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-b from-transparent via-transparent to-[#0D0D0F]/40"
      />
    </div>
  );
}

function SakuraEditorialCopy({
  keywordItems,
  headline,
  body,
  subheadline,
  footerLeft,
  footerCenter,
  footerRight,
  socialHandle,
}: {
  keywordItems: SakuraEditorialKeyword[];
  headline: string;
  body: string;
  subheadline: string;
  footerLeft: string;
  footerCenter: string;
  footerRight: string;
  socialHandle?: string;
}) {
  return (
    <div className="relative flex min-h-[38%] flex-col border-0 bg-transparent p-[clamp(1.1rem,4.5cqw,2.25rem)] text-[#f6eee8]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0D0F]/95 via-[#4a2c32]/75 to-transparent"
      />
      <div className="relative z-10 flex items-start justify-between gap-3 text-[clamp(9px,1.7cqw,11px)] font-light tracking-[0.16em] text-[#FDA4AF]/90">
        {keywordItems.map((item) => (
          <span key={item.label} className="bg-white/10 px-2 py-0.5 rounded-full border border-white/10 font-mono-tech">
            {item.label}
          </span>
        ))}
      </div>

      <h2
        className="relative z-10 mt-[clamp(0.7rem,2.2cqw,1.15rem)] text-[clamp(1.2rem,3.6cqw,1.7rem)] font-semibold leading-[1.3] text-[#F5F5F7]"
        style={{
          fontFamily:
            'var(--font-merriweather), Georgia, serif',
        }}
      >
        {headline}
      </h2>

      <p className="relative z-10 mt-[clamp(0.5rem,1.6cqw,0.75rem)] max-w-[62%] text-[clamp(10px,1.7cqw,12px)] font-light leading-[1.55] text-[#A1A1AA]">
        {body}
      </p>

      <div className="relative z-10 mt-[clamp(0.65rem,2cqw,0.95rem)] flex items-center justify-between flex-wrap gap-3">
        <p
          className="text-[clamp(0.95rem,2.6cqw,1.2rem)] font-medium leading-[1.35] text-[#FDA4AF]"
          style={{ fontFamily: '"Jost", ui-sans-serif, sans-serif' }}
        >
          {subheadline}
        </p>

        <button
          type="button"
          onClick={() => {
            document.getElementById("selector")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A0F2E] hover:bg-[#8B001D] text-white text-xs font-mono-tech font-semibold tracking-wider border border-[#FDA4AF]/40 shadow-[0_0_16px_rgba(122,15,46,0.6)] transition-all cursor-pointer active:scale-95"
        >
          <span>SELECT PROJECTS</span>
          <span>↓</span>
        </button>
      </div>

      <div className="relative z-10 mt-auto flex items-end justify-between gap-3 pt-[clamp(0.7rem,2.4cqw,1.1rem)] text-[clamp(9px,1.6cqw,11px)] font-light tracking-[0.08em] text-[#71717A] font-mono-tech">
        <span>{footerLeft}</span>
        <span>{footerCenter}</span>
        <span>{footerRight}</span>
      </div>

      {socialHandle ? (
        <span className="absolute bottom-[clamp(0.35rem,1.2cqw,0.65rem)] right-[clamp(0.75rem,4.5cqw,2.25rem)] z-10 text-[clamp(9px,2cqw,11px)] font-light tracking-[0.04em] text-[#A1A1AA]/70 font-mono-tech">
          {socialHandle}
        </span>
      ) : null}
    </div>
  );
}

export function SakuraEditorialPoster({
  title = "CHERRY WORKS",
  keywords = [
    { label: "Engineering" },
    { label: "Conversion" },
    { label: "Architecture" },
  ],
  headline = "Built to Convert in Every Industry | 花びらが光を抱く。",
  body = "Explore 36+ live production websites crafted by Cherry Works Studio. Every build is engineered for instant sub-second response, mobile conversion, and high-performance reliability.",
  subheadline = "Precision UI/UX for Medical, Shopify, Construction & Home Trades.",
  footerLeft = "Cherry Works Creators",
  footerCenter = "Strategic Digital Studio",
  footerRight = "36+ Live Deployments",
  socialHandle = "@cherryworks.studio",
  sceneSrc = "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=2000&q=85",
  sceneAlt = "Cherry blossom ambient scene",
  foregroundSrc = "https://design-layer.com/dev/sakura-editorial-poster/hero-branch.png?v=2",
  foregroundAlt = "Cherry blossom branch in the foreground",
  height = "120vh",
  forceProgress,
  preview = false,
  className,
}: SakuraEditorialPosterProps) {
  useSakuraEditorialFonts();

  const trackRef = useRef<HTMLElement>(null);
  const keywordItems = keywords.filter((item) => item.label.trim().length > 0);

  const locked = forceProgress != null && Number.isFinite(forceProgress);
  const [progress, setProgress] = useState(
    forceProgress != null ? clamp01(forceProgress) : 0,
  );
  const [stickyPx, setStickyPx] = useState<number | null>(null);

  const fillViewport = locked || preview;
  const trackHeight = fillViewport ? "auto" : height;
  const useSticky = !locked && !preview;

  useEffect(() => {
    if (locked || preview) {
      setProgress(clamp01(forceProgress ?? 0));
      setStickyPx(null);
      return;
    }

    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setProgress(1);
      return;
    }

    const scrollRoot = getScrollParent(track);
    let target = 0;
    let current = 0;
    let raf = 0;

    const read = () => {
      const fromRoot = readScrollProgress(track, scrollRoot);
      if (scrollRoot === window) return fromRoot;
      const fromWindow = readScrollProgress(track, window);
      return Math.abs(fromWindow - fromRoot) > 0.02 ? fromWindow : fromRoot;
    };

    let running = false;
    const loop = () => {
      const delta = target - current;
      if (Math.abs(delta) > 0.0006) {
        current += Math.abs(delta) > 0.35 ? delta * 0.22 : delta * 0.14;
        setProgress(current);
        raf = window.requestAnimationFrame(loop);
      } else {
        if (current !== target) {
          current = target;
          setProgress(target);
        }
        running = false;
      }
    };

    const trigger = () => {
      target = read();
      if (!running) {
        running = true;
        raf = window.requestAnimationFrame(loop);
      }
    };

    const onScroll = () => trigger();

    const onResize = () => {
      if (scrollRoot === window) {
        setStickyPx(window.innerHeight);
      } else {
        setStickyPx((scrollRoot as HTMLElement).clientHeight);
      }
      trigger();
    };

    onResize();
    target = read();
    current = target;
    setProgress(current);

    const opts: AddEventListenerOptions = { passive: true };
    scrollRoot.addEventListener("scroll", onScroll, opts);
    window.addEventListener("resize", onResize);

    return () => {
      scrollRoot.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(raf);
    };
  }, [forceProgress, locked, preview]);

  const revealProgress = locked || preview ? clamp01(forceProgress ?? 0) : progress;
  const copyProgress = clamp01((revealProgress - 0.25) / 0.75);
  const copyOffset = `${(1 - copyProgress) * 100}%`;
  const panelHeight =
    useSticky && stickyPx != null
      ? stickyPx
      : fillViewport
        ? "100%"
        : ("100svh" as const);

  return (
    <section
      ref={trackRef}
      className={cn(
        "relative isolate w-full bg-[#0D0D0F]",
        fillViewport && "h-screen",
        className,
      )}
      style={{
        height: useSticky ? trackHeight : undefined,
        fontFamily: '"Jost", ui-sans-serif, sans-serif',
      }}
    >
      <div
        className={cn(
          "box-border w-full overflow-hidden",
          FRAME_PAD_CLASS,
          useSticky ? "sticky top-0" : "relative",
        )}
        style={{ height: panelHeight }}
      >
        <article className="@container relative flex h-full w-full min-h-0 flex-col overflow-hidden bg-[#141418] border-b border-white/[0.08]">
          <div className="@container relative min-h-0 flex-1 overflow-hidden [container-type:size]">
            <SakuraHeroVisual
              title={title}
              sceneSrc={sceneSrc}
              sceneAlt={sceneAlt}
              foregroundSrc={foregroundSrc}
              foregroundAlt={foregroundAlt}
              revealProgress={revealProgress}
            />
          </div>
        </article>
      </div>
    </section>
  );
}

export default SakuraEditorialPoster;
