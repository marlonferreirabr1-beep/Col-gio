import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { ThreeDWhatsAppIcon, ThreeDInstagramIcon, ThreeDGoogleMapsIcon } from './ThreeDIcons';
import { ArrowUp, Heart, Phone, Mail } from 'lucide-react';

interface FooterSectionProps {
  onOpenSchedule: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenSchedule }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-16 pt-12 pb-24 px-5 bg-gradient-to-b from-[#06122c] via-[#040c1e] to-[#020611] border-t border-amber-400/25">
      <div className="max-w-xl mx-auto text-center space-y-6">
        {/* Logo and Crest in footer */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400/50 bg-blue-950 p-1 shadow-lg shadow-amber-400/20 mb-3">
            <img 
              src={SCHOOL_INFO.logoUrl} 
              alt="Logo Colégio Santa Tereza das Rosas" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {SCHOOL_INFO.name}
          </h3>
          <p className="text-xs font-semibold text-amber-300 tracking-wider uppercase mt-1">
            {SCHOOL_INFO.segments}
          </p>
        </div>

        {/* Highlight Quote */}
        <div className="max-w-md mx-auto py-2">
          <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
            "{SCHOOL_INFO.footerQuote}"
          </p>
        </div>

        {/* Social Icons row with 3D buttons */}
        <div className="flex items-center justify-center gap-4 py-2">
          <a
            href={SCHOOL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 active:scale-95 transition-transform"
            aria-label="WhatsApp Oficial do Colégio"
          >
            <ThreeDWhatsAppIcon size={42} />
          </a>

          <a
            href={SCHOOL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 active:scale-95 transition-transform"
            aria-label="Instagram Oficial do Colégio"
          >
            <ThreeDInstagramIcon size={42} />
          </a>

          <a
            href={SCHOOL_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 active:scale-95 transition-transform"
            aria-label="Localização no Google Maps"
          >
            <ThreeDGoogleMapsIcon size={42} />
          </a>
        </div>

        {/* Quick Contact & Visit Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenSchedule}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-blue-950 font-bold text-xs shadow-md shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Agendar Visita às Instalações</span>
          </button>
        </div>

        {/* Back to top button */}
        <div className="pt-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-amber-300/80 hover:text-amber-300 transition-colors cursor-pointer py-1 px-3 rounded-full bg-blue-900/40 border border-white/10"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Voltar ao topo</span>
          </button>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 border-t border-white/5 space-y-1">
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} {SCHOOL_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-slate-300 flex items-center justify-center gap-1">
            <span>Educação com Amor & Excelência</span>
            <Heart className="w-3 h-3 text-amber-400 fill-amber-400" />
          </p>
        </div>
      </div>
    </footer>
  );
};
