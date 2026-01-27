import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import ServiceDetailPageClient from '@/components/pages/ServiceDetailPageClient';
import { notFound } from 'next/navigation';

// Mapeo de slugs a claves de servicio
const serviceSlugMap: Record<string, Record<string, string>> = {
  'golden-relax': {
    es: 'goldenRelax',
    en: 'goldenRelax',
    de: 'goldenRelax',
  },
  'golden-sensitivo': {
    es: 'goldenSensitivo',
    en: 'goldenSensitivo',
    de: 'goldenSensitiv',
  },
  'golden-sensitive': {
    es: 'goldenSensitivo',
    en: 'goldenSensitivo',
    de: 'goldenSensitiv',
  },
  'golden-sensitiv': {
    es: 'goldenSensitivo',
    en: 'goldenSensitivo',
    de: 'goldenSensitivo',
  },
  'experiencia-golden': {
    es: 'experienciaGolden',
    en: 'experienciaGolden',
    de: 'goldenErlebnis',
  },
  'golden-experience': {
    es: 'experienciaGolden',
    en: 'experienciaGolden',
    de: 'goldenErlebnis',
  },
  'golden-erlebnis': {
    es: 'experienciaGolden',
    en: 'experienciaGolden',
    de: 'experienciaGolden',
  },
  'golden-suite-experiencia': {
    es: 'goldenSuiteExperiencia',
    en: 'goldenSuiteExperiencia',
    de: 'goldenSuiteExperiencia',
  },
  'golden-suite-experience': {
    es: 'goldenSuiteExperiencia',
    en: 'goldenSuiteExperiencia',
    de: 'goldenSuiteExperiencia',
  },
  'golden-suite-erlebnis': {
    es: 'goldenSuiteExperiencia',
    en: 'goldenSuiteExperiencia',
    de: 'goldenSuiteExperiencia',
  },
  'velvet-duet-pareja': {
    es: 'velvetDuet',
    en: 'velvetDuet',
    de: 'velvetDuet',
  },
  'velvet-duet-couple': {
    es: 'velvetDuet',
    en: 'velvetDuet',
    de: 'velvetDuet',
  },
  'velvet-duet-paar': {
    es: 'velvetDuet',
    en: 'velvetDuet',
    de: 'velvetDuet',
  },
};

// Función para generar metadata dinámica
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const dictionary = await getDictionary(lang);
  
  const serviceKey = serviceSlugMap[slug]?.[lang];
  if (!serviceKey || !dictionary.goldenServices?.[serviceKey as keyof typeof dictionary.goldenServices]) {
    return {
      title: 'Servicio no encontrado',
      description: 'El servicio solicitado no está disponible',
    };
  }

  const service = dictionary.goldenServices[serviceKey as keyof typeof dictionary.goldenServices] as any;
  const baseUrl = 'https://tantricluxemallorca.com';
  const currentUrl = `${baseUrl}/${lang}/servicios/${service.slug}`;

  // Generar URLs alternativas para hreflang
  const alternates: Record<string, string> = {};
  
  // Obtener diccionarios para todos los idiomas
  const [esDict, enDict, deDict] = await Promise.all([
    getDictionary('es'),
    getDictionary('en'),
    getDictionary('de'),
  ]);
  
  const dictionaries = { es: esDict, en: enDict, de: deDict };
  
  ['es', 'en', 'de'].forEach((locale) => {
    const altServiceKey = serviceSlugMap[slug]?.[locale];
    if (altServiceKey) {
      const localeDict = dictionaries[locale as keyof typeof dictionaries];
      if (localeDict.goldenServices?.[altServiceKey as keyof typeof localeDict.goldenServices]) {
        const altService = localeDict.goldenServices[altServiceKey as keyof typeof localeDict.goldenServices] as any;
        alternates[locale] = `${baseUrl}/${locale}/servicios/${altService.slug}`;
      }
    }
  });
  
  const defaultServiceKey = serviceSlugMap[slug]?.es;
  const defaultService = defaultServiceKey && esDict.goldenServices?.[defaultServiceKey as keyof typeof esDict.goldenServices] as any;
  alternates['x-default'] = `${baseUrl}/es/servicios/${defaultService?.slug || slug}`;

  return {
    title: service.meta_title,
    description: service.meta_description,
    keywords: service.meta_keywords,
    alternates: {
      canonical: currentUrl,
      languages: alternates,
    },
    openGraph: {
      title: service.meta_title,
      description: service.meta_description,
      url: currentUrl,
      siteName: 'Tantric Luxe Mallorca',
      locale: lang,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/golden-services/${service.slug}.webp`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.meta_title,
      description: service.meta_description,
      images: [`${baseUrl}/images/golden-services/${service.slug}.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export async function generateStaticParams() {
  const slugs = [
    { slug: 'golden-relax', lang: 'es' },
    { slug: 'golden-relax', lang: 'en' },
    { slug: 'golden-relax', lang: 'de' },
    { slug: 'golden-sensitivo', lang: 'es' },
    { slug: 'golden-sensitive', lang: 'en' },
    { slug: 'golden-sensitiv', lang: 'de' },
    { slug: 'experiencia-golden', lang: 'es' },
    { slug: 'golden-experience', lang: 'en' },
    { slug: 'golden-erlebnis', lang: 'de' },
    { slug: 'golden-suite-experiencia', lang: 'es' },
    { slug: 'golden-suite-experience', lang: 'en' },
    { slug: 'golden-suite-erlebnis', lang: 'de' },
    { slug: 'velvet-duet-pareja', lang: 'es' },
    { slug: 'velvet-duet-couple', lang: 'en' },
    { slug: 'velvet-duet-paar', lang: 'de' },
  ];

  return slugs;
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  try {
    const { lang, slug } = await params;
    const dictionary = await getDictionary(lang);

    // Validar que goldenServices exista en el diccionario
    if (!dictionary || !dictionary.goldenServices) {
      console.error('goldenServices no encontrado en el diccionario');
      notFound();
    }

    const serviceKey = serviceSlugMap[slug]?.[lang];
    if (!serviceKey || !dictionary.goldenServices[serviceKey as keyof typeof dictionary.goldenServices]) {
      console.error(`Servicio no encontrado: slug=${slug}, lang=${lang}, serviceKey=${serviceKey}`);
      notFound();
    }

    const service = dictionary.goldenServices[serviceKey as keyof typeof dictionary.goldenServices] as any;

    // Validar que el servicio tenga todas las propiedades necesarias
    if (!service || !service.slug || !service.title || !service.description) {
      console.error('Servicio incompleto:', { slug: service?.slug, title: service?.title });
      notFound();
    }

  // Obtener servicios relacionados (excluyendo el actual)
  const allServices = Object.values(dictionary.goldenServices || {}) as any[];
  const relatedServices = allServices
    .filter((s) => s && s.slug && s.slug !== service.slug)
    .slice(0, 3)
    .map((s) => ({
      slug: s.slug,
      title: s.title,
      description: (s.description || '').substring(0, 150) + '...',
    }));

  // Generar JSON-LD para SEO
  const baseUrl = 'https://tantricluxemallorca.com';
  const currentUrl = `${baseUrl}/${lang}/servicios/${service.slug}`;
  const servicesPath = lang === 'es' ? 'servicios' : lang === 'en' ? 'services' : 'leistungen';
  const homeLabel = lang === 'es' ? 'Inicio' : lang === 'en' ? 'Home' : 'Startseite';
  const servicesLabel = lang === 'es' ? 'Servicios' : lang === 'en' ? 'Services' : 'Leistungen';
  
  // JSON-LD para el servicio
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.meta_description || service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Tantric Luxe Mallorca',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Carrer del Pare Bartomeu Pou, 44, Nord',
        addressLocality: 'Palma',
        addressRegion: 'Illes Balears',
        postalCode: '07003',
        addressCountry: 'ES',
      },
      telephone: '+34-602-560-426',
      url: baseUrl,
    },
    areaServed: {
      '@type': 'City',
      name: 'Palma de Mallorca',
    },
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '10',
      bestRating: '5',
      worstRating: '5',
    },
  };

  // JSON-LD para FAQ si existen
  const faqJsonLd = service.faqs && service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq: any) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  // JSON-LD para Breadcrumbs
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeLabel,
        item: `${baseUrl}/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: servicesLabel,
        item: `${baseUrl}/${lang}/${servicesPath}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: currentUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <ServiceDetailPageClient
        service={{
          slug: service.slug || '',
          title: service.title || '',
          meta_title: service.meta_title || service.title || '',
          meta_description: service.meta_description || service.description || '',
          meta_keywords: service.meta_keywords || '',
          description: service.description || '',
          full_description: service.full_description,
          features: service.features || [],
          duration: service.duration || '',
          price: service.price || '',
          faqs: service.faqs || [],
        }}
        dictionary={{
          reserve_button: dictionary.servicesPage?.reserve_button || 'RESERVAR',
          whatsapp_button: dictionary.contactPage?.whatsapp_button_text || 'WhatsApp',
          duration_label: lang === 'es' ? 'Duración' : lang === 'en' ? 'Duration' : 'Dauer',
          price_label: lang === 'es' ? 'Precio' : lang === 'en' ? 'Price' : 'Preis',
          features_title: lang === 'es' ? 'Características del Servicio' : lang === 'en' ? 'Service Features' : 'Leistungsmerkmale',
          description_title: lang === 'es' ? 'Sobre este Servicio' : lang === 'en' ? 'About this Service' : 'Über diesen Service',
          benefits_title: lang === 'es' ? 'Beneficios' : lang === 'en' ? 'Benefits' : 'Vorteile',
          book_now_title: lang === 'es' ? 'Reserva tu Experiencia' : lang === 'en' ? 'Book Your Experience' : 'Buchen Sie Ihr Erlebnis',
          related_services_title: lang === 'es' ? 'Otros Servicios que te Pueden Interesar' : lang === 'en' ? 'Other Services You May Like' : 'Andere Leistungen, die Sie interessieren könnten',
          faq_title: lang === 'es' ? 'Preguntas Frecuentes' : lang === 'en' ? 'Frequently Asked Questions' : 'Häufig gestellte Fragen',
        }}
        relatedServices={relatedServices}
        lang={lang}
        faqs={Array.isArray(service.faqs) ? service.faqs : []}
      />
    </>
    );
  } catch (error) {
    console.error('Error en ServiceDetailPage:', error);
    notFound();
  }
}
