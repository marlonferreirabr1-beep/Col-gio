import React from 'react';
import { SCHOOL_INFO, INSTAGRAM_HIGHLIGHTS } from '../data/schoolData';
import { ThreeDInstagramIcon } from './ThreeDIcons';
import { ExternalLink, Camera, Sparkles } from 'lucide-react';

const ACTIVITIES_IMG = "/src/assets/images/escola_atividades_1791219254079.jpg";

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-10 px-4 max-w-xl mx-auto space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-300 uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Rede Social Oficial</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Instagram do Colégio
          </h2>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/30 font-medium">
          @colegiosantaterezadasrosas
        </span>
      </div>

      {/* Routine Image Card & Stories Teaser */}
      <div className="relative rounded-2xl overflow-hidden border border-rose-500/25 shadow-xl shadow-black/40 group">
        <img
          src={ACTIVITIES_IMG}
          alt="Rotina de aprendizado e desenvolvimento no Colégio Santa Tereza das Rosas"
          className="w-full h-44 sm:h-52 object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06122c] via-[#06122c]/50 to-transparent flex flex-col justify-end p-4">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
              Acompanhe o Dia a Dia dos Alunos
            </p>
          </div>
          <p className="text-xs text-slate-200">
            Fotos, vídeos das atividades pedagógicas, datas comemorativas, projetos de ciências e momentos de pura alegria escolar.
          </p>
        </div>
      </div>

      {/* Interactive Highlights Preview */}
      <div className="grid grid-cols-2 gap-2.5">
        {INSTAGRAM_HIGHLIGHTS.map((item, index) => (
          <div 
            key={index}
            className="p-3 rounded-xl bg-gradient-to-br from-blue-950/70 to-blue-900/40 border border-white/10 hover:border-rose-400/40 transition-colors shadow-sm"
          >
            <div className="text-xl mb-1">{item.emoji}</div>
            <p className="text-xs font-semibold text-white">{item.tag}</p>
            <p className="text-[11px] text-slate-300 line-clamp-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Main 3D Instagram Button */}
      <a
        href={SCHOOL_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 px-6 rounded-2xl btn-3d-instagram flex items-center justify-between gap-4 transition-transform cursor-pointer group"
      >
        <div className="flex items-center gap-3.5">
          {/* 3D High Relief Instagram Icon with shine */}
          <ThreeDInstagramIcon size={44} className="group-hover:scale-110" />
          <div className="text-left">
            <p className="text-sm sm:text-base font-bold text-white tracking-wide leading-tight drop-shadow-sm">
              Conheça nossa rotina escolar
            </p>
            <p className="text-xs text-rose-100 font-normal">
              Acesse fotos, vídeos e publicações diárias
            </p>
          </div>
        </div>

        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 group-hover:translate-x-1 transition-transform">
          <ExternalLink className="w-4 h-4" />
        </div>
      </a>
    </section>
  );
};
