import Header from '@/components/pages/Header/Header.component';
import Footer from '@/components/pages/Footer/Footer.page';
import NotFound from '@/components/pages/Blog/NotFound/NotFound.page';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';

export default async function NotFoundPage() {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <NotFound link={`/${locale}`} info="404 - Nie znaleziono strony" />
      <Footer />
    </NextIntlClientProvider>
  );
}
