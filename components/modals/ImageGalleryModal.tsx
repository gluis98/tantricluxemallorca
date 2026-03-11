'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  name?: string;
}

export default function ImageGalleryModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  name = 'Erika'
}: ImageGalleryModalProps) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    onIndexChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    onIndexChange(newIndex);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-[101] w-10 h-10 rounded-full bg-amber-900/80 hover:bg-amber-900/60 flex items-center justify-center transition-all group"
        aria-label="Cerrar galería"
      >
        <span className="text-amber-400 text-2xl group-hover:rotate-90 transition-transform duration-300">×</span>
      </button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 z-[101] w-12 h-12 rounded-full bg-amber-900/80 hover:bg-amber-900/60 flex items-center justify-center transition-all group"
            aria-label="Imagen anterior"
          >
            <span className="text-amber-400 text-2xl group-hover:-translate-x-1 transition-transform">‹</span>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 z-[101] w-12 h-12 rounded-full bg-amber-900/80 hover:bg-amber-900/60 flex items-center justify-center transition-all group"
            aria-label="Imagen siguiente"
          >
            <span className="text-amber-400 text-2xl group-hover:translate-x-1 transition-transform">›</span>
          </button>
        </>
      )}

      {/* Image container */}
      <div className="relative z-[101] w-full max-w-5xl mx-4 h-[90vh] flex flex-col items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={images[currentIndex]}
            alt={`${name} - Imagen ${currentIndex + 1}`}
            fill
            className="object-contain rounded-lg"
            priority
            sizes="90vw"
          />
        </div>

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-amber-400 text-sm tenali-ramakrishna">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}

        {/* Thumbnail navigation */}
        {images.length > 1 && (
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4 pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => onIndexChange(index)}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                  index === currentIndex
                    ? 'border-amber-400 scale-110'
                    : 'border-amber-900/40 opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={image}
                  alt={`Miniatura ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
