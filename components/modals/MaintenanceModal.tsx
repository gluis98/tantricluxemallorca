'use client';

import { useEffect, useState } from 'react';

export default function MaintenanceModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar el modal después de un pequeño delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Backdrop - no clickeable */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-lg"
        style={{
          animation: isVisible ? 'fadeIn 0.5s ease-out' : ''
        }}
      />

      {/* Modal Container */}
      <div
        className={`relative z-10 w-full max-w-2xl mx-4 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl border-2 border-amber-500/30 p-8 md:p-12 shadow-2xl relative overflow-hidden">

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-amber-800/10 pointer-events-none"></div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 text-center">

            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/30 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 md:w-16 md:h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-4 text-amber-400 cormorant-garamond">
              Estamos Actualizando
            </h2>

            {/* Decorative line */}
            <div className="w-24 h-px bg-amber-400 mx-auto mb-6"></div>

            {/* Message */}
            <p className="text-lg md:text-2xl font-light tracking-wide mb-6 text-gray-300 tenali-ramakrishna">
              Nuestros Servicios
            </p>

            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
              Estamos trabajando para ofrecerte una mejor experiencia.<br />
              Volveremos pronto con sorpresas exclusivas.
            </p>

            {/* Decorative element */}
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>

            {/* Thank you message */}
            <p className="text-xl md:text-2xl font-light tracking-wider text-amber-300 tenali-ramakrishna">
              Gracias
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
