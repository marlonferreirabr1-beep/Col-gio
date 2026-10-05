import React from 'react';

export const ThreeDWhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = "" }) => (
  <div 
    style={{ width: size, height: size }}
    className={`relative shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#38e878] via-[#25D366] to-[#128C7E] shadow-[0_8px_16px_rgba(37,211,102,0.4),inset_0_2px_2px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.3)] border border-emerald-300/40 transform transition-transform ${className}`}
  >
    {/* Specular highlight */}
    <div className="absolute top-1 left-1.5 right-1.5 h-1/3 rounded-t-xl bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
    <svg 
      className="w-3/5 h-3/5 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.83.491 3.548 1.346 5.034L2 22l5.086-1.334a10.005 10.005 0 0 0 4.945 1.365c5.536 0 10.031-4.495 10.031-10.031C22.062 6.495 17.567 2 12.031 2Zm5.789 14.281c-.244.686-1.22 1.258-1.745 1.34-.524.083-1.205.12-1.94-.116-.445-.143-1.018-.335-1.758-.654-3.111-1.34-5.132-4.502-5.288-4.708-.155-.207-1.265-1.684-1.265-3.213 0-1.528.802-2.28 1.087-2.59.285-.31.62-.387.828-.387.206 0 .413.002.595.011.192.01.448-.073.7.534.263.636.897 2.189.975 2.348.077.16.13.348.026.554-.104.207-.156.335-.31.516-.155.18-.327.404-.467.543-.156.155-.318.324-.137.635.18.31.804 1.326 1.724 2.146 1.184 1.055 2.181 1.382 2.492 1.537.31.155.492.13.673-.078.18-.207.777-.905.984-1.215.207-.31.414-.259.698-.155.284.103 1.809.853 2.119 1.008.31.155.517.232.595.362.077.13.077.75-.167 1.436Z"/>
    </svg>
  </div>
);

export const ThreeDInstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = "" }) => (
  <div 
    style={{ width: size, height: size }}
    className={`relative shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-40% via-[#dc2743] via-70% to-[#cc2366] shadow-[0_8px_16px_rgba(220,39,67,0.4),inset_0_2px_2px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.3)] border border-rose-300/40 transform transition-transform ${className}`}
  >
    {/* Specular highlight */}
    <div className="absolute top-1 left-1.5 right-1.5 h-1/3 rounded-t-xl bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
    <svg 
      className="w-3/5 h-3/5 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  </div>
);

export const ThreeDGoogleMapsIcon: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = "" }) => (
  <div 
    style={{ width: size, height: size }}
    className={`relative shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#3b82f6] via-[#1d4ed8] to-[#1e3a8a] shadow-[0_8px_16px_rgba(29,78,216,0.4),inset_0_2px_2px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.3)] border border-blue-300/40 transform transition-transform ${className}`}
  >
    {/* Specular highlight */}
    <div className="absolute top-1 left-1.5 right-1.5 h-1/3 rounded-t-xl bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
    <svg 
      className="w-3/5 h-3/5 text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
    </svg>
  </div>
);

export const ThreeDGoogleIcon: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = "" }) => (
  <div 
    style={{ width: size, height: size }}
    className={`relative shrink-0 flex items-center justify-center rounded-2xl bg-white shadow-[0_8px_16px_rgba(0,0,0,0.25),inset_0_2px_1px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(0,0,0,0.15)] border border-slate-200 transform transition-transform ${className}`}
  >
    {/* Specular highlight */}
    <div className="absolute top-1 left-1.5 right-1.5 h-1/3 rounded-t-xl bg-gradient-to-b from-white/90 to-transparent pointer-events-none" />
    <svg 
      className="w-3/5 h-3/5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]" 
      viewBox="0 0 24 24"
    >
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27a7.19 7.19 0 0 1 0-4.54V6.58H1.25a11.96 11.96 0 0 0 0 10.84l4.03-3.15Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
      />
    </svg>
  </div>
);

export const ThreeDStar: React.FC<{ filled?: boolean; className?: string }> = ({ filled = true, className = "" }) => (
  <svg 
    className={`w-5 h-5 drop-shadow-[0_2px_4px_rgba(245,158,11,0.5)] ${filled ? 'text-amber-400 fill-amber-400' : 'text-slate-500 fill-slate-700'} ${className}`} 
    viewBox="0 0 24 24"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
