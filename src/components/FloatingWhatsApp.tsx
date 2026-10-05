import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { ThreeDWhatsAppIcon } from './ThreeDIcons';
import { X, MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Atendimento Rápido" className="fixed bottom-5 right-4 z-50 flex flex-col items-end">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="relative mb-2.5 max-w-[230px] p-3 rounded-2xl bg-blue-950/95 border border-amber-400/40 text-left shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-2 fade-in duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Fechar aviso"
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-white/20 text-xs shadow cursor-pointer"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Secretaria Online</span>
          </div>
          <p className="text-[11px] text-slate-200 leading-tight">
            Tire dúvidas sobre matrículas e agende uma visita agora mesmo!
          </p>
        </div>
      )}

      {/* Floating 3D Button with Pulse Ring */}
      <a
        href={SCHOOL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp do Colégio"
        className="relative group p-1 flex items-center justify-center cursor-pointer"
      >
        {/* Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-60 animate-ping pointer-events-none" />
        
        {/* Unread Message Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-blue-950 text-[10px] font-black flex items-center justify-center shadow-md border-2 border-blue-950 z-20">
          1
        </span>

        {/* 3D Button */}
        <div className="transform group-hover:scale-110 active:scale-95 transition-transform duration-200">
          <ThreeDWhatsAppIcon size={56} className="shadow-[0_10px_25px_rgba(37,211,102,0.5)]" />
        </div>
      </a>
    </aside>
  );
};
