import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import ServicesPageClient from '@/components/pages/ServicesPageClient';

export default async function ServicesPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <ServicesPageClient
      services={dictionary.servicesPage.services}
      packages={dictionary.servicesPage.packages}
      faqs={dictionary.servicesPage.faqs}
      dictionary={dictionary.servicesPage}
    />
  );
}