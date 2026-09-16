import React from 'react';
import { Award, ShieldAlert, Truck, Clock, FileCheck, CheckCircle2 } from 'lucide-react';

export const ValueStrip: React.FC = () => {
  const stats = [
    {
      icon: Truck,
      value: '5T – 150+ T',
      label: 'Fleet Lifting Range',
      sub: 'Boom trucks, all-terrain & knucklebooms'
    },
    {
      icon: Award,
      value: '15,000+',
      label: 'NYC Safe Picks',
      sub: 'Rooftop HVAC, steel & plant rigging'
    },
    {
      icon: FileCheck,
      value: 'DOB & DOT',
      label: 'Turnkey Permits',
      sub: 'Street closures & engineered plans'
    },
    {
      icon: Clock,
      value: '24/7/365',
      label: 'Emergency Dispatch',
      sub: 'Same-day & scheduled mobilization'
    }
  ];

  return (
    <section className="bg-slate-900 border-b border-slate-800 py-7 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3 rounded bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-11 h-11 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black font-heading text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-400 hidden sm:block">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
