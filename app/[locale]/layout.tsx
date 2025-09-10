import { type Locale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import RootLayoutClient from '../RootLayoutClient';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale as Locale);

  const messages = await getMessages();

  return (
    <RootLayoutClient>
      <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
    </RootLayoutClient>
  );
}
