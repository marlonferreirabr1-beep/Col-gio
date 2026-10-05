import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { ThreeDGoogleMapsIcon } from './ThreeDIcons';
import { MapPin, Navigation, Copy, Check, Car, Shield } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("Colégio Santa Tereza das Rosas");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="localizacao" className="py-10 px-4 max-w-xl mx-auto space-y-5">
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Fácil Acesso & Segurança</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Nossa Localização
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Localização estratégica com área segura para embarque e desembarque dos alunos.
        </p>
      </div>

      {/* Modern Card with Map Graphic Preview & 3D Google Maps Badge */}
      <div className="glass-panel rounded-2xl overflow-hidden p-5 space-y-4 border border-blue-400/25">
        {/* Interactive Map Visual Graphic */}
        <div className="relative h-44 rounded-xl overflow-hidden border border-blue-400/20 bg-[#091b3e] flex items-center justify-center group">
          {/* Subtle stylized vector map grid lines */}
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Stylized route path */}
          <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20,140 Q 120,60 220,90 T 380,40" fill="none" stroke="#60a5fa" strokeWidth="4" strokeDasharray="6 6" />
            <path d="M 60,160 Q 180,120 280,100" fill="none" stroke="#f59e0b" strokeWidth="3" />
          </svg>

          {/* Central 3D Pin & Pulse */}
          <div className="relative flex flex-col items-center z-10">
            <span className="relative flex h-14 w-14 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-30"></span>
              <ThreeDGoogleMapsIcon size={48} className="transform hover:scale-110 cursor-pointer shadow-xl" />
            </span>
            <div className="mt-2 px-3 py-1 rounded-full bg-blue-950/90 border border-amber-400/40 text-[11px] font-bold text-amber-300 shadow-md">
              Colégio Santa Tereza das Rosas
            </div>
          </div>

          {/* Map corner badge */}
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-blue-950/80 backdrop-blur-sm border border-white/10 text-[10px] text-slate-300">
            Google Maps
          </div>
        </div>

        {/* Location Amenities */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-blue-900/30 border border-white/5 flex items-center gap-2 text-slate-300">
            <Car className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="truncate">Área de embarque assistido</span>
          </div>
          <div className="p-2.5 rounded-xl bg-blue-900/30 border border-white/5 flex items-center gap-2 text-slate-300">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">Portaria monitorada</span>
          </div>
        </div>

        {/* Copy Address Action */}
        <div className="pt-1 flex items-center justify-between text-xs text-slate-300 bg-blue-950/60 p-2.5 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 truncate">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-medium text-white truncate">Colégio Santa Tereza das Rosas</span>
          </div>
          <button
            onClick={handleCopyAddress}
            className="px-2.5 py-1 rounded-lg bg-blue-800/80 hover:bg-blue-700 text-amber-300 text-[11px] font-semibold flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Button: 📍 Como chegar ao colégio */}
      <a
        href={SCHOOL_INFO.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 px-6 rounded-2xl btn-3d-maps flex items-center justify-between gap-4 transition-transform cursor-pointer group"
        aria-label="Abrir rota no Google Maps"
      >
        <div className="flex items-center gap-3.5">
          <ThreeDGoogleMapsIcon size={42} className="group-hover:scale-110" />
          <div className="text-left">
            <p className="text-base sm:text-lg font-bold text-white tracking-wide leading-tight">
              📍 Como chegar ao colégio
            </p>
            <p className="text-xs text-blue-200">
              Traçar rota no Google Maps ou Waze
            </p>
          </div>
        </div>

        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 group-hover:translate-x-1 transition-transform">
          <Navigation className="w-4 h-4" />
        </div>
      </a>
    </section>
  );
};
