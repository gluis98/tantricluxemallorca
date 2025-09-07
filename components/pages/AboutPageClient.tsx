'use client';

import React from 'react';
import Image from 'next/image';

type Milestone = {
  year: string;
  title: string;
  description: string;
};

type PhilosophyPoint = {
  title: string;
  text: string;
};

interface AboutPageDictionary {
  pre_title: string;
  title: string;
  subtitle: string;
  description: string;
  story_title: string;
  story_p1: string;
  story_p2: string;
  story_p3: string;
  stat1_val: string;
  stat1_text: string;
  stat2_val: string;
  stat2_text: string;
  stat3_val: string;
  stat3_text: string;
  timeline_title: string;
  philosophy_title: string;
  philosophy_quote: string;
  philosophy_author: string;
  philosophy_points: PhilosophyPoint[];
}

interface AboutPageClientProps {
  dictionary: AboutPageDictionary;
  milestones: Milestone[];
}

const AboutPageClient: React.FC<AboutPageClientProps> = ({ dictionary, milestones }) => {
  return (
    <main className="relative z-10 px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">{dictionary.pre_title}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">{dictionary.title}</h1>
          <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">{dictionary.subtitle}</h2>
          <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 tenali-ramakrishna">{dictionary.description}</p>
        </div>

        {/* Our Story Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                {dictionary.story_title}
              </h2>
              <div className="w-24 h-px bg-amber-400 mb-8"></div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {dictionary.story_p1}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {dictionary.story_p2}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                {dictionary.story_p3}
              </p>

              <div className="grid grid-cols-3 gap-8 text-center">
                <div className="bg-gradient-to-br from-amber-900/20 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
                  <h4 className="text-3xl font-light text-amber-400 mb-2">{dictionary.stat1_val}</h4>
                  <p className="text-sm text-gray-400">{dictionary.stat1_text}</p>
                </div>
                <div className="bg-gradient-to-br from-amber-900/20 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
                  <h4 className="text-3xl font-light text-amber-400 mb-2">{dictionary.stat2_val}</h4>
                  <p className="text-sm text-gray-400">{dictionary.stat2_text}</p>
                </div>
                <div className="bg-gradient-to-br from-amber-900/20 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
                  <h4 className="text-3xl font-light text-amber-400 mb-2">{dictionary.stat3_val}</h4>
                  <p className="text-sm text-gray-400">{dictionary.stat3_text}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent rounded-lg"></div>
              <Image
                src="/images/espacio_exclusivo_tantrico.webp"
                alt="Luxury spa interior"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
              {dictionary.timeline_title}
            </h2>
            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-600 to-amber-900"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1 px-8">
                    <div className={`bg-gradient-to-br from-amber-900/20 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-2 tenali-ramakrishna">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center border-4 border-black">
                    <span className="text-white font-light text-sm tenali-ramakrishna">
                      {milestone.year}
                    </span>
                  </div>

                  <div className="flex-1 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-24">
          <div className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-lg p-12 border border-amber-600/30">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                {dictionary.philosophy_title}
              </h2>
              <div className="w-24 h-px bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <blockquote className="text-2xl font-light text-gray-300 italic leading-relaxed mb-8">
                  &quot;{dictionary.philosophy_quote}&quot;
                </blockquote>
                <div className="text-amber-400 text-lg tenali-ramakrishna">
                  {dictionary.philosophy_author}
                </div>
              </div>

              <div className="space-y-6">
                {dictionary.philosophy_points.map((point: PhilosophyPoint, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-amber-400 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h4 className="text-lg text-amber-400 mb-2 tenali-ramakrishna">{point.title}</h4>
                      <p className="text-gray-300 text-sm">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

    </main>

  );
};

export default AboutPageClient;