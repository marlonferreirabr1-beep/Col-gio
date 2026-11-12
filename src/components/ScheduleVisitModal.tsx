import React, { useState } from 'react';
import { SCHOOL_INFO, getWhatsAppDirectUrl } from '../data/schoolData';
import { ThreeDWhatsAppIcon } from './ThreeDIcons';
import { X, Calendar, Clock, User, Sparkles, CheckCircle2, MessageSquareText, Copy, Check, GraduationCap, ChevronDown } from 'lucide-react';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EDUCATION_LEVELS = [
  { id: 'socializacao-2', label: 'Socialização / 2 anos', group: 'Educação Infantil' },
  { id: 'periodo-1-3', label: '1º Período / 3 anos', group: 'Educação Infantil' },
  { id: 'periodo-2-4', label: '2º Período / 4 anos', group: 'Educação Infantil' },
  { id: 'periodo-3-5', label: '3º Período / 5 anos', group: 'Educação Infantil' },
  { id: 'ano-1-6', label: '1º Ano / 6 anos', group: 'Ensino Fundamental 1' },
  { id: 'ano-2-7', label: '2º Ano / 7 anos', group: 'Ensino Fundamental 1' },
  { id: 'ano-3-8', label: '3º Ano / 8 anos', group: 'Ensino Fundamental 1' },
  { id: 'ano-4-9', label: '4º Ano / 9 anos', group: 'Ensino Fundamental 1' },
  { id: 'ano-5-10', label: '5º Ano / 10 anos', group: 'Ensino Fundamental 1' },
];

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({ isOpen, onClose }) => {
  const [parentName, setParentName] = useState('');
  const [studentInfo, setStudentInfo] = useState('');
  const [selectedLevelId, setSelectedLevelId] = useState('socializacao-2');
  const [isLevelMenuOpen, setIsLevelMenuOpen] = useState(false);
  const [preferredDate, setPreferredDate] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentLevel = EDUCATION_LEVELS.find(l => l.id === selectedLevelId) || EDUCATION_LEVELS[0];

  // Format date nicely if selected
  const formattedDate = preferredDate
    ? new Date(preferredDate + 'T00:00:00').toLocaleDateString('pt-BR')
    : 'A combinar';

  // Professional draft message generated dynamically
  const parentGreeting = parentName.trim()
    ? `Meu nome é ${parentName.trim()}.`
    : `Sou responsável por um(a) futuro(a) aluno(a).`;

  const childPhrase = studentInfo.trim()
    ? ` Tenho interesse em conhecer a escola para ${studentInfo.trim()}.`
    : ` Tenho interesse em conhecer a proposta pedagógica e instalações da escola para meu filho(a).`;

  const dynamicMessage =
`Olá, equipe do Colégio Santa Tereza das Rosas! 🌟

${parentGreeting}${childPhrase}

Gostaria de agendar uma visita pedagógica e obter informações sobre as Matrículas 2027:
• Turma / Ciclo: ${currentLevel.label} (${currentLevel.group})
• Turno: Tarde (Vespertino)
• Data sugerida para visita: ${formattedDate}

Poderiam me informar os horários disponíveis para nos receber? Agradeço desde já pela atenção!`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Directly target the official WhatsApp API URL with the phone number and formatted message
    const directUrl = getWhatsAppDirectUrl(dynamicMessage);
    window.open(directUrl, '_blank');
    onClose();
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(dynamicMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectLevel = (levelId: string) => {
    setSelectedLevelId(levelId);
    setIsLevelMenuOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-gradient-to-b from-[#0a204d] via-[#061638] to-[#040e24] border border-amber-400/40 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-black text-slate-100 my-auto max-h-[94vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-900/60 text-slate-300 hover:text-white flex items-center justify-center border border-white/10 cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1 mb-3 shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Portas Abertas</span>
          </div>
          <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Agendar Visita Pedagógica
          </h3>
          <p className="text-xs text-slate-300">
            Selecione a turma de interesse e confirme direto pelo WhatsApp oficial.
          </p>
        </div>

        {/* Form com Scrollbar suave */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs overflow-y-auto pr-1">
          <div>
            <label className="block font-semibold text-slate-200 mb-1">
              Nome do Responsável
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-amber-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Ex: Mariana Vasconcellos"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                className="w-full bg-blue-950/80 border border-blue-400/30 rounded-xl py-2.5 pl-9 pr-3 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-200 mb-1">
                Nome e idade do(a) filho(a)
              </label>
              <input
                type="text"
                placeholder="Ex: Alice (4 anos)"
                value={studentInfo}
                onChange={(e) => setStudentInfo(e.target.value)}
                className="w-full bg-blue-950/80 border border-blue-400/30 rounded-xl py-2.5 px-3 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-200 mb-1">
                Data pretendida (opcional)
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-amber-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-blue-950/80 border border-blue-400/30 rounded-xl py-2.5 pl-9 pr-2 text-white focus:outline-none focus:border-amber-400 text-xs [color-scheme:dark]"
                />
              </div>
            </div>
          </div>

          {/* Ciclo / Turma de Ensino - Dropdown Acordeão com Setinha */}
          <div>
            <label className="block font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Ciclo de Ensino / Turma</span>
            </label>

            {/* Botão com Setinha para abrir/fechar as opções */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLevelMenuOpen(!isLevelMenuOpen)}
                className={`w-full py-2.5 px-3.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between gap-2 ${
                  isLevelMenuOpen
                    ? 'bg-blue-900/80 border-amber-400 text-white shadow-md shadow-amber-400/10'
                    : 'bg-blue-950/80 border-blue-400/30 text-white hover:border-amber-400/50 hover:bg-blue-900/40'
                }`}
                aria-expanded={isLevelMenuOpen}
                aria-label="Abrir opções de Ciclo de Ensino / Turma"
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span className="font-bold text-amber-300 truncate">
                    {currentLevel.label}
                  </span>
                  <span className="text-[10px] text-slate-300 font-normal truncate hidden sm:inline">
                    · {currentLevel.group}
                  </span>
                </div>

                {/* Setinha animada que gira ao abrir */}
                <div className={`w-6 h-6 rounded-lg bg-blue-950/80 flex items-center justify-center text-amber-300 border border-white/10 shrink-0 transition-transform duration-200 ${isLevelMenuOpen ? 'rotate-180 text-amber-400 bg-amber-400/20' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Lista suspensa de opções revelada ao apertar na setinha */}
              {isLevelMenuOpen && (
                <div className="mt-1.5 p-1.5 rounded-2xl bg-[#05112a] border border-amber-400/40 shadow-2xl space-y-1 animate-in fade-in zoom-in-95 duration-150 z-20">
                  <div className="px-2.5 py-1 text-[10px] uppercase font-bold text-amber-400/80 tracking-wider">
                    Selecione a turma desejada:
                  </div>

                  <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                    {EDUCATION_LEVELS.map((lvl) => {
                      const isSelected = selectedLevelId === lvl.id;
                      return (
                        <button
                          key={lvl.id}
                          type="button"
                          onClick={() => handleSelectLevel(lvl.id)}
                          className={`w-full p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all text-left flex items-center justify-between gap-2 ${
                            isSelected
                              ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-blue-950 border-amber-300 shadow-md font-bold'
                              : 'bg-blue-950/60 border-white/5 text-slate-200 hover:text-white hover:border-amber-400/40 hover:bg-blue-900/60'
                          }`}
                        >
                          <div className="flex flex-col">
                            <span className="font-semibold">{lvl.label}</span>
                            <span className={`text-[10px] ${isSelected ? 'text-blue-950/80 font-medium' : 'text-slate-400'}`}>
                              {lvl.group}
                            </span>
                          </div>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-blue-950 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Turno - Somente Tarde (Vespertino) */}
          <div>
            <label className="block font-semibold text-slate-200 mb-1">
              Turno de Funcionamento
            </label>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-900/50 border border-amber-400/30 text-slate-100">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="flex items-center justify-between w-full">
                <span className="font-semibold text-xs">Turno da Tarde (Vespertino)</span>
                <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-md font-medium border border-amber-400/30">
                  Horário Oficial: 13:00 às 17:30
                </span>
              </div>
            </div>
          </div>

          {/* Live Draft Preview Box */}
          <div className="p-3 rounded-xl bg-blue-950/90 border border-emerald-500/30 text-[11px] space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
                <MessageSquareText className="w-3.5 h-3.5" />
                <span>Rascunho que chegará pronto no WhatsApp:</span>
              </div>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="text-[10px] text-amber-300 hover:text-amber-200 flex items-center gap-1 px-2 py-0.5 rounded bg-blue-900/50 border border-amber-400/20 cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>
            <div className="bg-black/40 p-2.5 rounded-lg text-slate-100 whitespace-pre-line font-mono text-[10.5px] leading-relaxed border border-white/5">
              {dynamicMessage}
            </div>
          </div>

          {/* Submit Button with Official WhatsApp Logo */}
          <button
            type="submit"
            className="w-full py-4 px-4 rounded-xl btn-3d-whatsapp flex items-center justify-center gap-3 font-bold text-sm sm:text-base cursor-pointer shadow-lg active:scale-98 transition-transform text-white"
          >
            <ThreeDWhatsAppIcon size={28} />
            <span>Enviar e Confirmar no WhatsApp</span>
          </button>
        </form>

        <p className="text-[10px] text-center text-slate-400 mt-2 shrink-0 flex items-center justify-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>Atendimento direto com a coordenação pedagógica via WhatsApp Oficial</span>
        </p>
      </div>
    </div>
  );
};
