'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n-config';

const pathTranslations: Record<string, Record<string, string>> = {
  '/acerca': {
    en: '/about',
  },
  '/servicios': {
    en: '/services',
  },
  '/contacto': {
    en: '/contact',
  },
  '/masajistas': {
    en: '/masseuses',
  },
  '/whatsapp': {
    en: '/whatsapp',
  },
};

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const getTranslatedPath = (locale: string) => {
    if (!pathname) return '/';

    // 1. Extraer el slug actual sin el prefijo de idioma
    const segments = pathname.split('/');
    const currentLocale = i18n.locales.find(loc => loc === segments[1]);
    const pathWithoutLocale = currentLocale ? pathname.replace(`/${currentLocale}`, '') || '/' : pathname;

    // 2. Encontrar la ruta canónica (la que usa la carpeta, en español)
    let canonicalPath = pathWithoutLocale;
    if (pathWithoutLocale !== '/') {
      for (const [key, translations] of Object.entries(pathTranslations)) {
        // Si el path actual es una traducción (ej: /about), encontrar su clave canónica (ej: /acerca)
        if (Object.values(translations).includes(pathWithoutLocale)) {
          canonicalPath = key;
          break;
        }
      }
    }

    // 3. Construir la nueva URL
    // Si el nuevo idioma es el predeterminado, usamos la ruta canónica sin prefijo
    if (locale === i18n.defaultLocale) {
      return canonicalPath;
    }

    // Si no, buscamos la traducción y la anteponemos con el prefijo del idioma
    const translatedSlug = pathTranslations[canonicalPath]?.[locale] || canonicalPath;
    return `/${locale}${translatedSlug}`;
  };

  return (
    <div className="flex gap-2 items-center">
      {i18n.locales.map((locale) => (
        <Link key={locale} href={getTranslatedPath(locale)} className={`uppercase text-sm font-semibold transition-colors ${pathname.startsWith(`/${locale}`) || (locale === i18n.defaultLocale && !i18n.locales.some(l => pathname.startsWith(`/${l}/`))) ? 'text-amber-400' : 'text-gray-400 hover:text-white'}`}>
          {locale}
        </Link>
      ))}
    </div>
  );
}