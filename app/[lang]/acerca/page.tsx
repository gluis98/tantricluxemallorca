import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import AboutPageClient from '@/components/pages/AboutPageClient';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <AboutPageClient
      dictionary={dictionary.aboutPage}
      milestones={dictionary.aboutPage.milestones}
    />
  );
}