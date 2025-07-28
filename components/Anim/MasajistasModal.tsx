import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const MasajistasModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  const masajistas = [
    {
      id: 1,
      name: "Masajista 1",
      image: "/images/masajista1.webp", // Reemplaza con tus imágenes reales
      specialty: "Especialista en Tantrico Clásico"
    },
    {
      id: 2,
      name: "Masajista 2", 
      image: "/images/masajista2.webp",
      specialty: "Experta en Relajación Profunda"
    },
    {
      id: 3,
      name: "Masajista 3",
      image: "/images/masajista3.webp", 
      specialty: "Maestra en Técnicas Ancestrales"
    },
    {
      id: 4,
      name: "Masajista 4",
      image: "/images/masajista4.webp",
      specialty: "Especialista en Experiencias Premium"
    }
  ];

  useEffect(() => {
    // Modal aparece después de 5 segundos
    const timer = setTimeout(() => {
      setShowModal(true);
      // Animación de las tarjetas después de que aparece el modal
      setTimeout(() => {
        setAnimateCards(true);
      }, 200);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setAnimateCards(false);
    setTimeout(() => {
      setShowModal(false);
    }, 300);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop con blur mejorado */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={closeModal}
        style={{
          animation: showModal ? 'fadeIn 0.5s ease-out' : 'fadeOut 0.3s ease-in'
        }}
      />
      
             {/* Modal Container */}
       <div className="relative z-10 w-full max-w-6xl mx-4 h-[90vh] overflow-hidden">
                 <div 
           className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border border-amber-900/30 p-6 md:p-8 h-full flex flex-col relative"
          style={{
            animation: showModal ? 'modalSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'modalSlideOut 0.3s ease-in'
          }}
        >
          {/* Botón cerrar */}
          {/* <button 
            onClick={closeModal}
            className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-amber-900 hover:bg-amber-900/40 flex items-center justify-center transition-colors group"
          >
            <span className="text-amber-400 text-xl group-hover:rotate-90 transition-transform duration-300">×</span>
          </button> */}

                     {/* Grid de Masajistas */}
           <div className="flex flex-col h-full gap-2">
            {masajistas.map((masajista, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={masajista.id}
                  className={`transform transition-all duration-700 ease-out h-[24%] ${
                    animateCards 
                      ? 'translate-x-0 opacity-100' 
                      : isEven 
                        ? 'translate-x-full opacity-0' 
                        : '-translate-x-full opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                    
                     <div className="relative h-full">
                      <div className="w-full h-full rounded-lg bg-gradient-to-br from-amber-900/30 to-gray-800/50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={masajista.image}
                          alt={masajista.name}
                          width={200}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                        <div className="flex items-center justify-center space-x-2 text-xs text-green-400 absolute bottom-0 right-0">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse "></div>
                          <span className="text-md tenali-ramakrishna pr-2">Disponible ahora</span>
                        </div>
                      </div>
                      
                      {/* Badge de especialidad */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        Premium
                      </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        @keyframes modalSlideIn {
          from { 
            opacity: 0; 
            transform: scale(0.9) translateY(-20px);
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes modalSlideOut {
          from { 
            opacity: 1; 
            transform: scale(1) translateY(0);
          }
          to { 
            opacity: 0; 
            transform: scale(0.9) translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

// Componente principal que incluye el modal
const App = () => {
  return (
    <MasajistasModal />
  );
};

export default App;