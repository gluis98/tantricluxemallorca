import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// --- INICIO: Configuración para rutas traducidas ---
// Mapea la ruta canónica (usada en las carpetas, ej: /acerca) a la ruta traducida para otros idiomas.
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
// --- FIN: Configuración ---

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);
  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Ignorar rutas de assets, API, etc.
  if (['/api', '/_next/static', '/_next/image', '/images', '/favicon.ico'].some((p) => pathname.startsWith(p))) {
    return;
  }

  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // --- Caso 1: La ruta tiene un prefijo de idioma (ej: /en/about, /es/acerca) ---
  if (pathnameHasLocale) {
    const locale = pathname.split('/')[1];

    // Si es el idioma por defecto, redirigir a la ruta sin prefijo.
    // Esto asegura que la URL para el idioma por defecto siempre sea limpia.
    // ej: /es/acerca -> /acerca
    if (locale === i18n.defaultLocale) {
      const newPath = pathname.replace(`/${i18n.defaultLocale}`, '') || '/';
      return NextResponse.redirect(new URL(newPath, request.url));
    }

    // Para idiomas no predeterminados, reescribimos a la ruta canónica que Next.js entiende (el nombre de la carpeta).
    // ej: El usuario ve /en/about, pero Next.js necesita renderizar /en/acerca.
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    
    let canonicalPath = '';
    // Buscar la ruta canónica (ej: '/acerca') que corresponde a la ruta localizada (ej: '/about').
    for (const [key, translations] of Object.entries(pathTranslations)) {
      if (translations[locale] === pathWithoutLocale) {
        canonicalPath = key;
        break;
      }
    }

    // Si se encontró una traducción y es diferente, reescribir a la ruta canónica.
    if (canonicalPath && canonicalPath !== pathWithoutLocale) {
        return NextResponse.rewrite(new URL(`/${locale}${canonicalPath}`, request.url));
    }
    
    // Si no se define una traducción, se asume que la ruta ya es canónica.
    return;
  }

  // --- Caso 2: La ruta NO tiene prefijo de idioma (ej: /, /acerca, /about) ---

  // Si la ruta no tiene un prefijo de idioma, SIEMPRE la tratamos como el idioma por defecto.
  // Simplemente reescribimos la URL internamente para que Next.js pueda encontrar la página correcta,
  // pero la URL que ve el usuario no cambia.
  // ej: /acerca -> Next.js renderiza /es/acerca, el usuario sigue viendo /acerca.
  // ej: / -> Next.js renderiza /es/, el usuario sigue viendo /
  return NextResponse.rewrite(new URL(`/${i18n.defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};