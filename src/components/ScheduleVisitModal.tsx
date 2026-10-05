import React, { useState } from 'react';
import { SCHOOL_INFO, getWhatsAppDirectUrl } from '../data/schoolData';
import { ThreeDWhatsAppIcon } from './ThreeDIcons';
import { X, Calendar, Clock, User, Sparkles, CheckCircle2, MessageSquareText, Copy, Check } from 'lucide-react';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({ isOpen, onClose }) => {
  const [parentName, setParentName] = useState('');
  const [studentInfo, setStudentInfo] = useState('');
  const [segment, setSegment] = useState<'infantil' | 'fundamental'>('infantil');
  const [shift, setShift] = useState<'manha' | 'tarde'>('manha');
  const [preferredDate, setPreferredDate] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const segmentLabel = segment === 'infantil' ? 'Educação Infantil' : 'Ensino Fundamental 1';
  const shiftLabel = shift === 'manha' ? 'Manhã' : 'Tarde';

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

Gostaria de agendar uma visita pedagógica e obter informações sobre as Matrículas 2026:
• Ciclo: ${segmentLabel}
• Turno de preferência: ${shiftLabel}
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-gradient-to-b from-[#0a204d] via-[#061638] to-[#040e24] border border-amber-400/40 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-black text-slate-100 my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-900/60 text-slate-300 hover:text-white flex items-center justify-center border border-white/10 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Portas Abertas</span>
          </div>
          <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Agendar Visita Pedagógica
          </h3>
          <p className="text-xs text-slate-300">
            Preencha os campos abaixo. A mensagem já chegará pronta e digitada no WhatsApp da escola!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
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

          {/* Segment Selector */}
          <div>
            <label className="block font-semibold text-slate-200 mb-1">
              Ciclo de Ensino
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSegment('infantil')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                  segment === 'infantil'
                    ? 'bg-amber-400 text-blue-950 border-amber-300 shadow-sm'
                    : 'bg-blue-950/60 border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                Educação Infantil
              </button>
              <button
                type="button"
                onClick={() => setSegment('fundamental')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                  segment === 'fundamental'
                    ? 'bg-amber-400 text-blue-950 border-amber-300 shadow-sm'
                    : 'bg-blue-950/60 border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                Ensino Fundamental 1
              </button>
            </div>
          </div>

          {/* Shift Selector */}
          <div>
            <label className="block font-semibold text-slate-200 mb-1">
              Turno de Preferência
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setShift('manha')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-center gap-1.5 ${
                  shift === 'manha'
                    ? 'bg-blue-600 text-white border-blue-400 shadow-sm'
                    : 'bg-blue-950/60 border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Manhã</span>
              </button>
              <button
                type="button"
                onClick={() => setShift('tarde')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-center gap-1.5 ${
                  shift === 'tarde'
                    ? 'bg-blue-600 text-white border-blue-400 shadow-sm'
                    : 'bg-blue-950/60 border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Tarde</span>
              </button>
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

        <p className="text-[10px] text-center text-slate-400 mt-2.5 flex items-center justify-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>Atendimento direto com a coordenação pedagógica via WhatsApp Oficial</span>
        </p>
      </div>
    </div>
  );
};
