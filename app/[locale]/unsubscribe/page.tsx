import { setRequestLocale } from 'next-intl/server';
import { type Locale } from 'next-intl';
import UnsubscribePageClient from './UnsubscribePageClient';

export default async function UnsubscribePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <UnsubscribePageClient />;
}
