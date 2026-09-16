import React, { useState } from 'react';
import { RECENT_PROJECTS } from '../data/craneData';
import { ProjectItem } from '../types';
import { MapPin, Truck, Camera, Check } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hvac' | 'construction' | 'industrial' | 'infrastructure'>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filterButtons = [
    { id: 'all', label: 'All Projects' },
    { id: 'hvac', label: 'Rooftop HVAC' },
    { id: 'construction', label: 'Structural Steel' },
    { id: 'industrial', label: 'Industrial Plants' },
    { id: 'infrastructure', label: 'Infrastructure' },
  ];

  const filteredProjects = filter === 'all'
    ? RECENT_PROJECTS
    : RECENT_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs uppercase tracking-wider rounded border border-amber-300">
              <Camera className="w-3.5 h-3.5 text-amber-700" />
              <span>Real Jobsite Photo Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 uppercase tracking-tight">
              Recent Crane & Rigging Projects
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore authentic jobsite captures of our mobile cranes and boom trucks executing precision lifts across New York City and metropolitan job sites.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                id={`gallery-filter-${btn.id}`}
                onClick={() => setFilter(btn.id as any)}
                className={`px-3.5 py-2 text-xs font-black uppercase tracking-wider rounded transition-all ${
                  filter === btn.id
                    ? 'bg-slate-950 text-amber-400 shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur text-amber-400 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{project.location}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h3 className="text-base font-black font-heading text-slate-900 uppercase group-hover:text-amber-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-800 font-bold">
                  <Truck className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  <span className="truncate">{project.craneUsed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
