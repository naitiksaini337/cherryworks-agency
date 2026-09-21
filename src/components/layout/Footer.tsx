import React from 'react';
import Link from 'next/link';
import { Logo } from '../brand/Logo';
import { BRAND, SERVICES_LIST, getWhatsAppUrl } from '../../data/siteData';
import { ArrowUpRight, MessageCircle, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-[#F4F0EC] border-t border-[#1C1417] pt-16 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-24">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <p className="font-manrope font-medium text-[14px] leading-relaxed text-[#A09895] max-w-sm">
              Digital growth systems for ambitious brands ready to build, grow, and scale through
              precision engineering, bespoke websites, and automated lead acquisition.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-manrope font-semibold uppercase tracking-wider text-[#E0A0B0] hover:text-[#FFFFFF] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Inquiries</span>
              </a>
              <span className="text-[#7A0F2E]">•</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-manrope font-semibold uppercase tracking-wider text-[#D0C8C5] hover:text-[#FFFFFF] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#7A0F2E]" />
                <span>Start a Project</span>
              </Link>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] font-manrope font-semibold uppercase tracking-[0.25em] text-[#7A0F2E]">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-manrope font-medium text-[13px] text-[#A09895]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  About Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  Pricing & Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] font-manrope font-semibold uppercase tracking-[0.25em] text-[#7A0F2E]">
              Services
            </h4>
            <ul className="space-y-2.5 font-manrope font-medium text-[13px] text-[#A09895]">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/${srv.route}`}
                    className="hover:text-[#FFFFFF] transition-colors text-left flex items-center gap-1 group"
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#7A0F2E]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] font-manrope font-semibold uppercase tracking-[0.25em] text-[#7A0F2E]">
              Location
            </h4>
            <div className="space-y-2 font-manrope font-medium text-[13px] text-[#A09895]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#708070]" />
                <span>{BRAND.location}</span>
              </div>
              <p className="text-xs text-[#A09895] pt-1">
                Remote collaborations with founders, creators, and businesses globally.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#160E12] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-manrope font-medium text-[#A09895]">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/legal?tab=pp" className="hover:text-[#FFFFFF] cursor-pointer transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/legal?tab=tos" className="hover:text-[#FFFFFF] cursor-pointer transition-colors">Terms of Service</Link>
            <span>•</span>
            <span className="text-[#7A0F2E]">Build Beautifully. Grow Intelligently.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
