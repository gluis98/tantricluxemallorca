'use client';

import Image from 'next/image';
import Link from 'next/link';

interface FooterDictionary {
  navigation: string;
  nav_home: string;
  nav_services: string;
  nav_masseuses: string;
  nav_contact: string;
  paths: {
    home: string;
    services: string;
    masseuses: string;
    contact: string;
  };
  massages_title: string;
  follow_us: string;
  instagram_aria: string;
  whatsapp_aria: string;
  copyright: string;
  privacy_policy: string;
  terms_conditions: string;
}
const Footer = ({ lang, dictionary }: { lang: string, dictionary: FooterDictionary }) => {
  return (
    <footer className="border-t relative text-center md:text-left border-amber-900/20 py-12 px-4 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="justify-self-center md:justify-self-start">
            <div className="flex flex-col w-[200px] sm:w-[300px] md:w-[80%] items-center">
              <Image
                src="/images/LogoFull.png"
                alt="Logo Tantric Luxe"
                width={150}
                height={150}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div>
            <h4 className="text-amber-400 mb-4 tenali-ramakrishna">{dictionary.navigation}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href={`/${lang}${dictionary.paths.home}`} className="hover:text-amber-400 transition-colors">{dictionary.nav_home}</Link></li>
              <li><Link href={`/${lang}${dictionary.paths.services}`} className="hover:text-amber-400 transition-colors">{dictionary.nav_services}</Link></li>
              <li><Link href={`/${lang}${dictionary.paths.masseuses}`} className="hover:text-amber-400 transition-colors">{dictionary.nav_masseuses}</Link></li>
              <li><Link href={`/${lang}${dictionary.paths.contact}`} className="hover:text-amber-400 transition-colors">{dictionary.nav_contact}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-400 mb-4 tenali-ramakrishna">{dictionary.massages_title}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Masaje Tantrico Deluxe Mallorca</li>
              <li>Masaje Tantrico Premium Palma</li>
              <li>Experiencia Tantrica Parejas</li>
              <li>Ritual Tantrico Personalizado</li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-400 mb-4 tenali-ramakrishna">{dictionary.follow_us}</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center hover:from-amber-600/30 hover:to-amber-900/30 transition-colors"
                aria-label={dictionary.instagram_aria}
              >
                <span className="text-amber-400">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center hover:from-amber-600/30 hover:to-amber-900/30 transition-colors"
                aria-label={dictionary.whatsapp_aria}
              >
                <span className="text-amber-400">💬</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-900/20 pt-8 text-center">
          <p className="text-sm text-gray-400">
            {dictionary.copyright} |
            <a href="#" className="text-amber-400 hover:text-amber-300 mx-1">{dictionary.privacy_policy}</a>|
            <a href="#" className="text-amber-400 hover:text-amber-300 mx-1">{dictionary.terms_conditions}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 