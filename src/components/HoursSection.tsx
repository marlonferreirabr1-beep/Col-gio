import React, { useState, useEffect } from 'react';
import { Clock, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export const HoursSection: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    // Check Brazilian business hours (Mon-Fri 07:00 to 18:00 America/Sao_Paulo)
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        const brTimeStr = now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
        const brDate = new Date(brTimeStr);
        const day = brDate.getDay(); // 0 is Sunday, 6 is Saturday
        const hour = brDate.getHours();
        
        // Open Mon-Fri between 7am and 18pm
        const isWeekday = day >= 1 && day <= 5;
        const isBusinessHour = hour >= 7 && hour < 18;
        setIsOpenNow(isWeekday && isBusinessHour);
      } catch {
        setIsOpenNow(true);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const scheduleList = [
    { day: "Segunda-feira", hours: "07:00 – 18:00", open: true },
    { day: "Terça-feira", hours: "07:00 – 18:00", open: true },
    { day: "Quarta-feira", hours: "07:00 – 18:00", open: true },
    { day: "Quinta-feira", hours: "07:00 – 18:00", open: true },
    { day: "Sexta-feira", hours: "07:00 – 18:00", open: true },
    { day: "Sábado", hours: "Fechado", open: false },
    { day: "Domingo", hours: "Fechado", open: false },
  ];

  return (
    <section id="horarios" className="py-10 px-4 max-w-xl mx-auto space-y-5">
      {/* Section Header */}
      <div className="text-center space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>Atendimento & Secretaria</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Horário de Funcionamento
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Consulte os dias e horários para visitas e atendimento pedagógico.
        </p>
      </div>

      {/* Main Card with Live Status Badge and Timetable */}
      <div className="glass-panel rounded-2xl p-5 border border-amber-400/30 shadow-xl space-y-4">
        
        {/* Balãozinho avisando quando está aberto */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-blue-950 via-blue-900/50 to-blue-950 border border-white/10 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3.5 w-3.5">
              {isOpenNow ? (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 shadow-sm shadow-emerald-500/50"></span>
                </>
              ) : (
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400"></span>
              )}
            </span>
            <div>
              <p className="text-sm font-bold text-white leading-tight">
                {isOpenNow ? "Aberto agora" : "Fechado no momento"}
              </p>
              <p className="text-xs text-slate-300">
                {isOpenNow ? "Atendimento presencial e online até as 18:00" : "Abertura de segunda a sexta às 07:00"}
              </p>
            </div>
          </div>

          <span className={`text-xs font-bold px-3 py-1 rounded-full border shadow-sm ${
            isOpenNow 
              ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/40" 
              : "bg-amber-500/20 text-amber-300 border-amber-400/40"
          }`}>
            {isOpenNow ? "🟢 Aberto" : "🟡 Fechado"}
          </span>
        </div>

        {/* Detailed Hours Grid */}
        <div className="space-y-2 pt-1 text-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 pb-1">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Grade semanal de funcionamento:</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {scheduleList.map((item, idx) => (
              <div 
                key={idx}
                className={`flex items-center justify-between p-2.5 rounded-xl border transition-colors ${
                  item.open 
                    ? "bg-blue-900/30 border-white/10 hover:border-amber-400/30" 
                    : "bg-blue-950/40 border-white/5 opacity-70"
                }`}
              >
                <span className="text-slate-200 font-medium">{item.day}</span>
                <span className={`font-semibold ${item.open ? "text-amber-300" : "text-slate-400"}`}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Attention Highlights */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-950/60 border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Atendimento pedagógico com agendamento</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-950/60 border border-white/5">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Secretaria escolar disponível em horário integral</span>
          </div>
        </div>
      </div>
    </section>
  );
};
