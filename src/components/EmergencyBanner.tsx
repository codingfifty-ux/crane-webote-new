import React from 'react';
import { PhoneCall, AlertTriangle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/craneData';

interface EmergencyBannerProps {
  onOpenQuote: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 py-10 px-4 sm:px-6 lg:px-8 border-y-4 border-slate-950 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex items-center gap-4 text-center lg:text-left">
          <div className="w-14 h-14 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center flex-shrink-0 shadow-lg">
            <AlertTriangle className="w-8 h-8 animate-pulse" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-slate-950 text-white rounded text-[10px] font-black uppercase tracking-wider mb-1">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>24/7/365 On-Call Fleet</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-950 uppercase tracking-tight leading-tight">
              Need a Crane on Site Today? 24/7 Emergency Dispatch
            </h2>
            <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1 max-w-2xl">
              Fallen tree removals from commercial buildings, storm damage stabilization, structural collapses, and emergency transformer swaps across all 5 boroughs.
            </p>
          </div>
        </div>

        {/* Right CTA Triggers */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            id="emergency-call-button"
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-2.5 px-6 py-3.5 bg-slate-950 hover:bg-slate-900 active:bg-slate-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>Call Now: {COMPANY_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="px-5 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded border border-slate-950 shadow transition-colors"
          >
            Emergency Quote
          </button>
        </div>
      </div>
    </section>
  );
};
