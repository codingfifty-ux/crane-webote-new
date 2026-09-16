import React, { useState } from 'react';
import { Phone, Mail, Clock, Shield, Menu, X, Instagram, ArrowRight, AlertCircle, FileCheck } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/craneData';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Fleet', target: 'fleet' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg border-b border-slate-200">
      {/* Contractor Top Dispatch Bar (WordPress / RiggingNYC Style) */}
      <div className="bg-slate-950 text-slate-100 text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
          {/* Left: 24/7 Hotline with Pulsing Emergency Indicator */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <a
              id="topbar-phone-link"
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 font-black text-amber-400 hover:text-amber-300 transition-colors tracking-wide"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <Phone className="w-3.5 h-3.5" />
              <span>24/7 EMERGENCY DISPATCH: {COMPANY_INFO.phone}</span>
            </a>

            <a
              id="topbar-nyc-phone"
              href={`tel:${COMPANY_INFO.localPhone}`}
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <span className="text-slate-500">|</span>
              <span className="font-semibold">NYC Dispatch: {COMPANY_INFO.localPhone}</span>
            </a>

            <a
              id="topbar-email-link"
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          {/* Right: Master Rigger Credentials & User-Requested Instagram Link */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-white">NYC DOB Master Riggers</span>
              <span className="text-slate-500">• NCCCO</span>
            </div>

            <span className="hidden sm:inline text-slate-700">|</span>

            {/* Prominent Instagram link requested by user */}
            <a
              id="topbar-instagram-link"
              href={COMPANY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 px-2.5 py-1 rounded text-amber-400 hover:text-amber-300 transition-colors font-bold border border-slate-800"
              title="Visit RAS Crane on Instagram @rascrane"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="header-home-button"
            onClick={() => handleNavClick('hero')}
            className="text-left focus:outline-none"
          >
            <Logo variant="dark" />
          </button>

          {/* Desktop Navigation Links - exactly 5 items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                id={`nav-${link.target}`}
                onClick={() => handleNavClick(link.target)}
                className="px-3.5 py-2 text-xs font-black text-slate-800 hover:text-amber-600 hover:bg-slate-100 rounded transition-all uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Trigger Group */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-black text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>CALL NOW</span>
            </a>

            <button
              id="header-quote-button"
              onClick={onOpenQuote}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded shadow-md shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu & Direct Quote Toggle */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              id="mobile-quote-btn"
              onClick={onOpenQuote}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs uppercase px-3 py-2 rounded shadow"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-800 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-t border-slate-800 py-4 px-6 space-y-3">
          <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              24/7 Crane & Rigging Dispatch
            </span>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="text-xs font-black text-white bg-amber-500 text-slate-950 px-2 py-1 rounded"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                id={`mobile-nav-${link.target}`}
                onClick={() => handleNavClick(link.target)}
                className="w-full text-left py-2.5 px-3 text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-amber-400 hover:bg-slate-800 rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              id="mobile-drawer-quote-button"
              onClick={() => {
                onOpenQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded text-center shadow"
            >
              Request Crane & Rigging Quote
            </button>

            <a
              href={COMPANY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-slate-800 text-slate-200 font-bold text-xs uppercase tracking-wider rounded text-center flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 text-amber-400" />
              <span>Follow @rascrane on Instagram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
