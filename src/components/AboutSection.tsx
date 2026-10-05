import React, { useState } from 'react';
import { WHY_CHOOSE_US, SchoolFeature } from '../data/schoolData';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("ambiente-acolhedor");

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="sobre" className="py-10 px-4 max-w-xl mx-auto space-y-5">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <span>Excelência & Afeto</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
          Por que escolher o Colégio Santa Tereza das Rosas?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
          Uma proposta pedagógica estruturada para acolher cada fase do crescimento com segurança e amor.
        </p>
      </div>

      {/* 5 Modern Cards with 3D embossed icon badges */}
      <div className="space-y-3.5 pt-2">
        {WHY_CHOOSE_US.map((feature: SchoolFeature) => {
          const isExpanded = expandedId === feature.id;

          return (
            <div
              key={feature.id}
              className={`glass-card-interactive rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                isExpanded ? 'border-amber-400/50 shadow-amber-400/10 shadow-lg' : ''
              }`}
              onClick={() => toggleExpand(feature.id)}
            >
              <div className="p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 flex-1 min-w-0">
                  {/* 3D Embossed Icon Container */}
                  <div className="w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center text-2xl icon-box-3d bg-gradient-to-br from-blue-700/60 to-blue-950/80 border border-amber-400/30 shadow-md">
                    <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{feature.icon}</span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-1.5 truncate">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-300 truncate">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                {/* Expansion Chevron */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-blue-900/50 text-amber-300 border border-white/10 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-amber-400/20 text-amber-200' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-white/10 text-xs sm:text-sm text-slate-300 space-y-3 animate-in fade-in duration-200">
                  <p className="leading-relaxed text-slate-200">
                    {feature.description}
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    {feature.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
