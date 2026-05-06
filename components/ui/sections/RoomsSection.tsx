'use client';

import React from 'react';
import Image from 'next/image';
type RoomsDictionary = {
  pre_title: string;
  title: string;
  description: string;
  expand_hint: string;
  room_label: string;
  empty_hint: string;
};

export default function RoomsSection({
  dictionary,
  images,
  onImageClick,
}: {
  dictionary: RoomsDictionary;
  images: string[];
  onImageClick: (index: number) => void;
}) {
  return (
    <section className="relative py-20 px-4 lg:px-8 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-amber-600/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-amber-900/15 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="text-center mb-14 md:mb-16 max-w-3xl mx-auto">
          <p className="text-xs md:text-sm mb-4 font-light tracking-[0.35em] text-amber-400 tenali-ramakrishna uppercase">
            {dictionary.pre_title}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-6 gradiente-dorado cormorant-garamond">
            {dictionary.title}
          </h2>
          <div className="w-24 h-px bg-amber-400 mx-auto mb-8" />
          <p className="text-lg md:text-xl font-light text-gray-200/95 leading-relaxed tenali-ramakrishna">
            {dictionary.description}
          </p>
        </header>

        {images.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center rounded-2xl border border-amber-900/35 bg-gradient-to-br from-amber-950/20 to-black/40 px-8 py-12">
            <p className="text-gray-300 tenali-ramakrishna leading-relaxed">
              {dictionary.empty_hint}
            </p>
            <p className="mt-6 text-xs text-amber-500/70 font-mono break-all">
              public_html/Img/Rooms/
            </p>
          </div>
        ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => onImageClick(index)}
                className="group relative text-left rounded-2xl overflow-hidden border border-amber-900/35 bg-black/40 shadow-xl shadow-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-500 hover:border-amber-500/50 hover:shadow-amber-900/20"
                aria-label={`${dictionary.expand_hint} — ${index + 1}`}
              >
                <div className="relative w-full overflow-hidden aspect-[4/3] md:aspect-[5/4]">
                  <Image
                    src={src}
                    alt={`${dictionary.room_label} ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 md:opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                    <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] text-amber-300/90 tenali-ramakrishna uppercase mb-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {dictionary.expand_hint}
                    </span>
                    <span className="text-white/90 text-sm md:text-base font-light tenali-ramakrishna">
                      {dictionary.room_label} {index + 1}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-amber-500/30 text-amber-300 text-lg opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    +
                  </div>
                </div>
              </button>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
