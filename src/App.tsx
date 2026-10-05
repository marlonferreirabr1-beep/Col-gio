/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { InstagramSection } from './components/InstagramSection';
import { HoursSection } from './components/HoursSection';
import { LocationSection } from './components/LocationSection';
import { GoogleReviewSection } from './components/GoogleReviewSection';
import { FooterSection } from './components/FooterSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScheduleVisitModal } from './components/ScheduleVisitModal';
import { SCHOOL_INFO } from './data/schoolData';

export default function App() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const handleFaleConosco = () => {
    // Open WhatsApp directly with initial welcoming inquiry
    window.open(SCHOOL_INFO.whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#040e24] text-slate-100 relative overflow-x-hidden selection:bg-amber-400 selection:text-blue-950">
      {/* Ambient background gradients and light orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[700px] bg-gradient-to-b from-blue-700/20 via-blue-900/10 to-transparent blur-3xl" />
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px]" />
        
        {/* Subtle geometric luxury pattern grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-40" />
      </div>

      {/* Main Responsive Mobile App Container */}
      <div className="relative z-10 w-full max-w-xl mx-auto min-h-screen flex flex-col bg-gradient-to-b from-[#071638] via-[#05112a] to-[#030a1b] shadow-[0_0_60px_rgba(0,0,0,0.85)] border-x border-amber-400/15">
        
        {/* Top App Bar */}
        <HeaderNav onOpenSchedule={() => setIsScheduleOpen(true)} />

        {/* Vertical Flow Content / Modern Mobile Experience */}
        <main className="flex-1 pb-10">
          {/* Tela Inicial (Hero) */}
          <HeroSection onFaleConosco={handleFaleConosco} />

          {/* Seção 1 - Sobre o Colégio */}
          <AboutSection />

          {/* Seção 2 - Instagram */}
          <InstagramSection />

          {/* Seção 3 - Horários de Atendimento com aviso Aberto/Fechado */}
          <HoursSection />

          {/* Seção 4 - Localização */}
          <LocationSection />

          {/* Seção 5 - Avaliação Google */}
          <GoogleReviewSection />
        </main>

        {/* Rodapé Elegante */}
        <FooterSection onOpenSchedule={() => setIsScheduleOpen(true)} />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Modal: Agendar Visita Pedagógica */}
        <ScheduleVisitModal
          isOpen={isScheduleOpen}
          onClose={() => setIsScheduleOpen(false)}
        />
      </div>
    </div>
  );
}
