import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Instagram, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/craneData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t-2 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              {COMPANY_INFO.legalName} is New York’s premier turnkey crane rental and master rigging contractor. We operate a late-model fleet of mobile hydraulic cranes, boom trucks, and articulating knucklebooms backed by full DOB permit expediting and $10M liability insurance.
            </p>

            {/* Instagram Profile Link as requested by user */}
            <div className="pt-2">
              <a
                id="footer-instagram-link"
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-slate-900 border border-slate-800 hover:border-amber-500/60 text-amber-400 hover:text-amber-300 text-xs font-bold transition-colors shadow-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow {COMPANY_INFO.instagramHandle} on Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links - 5 Menu Items */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase text-white tracking-widest border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', target: 'hero' },
                { label: 'About Us', target: 'about' },
                { label: 'Crane Services', target: 'services' },
                { label: 'Equipment Fleet', target: 'fleet' },
                { label: 'Contact & Quotes', target: 'contact' },
              ].map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => onNavigate(link.target)}
                    className="text-slate-400 hover:text-amber-400 transition-colors uppercase font-semibold text-[11px]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase text-white tracking-widest border-b border-slate-800 pb-2">
              NYC Service Boroughs
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Manhattan (Commercial & High-Rise)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Brooklyn (Navy Yard & Industrial)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Queens (Expressways & Plazas)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>The Bronx & Staten Island</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Long Island & Tri-State Metro Area</span>
              </li>
            </ul>
          </div>

          {/* Contact & 24/7 Dispatch */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase text-white tracking-widest border-b border-slate-800 pb-2">
              Dispatch & Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">24/7 Dispatch Hotline</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-amber-400 font-bold text-sm font-mono">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">NYC Local Dispatch</span>
                  <a href={`tel:${COMPANY_INFO.localPhone}`} className="text-white hover:text-amber-400 font-bold text-xs font-mono">
                    {COMPANY_INFO.localPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">Email Quote Desk</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-amber-400">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">Hours of Operation</span>
                  <span className="text-slate-300">{COMPANY_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Certifications Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</span>
            <span>•</span>
            <span>{COMPANY_INFO.license}</span>
            <span>•</span>
            <span>{COMPANY_INFO.insurance}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="text-amber-400 hover:text-amber-300 font-bold uppercase text-[11px]"
            >
              Request a Quote
            </button>
            <span>•</span>
            <a
              href={COMPANY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400"
            >
              Instagram @rascrane
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
