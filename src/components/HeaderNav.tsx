import React from 'react';
import { MessageCircle } from 'lucide-react';

interface HeaderNavProps {
  onOpenSchedule: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenSchedule }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#07173b]/90 border-b border-amber-400/20 shadow-lg shadow-black/25">
      <div className="max-w-xl mx-auto px-4 h-14 flex items-center justify-center">
        {/* Centered Action Button: Agendar Visita */}
        <button
          onClick={onOpenSchedule}
          className="px-6 py-2 rounded-2xl text-xs sm:text-sm font-bold text-blue-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-md shadow-amber-500/25 flex items-center gap-2 active:scale-95 cursor-pointer"
          aria-label="Agendar Visita ao Colégio"
        >
          <MessageCircle className="w-4 h-4 fill-blue-950 text-blue-950" />
          <span className="tracking-wide">Agendar Visita</span>
        </button>
      </div>
    </header>
  );
};
