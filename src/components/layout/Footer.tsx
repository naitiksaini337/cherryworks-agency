'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '../brand/Logo';
import { BRAND, SERVICES_LIST } from '../../data/siteData';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#050505] text-[#F4F0EC] border-t border-[#1C1417] overflow-hidden pt-16 sm:pt-20 pb-12 bg-grain">
      {/* Ambient Cherry Tint */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[120px] pointer-events-none -z-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(122, 15, 46, 0.18), transparent 70%)',
        }}
      />
      {/* Top Hairline Glowing Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#E0A0B0]/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Minimalist 4-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 sm:pb-16">
          {/* Brand Column (Span 4) */}
          <div className="md:col-span-12 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <p className="font-lora text-[13px] leading-relaxed text-[#A09895] max-w-sm">
              Digital growth systems for ambitious brands. Fusing editorial art direction with
              high-performance code and automated conversion architecture.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-manrope font-semibold uppercase tracking-wider text-[#E0A0B0] hover:text-[#FFFFFF] transition-colors"
              >
                <span>{BRAND.email}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Capabilities (Span 3) */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-manrope font-bold uppercase tracking-[0.25em] text-[#E0A0B0]">
              Capabilities
            </h4>
            <ul className="space-y-2.5 font-manrope text-[13px] text-[#A09895]">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/${srv.route}`}
                    className="hover:text-[#FFFFFF] transition-colors inline-block"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#E0A0B0] hover:text-[#FFFFFF] transition-colors inline-flex items-center gap-1"
                >
                  <span>All Capabilities</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio (Span 2) */}
          <div className="md:col-span-4 lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-manrope font-bold uppercase tracking-[0.25em] text-[#E0A0B0]">
              Studio
            </h4>
            <ul className="space-y-2.5 font-manrope text-[13px] text-[#A09895]">
              <li>
                <Link href="/" className="hover:text-[#FFFFFF] transition-colors inline-block">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#FFFFFF] transition-colors inline-block">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFFFFF] transition-colors inline-block">
                  About Studio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#FFFFFF] transition-colors inline-block">
                  Pricing & Retainers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFFFFF] transition-colors inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect (Span 3) */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-manrope font-bold uppercase tracking-[0.25em] text-[#E0A0B0]">
              Connect
            </h4>
            <ul className="space-y-2.5 font-manrope text-[13px] text-[#A09895]">
              <li>
                <a
                  href="https://instagram.com/cherryworks.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity text-[#E0A0B0]" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/cherryworks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity text-[#E0A0B0]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-8 border-t border-[#160E12] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-manrope text-[#7D7578]">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>

          <div className="font-lora italic text-[13px] text-[#A09895]">
            &ldquo;Build beautifully. Grow intelligently.&rdquo;
          </div>

          <div className="flex items-center gap-5">
            <Link href="/legal?tab=pp" className="hover:text-[#FFFFFF] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#2E1620]">•</span>
            <Link href="/legal?tab=tos" className="hover:text-[#FFFFFF] transition-colors">
              Terms of Service
            </Link>
            <span className="text-[#2E1620]">•</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="group inline-flex items-center gap-1.5 uppercase tracking-wider font-semibold text-[#A09895] hover:text-[#FFFFFF] transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3 text-[#E0A0B0] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
