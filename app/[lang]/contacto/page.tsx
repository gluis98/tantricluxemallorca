import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import ContactPageClient from '@/components/pages/ContactPageClient';

export default async function ContactPage({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <ContactPageClient
      dictionary={dictionary.contactPage}
      services={dictionary.servicesPage.services}
    />
  );
}