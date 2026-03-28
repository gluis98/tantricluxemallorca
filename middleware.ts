import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';

// Mapeo: ruta canónica (carpeta real) → traducciones visibles en URL
const pathTranslations: Record<string, Record<string, string>> = {
  '/acerca': {
    es: '/acerca',      // Español: /acerca
    en: '/about',       // Inglés: /en/about
    de: '/uber-uns',    // Alemán: /de/uber-uns
    it: '/chi-siamo',   // Italiano: /it/chi-siamo
    fr: '/a-propos',    // Francés: /fr/a-propos
  },
  '/': {
    es: '/',
    en: '/',
    de: '/',
    it: '/',
    fr: '/',
  },
  '/servicios': {
    es: '/servicios',
    en: '/services',
    de: '/leistungen',
    it: '/servizi',
    fr: '/services',
  },
  '/contacto': {
    es: '/contacto',
    en: '/contact',
    de: '/kontakt',
    it: '/contatti',
    fr: '/contact',
  },
  '/masajistas': {
    es: '/masajistas',
    en: '/masseuses',
    de: '/masseurinnen',
    it: '/massaggiatrici',
    fr: '/masseuses',
  },
  '/whatsapp': {
    es: '/whatsapp',
    en: '/whatsapp',
    de: '/whatsapp',
    it: '/whatsapp',
    fr: '/whatsapp',
  },
};

/** Segmento público de listado/detalle de servicios por idioma (la app solo tiene carpeta `servicios`). */
const SERVICES_PUBLIC_SEGMENT: Record<string, string> = {
  es: 'servicios',
  en: 'services',
  de: 'leistungen',
  it: 'servizi',
  fr: 'services',
};

const SERVICES_LIST_PATH: Record<string, string> = {
  es: '/servicios',
  en: '/services',
  de: '/leistungen',
  it: '/servizi',
  fr: '/services',
};

/** Slugs antiguos: 301 al listado de servicios (evita soft 404 y URLs muertas). */
const LEGACY_SERVICE_SLUGS = new Set([
  'golden-relax',
  'golden-sensitivo',
  'experiencia-golden',
  'golden-suite-experiencia',
  'velvet-duet-pareja',
  'golden-sensitive',
  'golden-experience',
  'golden-suite-experience',
  'velvet-duet-couple',
  'golden-sensitiv',
  'golden-erlebnis',
  'golden-suite-erlebnis',
  'velvet-duet-paar',
]);

function extractServiceDetailSlug(pathWithoutLocale: string, locale: string): string | null {
  const translatedSeg = SERVICES_PUBLIC_SEGMENT[locale] ?? 'servicios';
  const prefixes = Array.from(new Set([translatedSeg, 'servicios']));
  for (const seg of prefixes) {
    const pref = `/${seg}/`;
    if (pathWithoutLocale.startsWith(pref)) {
      const slug = pathWithoutLocale.slice(pref.length).split('/').filter(Boolean)[0];
      return slug || null;
    }
  }
  return null;
}

export function middleware(request: NextRequest) {
  let pathname = request.nextUrl.pathname;

  // Ignorar archivos estáticos, API, etc.
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico' ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt'
  ) {
    return NextResponse.next();
  }

  // Normalizar trailing slash: remover trailing slash excepto para la raíz
  // Esto ayuda a manejar URLs con y sin trailing slash de manera consistente
  if (pathname !== '/' && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // Detectar el idioma de la URL actual
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // URL con prefijo de idioma (ej: /es/, /en/about, /de/uber-uns, /it/chi-siamo, /fr/a-propos)
    const segments = pathname.split('/').filter(Boolean);
    const locale = segments[0] as string; // 'es', 'en', 'de', 'it' o 'fr'
    const pathWithoutLocale = '/' + segments.slice(1).join('/') || '/';

    const serviceSlug = extractServiceDetailSlug(pathWithoutLocale, locale);
    if (serviceSlug) {
      if (LEGACY_SERVICE_SLUGS.has(serviceSlug)) {
        const servicesPath = SERVICES_LIST_PATH[locale] ?? '/servicios';
        return NextResponse.redirect(new URL(`/${locale}${servicesPath}`, request.url), 301);
      }
      const rewriteUrl = new URL(`/${locale}/servicios/${serviceSlug}`, request.url);
      const response = NextResponse.rewrite(rewriteUrl);
      response.headers.set('x-pathname', pathname);
      return response;
    }

    // Buscar la ruta canónica desde la ruta traducida
    let canonicalPath = pathWithoutLocale;

    for (const [canonical, translations] of Object.entries(pathTranslations)) {
      if (translations[locale] === pathWithoutLocale) {
        canonicalPath = canonical;
        break;
      }
    }

    // Reescribir a la ruta canónica con el idioma
    const response = NextResponse.rewrite(new URL(`/${locale}${canonicalPath}`, request.url));
    // Agregar header con la ruta para hreflang
    response.headers.set('x-pathname', pathname);
    return response;
  } else {
    // URL sin prefijo de idioma - Servir en español por defecto SIN redirigir
    // Esto evita problemas de indexación y permite que las URLs funcionen directamente
    let locale = 'es';
    let canonicalPath = pathname;

    // Slugs retirados: cualquier prefijo de servicios típico → 301 al listado ES
    const defaultServicePrefixes = ['servicios', 'services', 'leistungen', 'servizi'] as const;
    for (const seg of defaultServicePrefixes) {
      if (pathname.startsWith(`/${seg}/`)) {
        const slug = pathname.split('/').filter(Boolean)[1];
        if (slug && LEGACY_SERVICE_SLUGS.has(slug)) {
          return NextResponse.redirect(new URL('/es/servicios', request.url), 301);
        }
        break;
      }
    }

    // Verificar si la ruta es una traducción en español
    for (const [canonical, translations] of Object.entries(pathTranslations)) {
      if (translations[locale] === pathname) {
        canonicalPath = canonical;
        break;
      }
    }

    // Construir la ruta de rewrite (mismo formato que cuando hay prefijo de idioma)
    // Asegurarse de que la ruta tenga el formato correcto para Next.js
    const rewritePath = canonicalPath === '/' ? '/es' : `/es${canonicalPath}`;

    // Construir la URL de destino usando la misma base que request.url
    const rewriteUrl = new URL(rewritePath, request.url);

    // Usar rewrite en lugar de redirect para mantener la URL original visible
    // pero servir el contenido en español (mismo formato que cuando hay prefijo)
    const response = NextResponse.rewrite(rewriteUrl);
    // Agregar header con la ruta original para hreflang y SEO
    response.headers.set('x-pathname', pathname);
    // Indicar que se está sirviendo en español por defecto
    response.headers.set('x-default-locale', 'es');
    return response;
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|sitemap.xml|robots.txt|.*\\..*).*)'],
};
