import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { ThreeDGoogleMapsIcon } from './ThreeDIcons';
import { MapPin, Navigation, Car, Shield, ExternalLink } from 'lucide-react';

const MAP_SCREENSHOT_IMG = "https://i.postimg.cc/639wNw82/Screenshot-20261005-163542-Maps.png";

export const LocationSection: React.FC = () => {
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

      {/* Modern Card with Google Maps Real Image & 3D Pulsing Pin */}
      <div className="glass-panel rounded-2xl overflow-hidden p-4 sm:p-5 space-y-4 border border-blue-400/25 shadow-xl">
        {/* Real Map Image Container with 3D Pulsing Red Marker */}
        <a
          href={SCHOOL_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block rounded-xl overflow-hidden border border-blue-400/30 bg-[#091b3e] shadow-lg group cursor-pointer aspect-[1080/704] w-full"
          title="Abrir no Google Maps"
        >
          {/* Official Maps Screenshot */}
          <img
            src={MAP_SCREENSHOT_IMG}
            alt="Localização no Google Maps - Colégio Santa Tereza das Rosas"
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />

          {/* 3D Pulsing Red Pin Effect positioned directly on the red map pin */}
          <div className="absolute top-[47.7%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col items-center">
            {/* Multiple expanding radar pulses */}
            <span className="relative flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 duration-1000"></span>
              <span className="animate-pulse absolute inline-flex h-8 w-8 rounded-full bg-red-500/40 blur-sm"></span>
              
              {/* 3D High-Relief Red Pin Marker */}
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-rose-400 via-red-600 to-red-800 shadow-[0_8px_16px_rgba(239,68,68,0.7),inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.5)] border-2 border-white flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <div className="absolute top-0.5 left-1 right-1 h-2.5 rounded-t-full bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)] fill-white" />
              </div>
            </span>
          </div>

          {/* Top Corner Map Badge */}
          <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-blue-950/90 backdrop-blur-md border border-white/20 text-[11px] text-slate-200 font-medium flex items-center gap-1.5 shadow-md">
            <span>Google Maps</span>
            <ExternalLink className="w-3 h-3 text-amber-300" />
          </div>
        </a>

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
      </div>

      {/* Main Button: 📍 Como chegar ao colégio */}
      <a
        href={SCHOOL_INFO.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 px-6 rounded-2xl btn-3d-maps flex items-center justify-between gap-4 transition-transform cursor-pointer group shadow-xl"
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
