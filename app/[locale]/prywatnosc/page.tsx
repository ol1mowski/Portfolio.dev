import { setRequestLocale } from 'next-intl/server';
import { type Locale } from 'next-intl';
import Privacy from './Privacy/Privacy.page';
import Header from '@/components/pages/Header/Header.component';
import Footer from '@/components/pages/Footer/Footer.page';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <Privacy />
      <Footer />
    </>
  );
}
