import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';

// Mapeo: ruta canónica (carpeta real) → traducciones visibles en URL
const pathTranslations: Record<string, Record<string, string>> = {
  '/acerca': {
    es: '/acerca',      // Español: /acerca
    en: '/about',       // Inglés: /en/about
    de: '/uber-uns',    // Alemán: /de/uber-uns
  },
  '/': {
    es: '/',
    en: '/',
    de: '/',
  },
  '/servicios': {
    es: '/servicios',
    en: '/services',
    de: '/leistungen',
  },
  '/contacto': {
    es: '/contacto',
    en: '/contact',
    de: '/kontakt',
  },
  '/masajistas': {
    es: '/masajistas',
    en: '/masseuses',
    de: '/masseurinnen',
  },
  '/whatsapp': {
    es: '/whatsapp',
    en: '/whatsapp',
    de: '/whatsapp',
  },
  // Servicios Golden
  '/servicios/golden-relax': {
    es: '/servicios/golden-relax',
    en: '/servicios/golden-relax',
    de: '/servicios/golden-relax',
  },
  '/servicios/golden-sensitivo': {
    es: '/servicios/golden-sensitivo',
    en: '/servicios/golden-sensitive',
    de: '/servicios/golden-sensitiv',
  },
  '/servicios/golden-sensitive': {
    es: '/servicios/golden-sensitivo',
    en: '/servicios/golden-sensitive',
    de: '/servicios/golden-sensitiv',
  },
  '/servicios/golden-sensitiv': {
    es: '/servicios/golden-sensitivo',
    en: '/servicios/golden-sensitive',
    de: '/servicios/golden-sensitiv',
  },
  '/servicios/experiencia-golden': {
    es: '/servicios/experiencia-golden',
    en: '/servicios/golden-experience',
    de: '/servicios/golden-erlebnis',
  },
  '/servicios/golden-experience': {
    es: '/servicios/experiencia-golden',
    en: '/servicios/golden-experience',
    de: '/servicios/golden-erlebnis',
  },
  '/servicios/golden-erlebnis': {
    es: '/servicios/experiencia-golden',
    en: '/servicios/golden-experience',
    de: '/servicios/golden-erlebnis',
  },
  '/servicios/golden-suite-experiencia': {
    es: '/servicios/golden-suite-experiencia',
    en: '/servicios/golden-suite-experience',
    de: '/servicios/golden-suite-erlebnis',
  },
  '/servicios/golden-suite-experience': {
    es: '/servicios/golden-suite-experiencia',
    en: '/servicios/golden-suite-experience',
    de: '/servicios/golden-suite-erlebnis',
  },
  '/servicios/golden-suite-erlebnis': {
    es: '/servicios/golden-suite-experiencia',
    en: '/servicios/golden-suite-experience',
    de: '/servicios/golden-suite-erlebnis',
  },
  '/servicios/velvet-duet-pareja': {
    es: '/servicios/velvet-duet-pareja',
    en: '/servicios/velvet-duet-couple',
    de: '/servicios/velvet-duet-paar',
  },
  '/servicios/velvet-duet-couple': {
    es: '/servicios/velvet-duet-pareja',
    en: '/servicios/velvet-duet-couple',
    de: '/servicios/velvet-duet-paar',
  },
  '/servicios/velvet-duet-paar': {
    es: '/servicios/velvet-duet-pareja',
    en: '/servicios/velvet-duet-couple',
    de: '/servicios/velvet-duet-paar',
  },
};

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
    // URL con prefijo de idioma (ej: /es/, /en/about, /de/uber-uns)
    const segments = pathname.split('/').filter(Boolean);
    const locale = segments[0] as string; // 'es', 'en', o 'de'
    const pathWithoutLocale = '/' + segments.slice(1).join('/') || '/';

    // Si es una ruta de servicio dinámico (/servicios/[slug]), permitir que pase directamente
    // Next.js manejará la ruta dinámica
    if (pathWithoutLocale.startsWith('/servicios/') && segments.length >= 3) {
      // Es una ruta dinámica de servicio, reescribir directamente
      const response = NextResponse.rewrite(new URL(`/${locale}${pathWithoutLocale}`, request.url));
      response.headers.set('x-pathname', pathname);
      return response;
    }

    // Buscar la ruta canónica desde la ruta traducida
    let canonicalPath = pathWithoutLocale;
    let found = false;
    
    // Primero buscar rutas exactas
    for (const [canonical, translations] of Object.entries(pathTranslations)) {
      if (translations[locale] === pathWithoutLocale) {
        canonicalPath = canonical;
        found = true;
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