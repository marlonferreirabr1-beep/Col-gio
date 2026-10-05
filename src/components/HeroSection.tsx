import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { ThreeDWhatsAppIcon } from './ThreeDIcons';
import { Sparkles, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onFaleConosco: () => void;
}

const INSTAGRAM_BANNER_IMG = "https://i.postimg.cc/gkrLd0m7/Screenshot-20261005-134043-Instagram.png";

export const HeroSection: React.FC<HeroSectionProps> = ({ onFaleConosco }) => {
  return (
    <section 
      id="inicio"
      className="relative flex flex-col items-center justify-between text-center pt-6 pb-8 px-4 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-44 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Trust pill */}
      <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-amber-400/30 backdrop-blur-md shadow-sm mb-3">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span className="text-xs font-semibold tracking-wide text-amber-200">
          Matrículas 2026 Abertas · Vagas Limitadas
        </span>
      </div>

      {/* Main Logo Container - Large, Crisp, High Fidelity */}
      <div className="relative my-2 w-full flex flex-col items-center justify-center">
        {/* Soft Radial Backlight */}
        <div className="absolute inset-0 bg-radial from-amber-400/25 via-blue-600/15 to-transparent blur-3xl transform scale-125 pointer-events-none" />

        {/* 3D High Relief Logo Frame */}
        <div className="relative group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
          <div className="relative p-2 sm:p-4 rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_40px_rgba(245,158,11,0.2)]">
            <img
              src={SCHOOL_INFO.logoUrl}
              alt="Logo Oficial do Colégio Santa Tereza das Rosas"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] drop-shadow-[0_0_20px_rgba(251,191,36,0.35)] select-none"
              style={{
                imageRendering: 'auto',
                WebkitFontSmoothing: 'antialiased',
              }}
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Typography: School Name and Segment */}
      <div className="space-y-2.5 max-w-md mx-auto my-3">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-amber-200 tracking-tight leading-snug drop-shadow-sm">
          {SCHOOL_INFO.name}
        </h1>

        <div className="flex items-center justify-center gap-2">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-amber-400/80" />
          <p className="text-xs sm:text-sm font-semibold text-amber-300 tracking-wider uppercase">
            {SCHOOL_INFO.segments}
          </p>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-amber-400/80" />
        </div>

        {/* Frase Principal Atualizada */}
        <div className="pt-2 px-5 py-2.5 bg-blue-950/50 border border-amber-400/30 rounded-2xl shadow-inner inline-block">
          <p className="text-sm sm:text-base text-amber-300 font-semibold tracking-wide drop-shadow-sm">
            {SCHOOL_INFO.motto}
          </p>
        </div>
      </div>

      {/* Imagem de Matrículas Abertas */}
      <div className="w-full max-w-md mx-auto mt-4 mb-4">
        <div className="relative rounded-2xl overflow-hidden border border-amber-400/35 bg-blue-950/60 shadow-2xl shadow-black/70 group">
          <img
            src={INSTAGRAM_BANNER_IMG}
            alt="Matrículas Abertas - Colégio Santa Tereza das Rosas"
            className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
        </div>
      </div>

      {/* CTA Button: Fale Conosco posicionado LOGO ABAIXO da imagem */}
      <div className="w-full max-w-sm mx-auto space-y-4">
        <button
          onClick={onFaleConosco}
          className="w-full py-4 px-6 rounded-2xl text-base sm:text-lg font-bold text-blue-950 btn-3d-gold flex items-center justify-center gap-3 transition-transform cursor-pointer group shadow-xl"
          aria-label="Fale conosco pelo WhatsApp"
        >
          {/* Logo oficial do WhatsApp */}
          <ThreeDWhatsAppIcon size={32} className="group-hover:scale-110" />
          <span className="tracking-wide">Fale conosco</span>
        </button>

        {/* Scroll indicator affordance */}
        <a 
          href="#sobre" 
          className="inline-flex flex-col items-center text-xs text-slate-400 hover:text-amber-300 transition-colors pt-2 group"
        >
          <span>Conheça nossa proposta pedagógica</span>
          <ChevronDown className="w-4 h-4 mt-1 text-amber-400/80 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
