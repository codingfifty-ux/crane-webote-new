import React, { useState } from 'react';
import { CRANE_FLEET } from '../data/craneData';
import { CraneTruck } from '../types';
import { Truck, Check, ArrowRight, Gauge, Maximize2, ShieldAlert } from 'lucide-react';

interface FleetSectionProps {
  onSelectTruckForQuote: (truckName: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectTruckForQuote }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'boom_truck' | 'knuckle_boom' | 'all_terrain' | 'heavy_haul'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Fleet & Equipment' },
    { id: 'boom_truck', label: 'Boom Trucks' },
    { id: 'knuckle_boom', label: 'Knucklebooms' },
    { id: 'all_terrain', label: 'Hydraulic & All-Terrain' },
    { id: 'heavy_haul', label: 'Heavy Haulers' },
  ];

  const filteredFleet = activeFilter === 'all'
    ? CRANE_FLEET
    : CRANE_FLEET.filter((item) => {
        if (activeFilter === 'all_terrain') {
          return item.type === 'all_terrain' || item.type === 'rough_terrain';
        }
        return item.type === activeFilter;
      });

  return (
    <section id="fleet" className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 font-extrabold text-xs uppercase tracking-wider rounded border border-amber-300">
              <Truck className="w-3.5 h-3.5 text-amber-700" />
              <span>Commercial Fleet Inventory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 uppercase tracking-tight">
              Our Crane Fleet & Trucks
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Late-model mobile hydraulic cranes, Peterbilt boom trucks, and articulating knucklebooms rigorously inspected and certified for maximum jobsite safety and uptime.
            </p>
          </div>

          {/* WordPress Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                id={`fleet-tab-${tab.id}`}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-2 text-xs font-black uppercase tracking-wider rounded transition-all ${
                  activeFilter === tab.id
                    ? 'bg-slate-950 text-amber-400 shadow-sm border border-slate-900'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((truck) => (
            <div
              key={truck.id}
              id={`truck-card-${truck.id}`}
              className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Truck Visual Header */}
                <div className="relative h-56 w-full bg-slate-950 overflow-hidden">
                  <img
                    src={truck.image}
                    alt={truck.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {truck.isPopular && (
                    <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded shadow">
                      Popular Pick
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur text-white text-[11px] font-black px-2.5 py-1 rounded border border-slate-700 uppercase">
                    {truck.categoryLabel}
                  </div>
                </div>

                {/* Specs Pill Header */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-black font-heading text-slate-900 uppercase group-hover:text-amber-600 transition-colors">
                    {truck.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {truck.description}
                  </p>

                  {/* Machine Specifications Box */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="bg-white p-2.5 rounded border border-slate-200 text-center">
                      <div className="text-[10px] uppercase font-bold text-slate-500 flex items-center justify-center gap-1">
                        <Gauge className="w-3 h-3 text-amber-500" />
                        <span>Capacity</span>
                      </div>
                      <div className="text-sm sm:text-base font-black text-slate-900 mt-0.5">
                        {truck.capacity}
                      </div>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-slate-200 text-center">
                      <div className="text-[10px] uppercase font-bold text-slate-500 flex items-center justify-center gap-1">
                        <Maximize2 className="w-3 h-3 text-amber-500" />
                        <span>Max Tip Height</span>
                      </div>
                      <div className="text-sm sm:text-base font-black text-slate-900 mt-0.5">
                        {truck.maxTipHeight}
                      </div>
                    </div>
                  </div>

                  {/* Boom Details */}
                  <div className="text-xs font-semibold text-slate-800 bg-amber-50 p-2.5 rounded border border-amber-200/80">
                    <span className="text-amber-900 font-black uppercase block text-[10px]">Boom Length:</span>
                    {truck.boomLength}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 pt-1">
                    {truck.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  id={`btn-select-truck-${truck.id}`}
                  onClick={() => onSelectTruckForQuote(truck.name)}
                  className="w-full py-3 bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-white font-black text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <span>Request Quote For This Truck</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
