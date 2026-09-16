import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const isDark = variant === 'dark';

  return (
    <div id="brand-logo" className={`flex items-center gap-3 select-none ${className}`}>
      {/* Industrial Heavy Crane Emblem with Boom & Rigging Hook */}
      <div className="relative w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20 flex-shrink-0 border-2 border-amber-400">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 text-slate-950"
        >
          {/* Heavy Crane Mast & Tower */}
          <path
            d="M8 34L14 8L32 4"
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Lattice Cross Trusses */}
          <path
            d="M12 18L21 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15 25L27 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Steel Hoist Cable */}
          <path
            d="M32 6V20"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeDasharray="2 2"
            strokeLinecap="round"
          />
          {/* Heavy Rigging Swivel Hook Block */}
          <circle cx="32" cy="21" r="2" fill="currentColor" />
          <path
            d="M32 22C32 26 28 28 25 28C22 28 20 25.5 20 23.5C20 21.8 21.2 20.8 22.6 20.8C24 20.8 24.6 22 24.2 23.5"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Ground Outrigger Base Plate */}
          <path
            d="M5 34H19"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        {/* Contractor Hazard Accent */}
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-slate-950 rotate-45 border border-amber-400"></div>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-2xl sm:text-3xl font-black tracking-tight font-heading ${isDark ? 'text-slate-900' : 'text-white'}`}>
            RAS
          </span>
          <span className="text-2xl sm:text-3xl font-black tracking-tight font-heading text-amber-500">
            CRANE
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className={`text-[10px] font-black tracking-widest uppercase ${isDark ? 'text-slate-700' : 'text-slate-200'}`}>
            NYC Crane & Rigging
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          <span className="text-[9px] font-bold text-amber-500 uppercase tracking-wider">
            Licensed & Insured
          </span>
        </div>
      </div>
    </div>
  );
};
