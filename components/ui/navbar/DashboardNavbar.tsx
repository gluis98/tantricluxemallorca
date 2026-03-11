'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu, User, RefreshCw, LogOut, X } from 'lucide-react';

interface DashboardNavbarProps {
  sectionTitle: string;
  onSidebarToggle: () => void;
  userData?: {
    name: string;
    email: string;
    avatar?: string;
  };
  companyName?: string;
  currentRate?: string;
  onUpdateRate?: () => void;
  onLogout?: () => void;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({
  sectionTitle,
  onSidebarToggle,
  userData = {
    name: 'Usuario',
    email: 'usuario@example.com',
  },
  companyName = 'Mi Empresa',
  currentRate = '1.00',
  onUpdateRate,
  onLogout,
}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-lg">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Lado izquierdo: Botón sidebar + Título */}
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            {/* Botón para abrir sidebar */}
            <button
              onClick={onSidebarToggle}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors flex-shrink-0"
              aria-label="Abrir menú de navegación"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Título de la sección */}
            <h1 className="text-lg sm:text-xl font-semibold text-white truncate">
              {sectionTitle}
            </h1>
          </div>

          {/* Lado derecho: Icono de perfil */}
          <div className="flex items-center flex-shrink-0">
            <div className="relative" ref={dropdownRef}>
              {/* Botón de perfil */}
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700"
                aria-label="Abrir menú de perfil"
                aria-expanded={isProfileOpen}
              >
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
              </button>

              {/* Dropdown de perfil */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden z-50">
                  {/* Header del dropdown */}
                  <div className="p-4 bg-gray-900 border-b border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-semibold text-white">Perfil de Usuario</h3>
                      <button
                        onClick={() => setIsProfileOpen(false)}
                        className="p-1 rounded hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                        aria-label="Cerrar menú"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Contenido del dropdown */}
                  <div className="p-4 space-y-4">
                    {/* Datos del usuario */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          {userData.avatar ? (
                            <img
                              src={userData.avatar}
                              alt={userData.name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <User className="w-5 h-5 text-amber-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            {userData.name}
                          </p>
                          <p className="text-xs text-gray-400 truncate">
                            {userData.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Nombre de la empresa */}
                    <div className="pt-2 border-t border-gray-700">
                      <p className="text-xs text-gray-400 mb-1">Empresa</p>
                      <p className="text-sm font-medium text-white">{companyName}</p>
                    </div>

                    {/* Tasa actual */}
                    <div className="pt-2 border-t border-gray-700">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-400 mb-1">Tasa Actual</p>
                          <p className="text-lg font-semibold text-amber-400">
                            {currentRate}
                          </p>
                        </div>
                        {/* Botón de actualizar tasa (solo icono) */}
                        {onUpdateRate && (
                          <button
                            onClick={() => {
                              onUpdateRate();
                              setIsProfileOpen(false);
                            }}
                            className="p-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 transition-colors flex-shrink-0"
                            aria-label="Actualizar tasa"
                            title="Actualizar tasa"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Botón de cerrar sesión */}
                    {onLogout && (
                      <div className="pt-2 border-t border-gray-700">
                        <button
                          onClick={() => {
                            onLogout();
                            setIsProfileOpen(false);
                          }}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors text-sm font-medium"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Cerrar Sesión</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar dropdown en móvil */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 sm:hidden"
          onClick={() => setIsProfileOpen(false)}
        />
      )}
    </nav>
  );
};

export default DashboardNavbar;
