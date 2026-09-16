/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutOverview } from './components/AboutOverview';
import { ServicesSection } from './components/ServicesSection';
import { FleetSection } from './components/FleetSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/craneData';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>();
  const [selectedTruckForQuote, setSelectedTruckForQuote] = useState<string | undefined>();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    scrollToSection('contact');
  };

  const handleSelectTruckForQuote = (truckName: string) => {
    setSelectedTruckForQuote(truckName);
    scrollToSection('contact');
  };

  const handleOpenQuote = () => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* WordPress Contractor Header with Dispatch Bar & Instagram Link (5 Menu items) */}
      <Header
        onNavigate={scrollToSection}
        onOpenQuote={handleOpenQuote}
      />

      <main className="flex-1">
        {/* 1. Hero with Real Crane Image & Quick Estimate Form */}
        <Hero
          onOpenQuote={handleOpenQuote}
          onExploreFleet={() => scrollToSection('fleet')}
        />

        {/* 2. About Section with Real RAS Crane Truck Image */}
        <AboutOverview
          onOpenQuote={handleOpenQuote}
        />

        {/* 3. Core Crane & Rigging Services Grid */}
        <ServicesSection
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* 4. Crane Fleet & Equipment Showcase */}
        <FleetSection
          onSelectTruckForQuote={handleSelectTruckForQuote}
        />

        {/* 5. Clean WordPress Contact & Lift Quote Section */}
        <ContactSection
          initialService={selectedServiceForQuote}
          initialTruck={selectedTruckForQuote}
        />
      </main>

      {/* WordPress Contractor Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenQuote={handleOpenQuote}
      />

      {/* Floating 24/7 Emergency Dispatch Button */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <a
          id="floating-emergency-dial"
          href={`tel:${COMPANY_INFO.emergencyPhone}`}
          className="group flex items-center gap-2 px-4 py-3 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 rounded-full shadow-2xl border-2 border-slate-950 font-black text-xs uppercase tracking-wider transition-all transform hover:scale-105"
          title="24/7 Rapid Emergency Dispatch"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span className="hidden sm:inline">24/7 Dispatch: {COMPANY_INFO.emergencyPhone}</span>
          <span className="sm:hidden">24/7 Dispatch</span>
        </a>
      </div>
    </div>
  );
}

