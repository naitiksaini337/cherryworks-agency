'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../brand/Logo';
import { SERVICES_LIST, getWhatsAppUrl } from '../../data/siteData';
import { ChevronDown, Menu, X, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const currentRoute = pathname?.substring(1) || 'home';

  const navLinks: { label: string; route: string; isDropdown?: boolean }[] = [
    { label: 'Services', route: 'services', isDropdown: true },
    { label: 'Work', route: 'work' },
    { label: 'About', route: 'about' },
    { label: 'Pricing', route: 'pricing' },
    { label: 'Contact', route: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#1F1418] py-3.5'
            : 'bg-transparent py-5 md:py-6 border-b border-transparent'
        }`}
        id="main-navigation"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" onClick={handleNavClick}>
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.route}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={`/${link.route}`}
                      onClick={handleNavClick}
                      className={`inline-flex items-center gap-1.5 text-[15px] font-manrope font-medium uppercase tracking-[0.14em] transition-colors duration-200 py-1 ${
                        currentRoute.startsWith('services')
                          ? 'text-[#FFFFFF] font-bold'
                          : 'text-[#E4DFDD] font-semibold hover:text-[#FFFFFF]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                    </Link>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 pt-4 w-72">
                        <div className="bg-[#0A0709] border border-[#1F1418] shadow-[0_16px_40px_rgba(0,0,0,0.8)] py-2 rounded-[2px] backdrop-blur-lg">
                          <div className="px-4 py-2 border-b border-[#1F1418] mb-1">
                            <span className="text-[10px] uppercase font-manrope font-bold tracking-[0.2em] text-[#7A0F2E]">
                              Service Pillars
                            </span>
                          </div>
                          {SERVICES_LIST.map((srv) => (
                            <Link
                              key={srv.id}
                              href={`/${srv.route}`}
                              onClick={handleNavClick}
                              className="w-full text-left px-4 py-2.5 flex items-start gap-3 group/item hover:bg-[#120B0E] transition-colors"
                            >
                              <span className="font-instrument text-[#7A0F2E] text-sm group-hover/item:text-[#E0A0B0] transition-colors">
                                {srv.number}
                              </span>
                              <div>
                                <div className="text-[13px] font-manrope font-medium text-[#F4F0EC] group-hover/item:text-[#FFFFFF]">
                                  {srv.title}
                                </div>
                                <div className="text-[11px] font-manrope font-medium text-[#A09895] truncate max-w-[200px]">
                                  {srv.shortDescription}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = currentRoute === link.route;
              return (
                <Link
                  key={link.route}
                  href={`/${link.route}`}
                  onClick={handleNavClick}
                  className={`text-[15px] font-manrope font-medium uppercase tracking-[0.14em] transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-[#FFFFFF] font-bold border-b border-[#7A0F2E]'
                      : 'text-[#E4DFDD] font-semibold hover:text-[#FFFFFF]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={getWhatsAppUrl("Hi Cherryworks Studios, I'd like to ask about your digital growth services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-[14px] font-manrope font-bold uppercase tracking-[0.12em] text-[#E4DFDD] hover:text-[#FFFFFF] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#E0A0B0]" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              onClick={handleNavClick}
              className="inline-flex items-center justify-center px-5 py-2.5 text-[14px] font-manrope font-bold uppercase tracking-[0.14em] bg-[#F4F0EC] text-[#050505] hover:bg-[#FFFFFF] hover:shadow-[0_0_20px_rgba(244,240,236,0.15)] transition-all rounded-[2px]"
            >
              <span>Start a Project →</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F4F0EC] hover:text-[#FFFFFF] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-between pt-24 pb-8 px-6 md:hidden animate-fadeIn">
          <div className="space-y-6">
            <div className="text-[10px] uppercase font-manrope font-bold tracking-[0.25em] text-[#7A0F2E]">
              Navigation
            </div>
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                onClick={handleNavClick}
                className="text-left font-instrument text-3xl text-[#FFFFFF] hover:text-[#E0A0B0]"
              >
                Overview
              </Link>
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <Link
                    href="/services"
                    onClick={handleNavClick}
                    className="text-left font-instrument text-3xl text-[#FFFFFF] hover:text-[#E0A0B0]"
                  >
                    Services
                  </Link>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-2 text-[#FFFFFF] hover:text-[#E0A0B0] focus:outline-none"
                    aria-label="Toggle Services Menu"
                  >
                    <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {mobileServicesOpen && (
                  <div className="pl-4 mt-4 space-y-4 border-l border-[#1F1418] animate-fadeIn">
                    {SERVICES_LIST.map((srv) => (
                      <Link
                        key={srv.id}
                        href={`/${srv.route}`}
                        onClick={handleNavClick}
                        className="block text-left text-[15px] font-manrope font-medium text-[#7D7578] hover:text-[#FFFFFF] transition-colors"
                      >
                        {srv.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/work"
                onClick={handleNavClick}
                className="text-left font-instrument text-3xl text-[#FFFFFF] hover:text-[#E0A0B0]"
              >
                Selected Work
              </Link>
              <Link
                href="/about"
                onClick={handleNavClick}
                className="text-left font-instrument text-3xl text-[#FFFFFF] hover:text-[#E0A0B0]"
              >
                About Studio
              </Link>
              <Link
                href="/pricing"
                onClick={handleNavClick}
                className="text-left font-instrument text-3xl text-[#FFFFFF] hover:text-[#E0A0B0]"
              >
                Pricing & Packages
              </Link>
              <Link
                href="/contact"
                onClick={handleNavClick}
                className="text-left font-instrument text-3xl text-[#FFFFFF] hover:text-[#E0A0B0]"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#1F1418]">
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="w-full block py-3.5 text-center text-xs font-manrope font-bold uppercase tracking-[0.15em] bg-[#F4F0EC] text-[#050505] rounded-[2px]"
            >
              Start a Project →
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-xs font-manrope font-semibold uppercase tracking-[0.15em] text-[#E0A0B0] border border-[#7A0F2E]/40 flex items-center justify-center gap-2 rounded-[2px]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp →</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
