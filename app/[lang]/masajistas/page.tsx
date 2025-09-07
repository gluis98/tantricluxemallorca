import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import MasseusesPageClient from '@/components/pages/MasseusesPageClient';

export default async function MasajistasPage({
  params,
}: {
  params: Promise<{ lang: Locale }>; 
}) {
  const { lang } = await params; 
  const dictionary = await getDictionary(lang);

  return (
    <MasseusesPageClient
      dictionary={dictionary.masseusesPage}
      masseuses={dictionary.masseusesPage.masseuses}
    />
  );
}
