import React, { useRef, useState, useEffect } from 'react';
import { SCHOOL_INFO, SCHOOL_PHOTOS } from '../data/schoolData';
import { ThreeDWhatsAppIcon } from './ThreeDIcons';
import { Sparkles, ChevronDown, ChevronLeft, ChevronRight, Camera, MoveHorizontal } from 'lucide-react';

interface HeroSectionProps {
  onFaleConosco: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onFaleConosco }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update current indicator based on scroll position
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    if (clientWidth > 0) {
      const idx = Math.round(scrollLeft / clientWidth);
      setCurrentIndex(Math.min(Math.max(idx, 0), SCHOOL_PHOTOS.length - 1));
    }
  };

  const scrollToIndex = (idx: number) => {
    if (!scrollRef.current) return;
    const targetLeft = idx * scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({ left: targetLeft, behavior: 'smooth' });
    setCurrentIndex(idx);
  };

  const handlePrev = () => {
    scrollToIndex(Math.max(currentIndex - 1, 0));
  };

  const handleNext = () => {
    scrollToIndex(Math.min(currentIndex + 1, SCHOOL_PHOTOS.length - 1));
  };

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
          Matrículas 2027 Abertas · Vagas Limitadas
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

      {/* Carrossel: Conheça nosso colégio (Fotos reais em sequência) */}
      <div className="w-full max-w-md mx-auto mt-5 mb-4 text-left">
        {/* Header do Carrossel */}
        <div className="flex items-center justify-between px-1 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-300 flex items-center justify-center">
              <Camera className="w-4 h-4 text-amber-400" />
            </span>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
                Conheça nosso colégio
              </h2>
              <p className="text-[11px] text-slate-300 flex items-center gap-1">
                <span>Deslize para ver as fotos</span>
                <MoveHorizontal className="w-3 h-3 text-amber-400 inline" />
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-semibold text-amber-300 bg-blue-950/80 px-2.5 py-1 rounded-full border border-amber-400/30">
            <span>{currentIndex + 1}</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-400">{SCHOOL_PHOTOS.length}</span>
          </div>
        </div>

        {/* Carrossel Container com Snap Horizontal */}
        <div className="relative rounded-2xl overflow-hidden border border-amber-400/35 bg-blue-950/70 shadow-2xl shadow-black/80 group">
          {/* Track Horizontal */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth touch-pan-x"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {SCHOOL_PHOTOS.map((photo, index) => (
              <div
                key={photo.id}
                className="w-full shrink-0 snap-center snap-always flex flex-col items-center justify-center bg-[#05112a]"
              >
                {/* Imagem em tamanho real mantendo suas proporções completas */}
                <div className="w-full flex items-center justify-center bg-black/40">
                  <img
                    src={photo.url}
                    alt={`Foto ${index + 1} do Colégio Santa Tereza das Rosas`}
                    className="w-full h-auto max-h-[540px] object-contain select-none"
                    referrerPolicy="no-referrer"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Botões de Navegação Lateral (Desktop / Tablets / Mobile Touch) */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 -translate-y-8 w-9 h-9 rounded-full bg-blue-950/85 hover:bg-amber-400 text-white hover:text-blue-950 border border-amber-400/40 flex items-center justify-center transition-all shadow-lg active:scale-90 cursor-pointer backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {currentIndex < SCHOOL_PHOTOS.length - 1 && (
            <button
              onClick={handleNext}
              aria-label="Próxima foto"
              className="absolute right-2 top-1/2 -translate-y-8 w-9 h-9 rounded-full bg-blue-950/85 hover:bg-amber-400 text-white hover:text-blue-950 border border-amber-400/40 flex items-center justify-center transition-all shadow-lg active:scale-90 cursor-pointer backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Indicadores de bolinhas clicáveis */}
        <div className="flex items-center justify-center gap-1.5 mt-2.5">
          {SCHOOL_PHOTOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir para foto ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 bg-amber-400 shadow-sm shadow-amber-400/50'
                  : 'w-2 bg-blue-800/80 hover:bg-blue-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA Button: Fale Conosco posicionado LOGO ABAIXO do carrossel */}
      <div className="w-full max-w-sm mx-auto space-y-4 pt-1">
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
