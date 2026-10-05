import React, { useState } from 'react';
import { SCHOOL_INFO, TESTIMONIALS } from '../data/schoolData';
import { ThreeDGoogleIcon, ThreeDStar } from './ThreeDIcons';
import { ChevronLeft, ChevronRight, Quote, ShieldCheck, Heart } from 'lucide-react';

export const GoogleReviewSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeTestimonial];

  return (
    <section id="avaliacoes" className="py-10 px-4 max-w-xl mx-auto space-y-5">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>A Opinião das Famílias</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Confiança que se Constrói Juntos
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Veja o depoimento de mães e pais que vivenciam o dia a dia do Colégio Santa Tereza das Rosas.
        </p>
      </div>

      {/* Trust Scoreboard Card with 3D Google Logo & Stars */}
      <div className="glass-panel rounded-2xl p-5 border border-amber-400/30 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <ThreeDGoogleIcon size={44} />
            <div>
              <p className="text-sm font-bold text-white flex items-center gap-1.5">
                Google Avaliações
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  Verificado
                </span>
              </p>
              <p className="text-xs text-slate-300">Nota máxima concedida pelos pais</p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xl font-black text-amber-300 tabular-nums">5.0</div>
            <div className="flex items-center gap-0.5 justify-end">
              {[...Array(5)].map((_, i) => (
                <ThreeDStar key={i} className="w-3.5 h-3.5" />
              ))}
            </div>
          </div>
        </div>

        {/* Featured Testimonial Slider */}
        <div className="relative bg-blue-950/60 rounded-xl p-4 border border-white/10 shadow-inner">
          <Quote className="w-6 h-6 text-amber-400/30 absolute top-3 right-3 pointer-events-none" />
          
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <ThreeDStar key={i} className="w-3.5 h-3.5" />
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
              "{current.comment}"
            </p>

            <div className="pt-2 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">{current.author}</p>
                <p className="text-[11px] text-amber-300/80">{current.role}</p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevTestimonial}
                  aria-label="Depoimento anterior"
                  className="w-7 h-7 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Próximo depoimento"
                  className="w-7 h-7 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Review Callout Box */}
        <div className="text-center pt-1 space-y-1">
          <p className="text-sm font-semibold text-white">
            Avalie nossa escola no Google
          </p>
          <div className="flex items-center justify-center gap-1 text-amber-300 py-0.5">
            {[...Array(5)].map((_, i) => (
              <ThreeDStar key={i} className="w-4 h-4" />
            ))}
          </div>
          <p className="text-xs text-slate-300">
            Sua avaliação ajuda outras famílias a conhecerem nossa proposta pedagógica e acolhimento.
          </p>
        </div>

        {/* Main Review Button: ⭐ Deixar avaliação */}
        <a
          href={SCHOOL_INFO.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-6 rounded-xl btn-3d-google flex items-center justify-center gap-3 transition-transform cursor-pointer group text-slate-900"
          aria-label="Deixar avaliação no Google"
        >
          <span className="text-amber-500 text-lg group-hover:scale-125 transition-transform">⭐</span>
          <span className="text-sm sm:text-base font-bold tracking-tight">
            Deixar avaliação
          </span>
        </a>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
        <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/40" />
        <span>Obrigado a cada família pela confiança diária!</span>
      </div>
    </section>
  );
};
