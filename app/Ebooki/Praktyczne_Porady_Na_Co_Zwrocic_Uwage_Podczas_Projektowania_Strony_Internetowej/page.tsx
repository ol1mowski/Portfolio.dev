import Image from 'next/image';
import s from './page.module.scss';

import Footer from '@/components/pages/Footer/Footer.page';
import Header from '@/components/pages/Header/Header.component';

import { saveClientData } from '@/actions/client.actions';
import { validateSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { EbookForm } from '@/components/form/ebook-form/ebook-form.component';

export const metadata = {
  title: 'Bezpłatny E-book - Projektowanie Stron Internetowych',
  description:
    'Pobierz bezpłatny e-book o praktycznych poradach podczas projektowania stron internetowych',
};

export default async function EbookDownloadPage() {
  const { session } = await validateSession();

  if (session) {
    redirect('/Thanks/ebook');
  }

  return (
    <>
      <Header />
      <section className={s.container}>
        <section className={s.container__content}>
          <section className={s.container__content__header}>
            <h2 className={s.container__content__header__title}>Jeszcze Tylko Jeden Krok</h2>
            <span className={s.container__content__header__line}></span>
          </section>
          <section className={s.container__form}>
            <EbookForm action={saveClientData} redirectPath="/Thanks/ebook" />
          </section>
        </section>
        <section className={s.container__image}>
          <Image
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1731069228/Portfolio/images/bezplatny_ebook_z6eetq.webp"
            className={s.container__image__img}
            alt="bezpłatny ebook projektowanie stron internetowych"
            width={500}
            height={600}
            priority
          />
        </section>
      </section>
      <Footer />
    </>
  );
}
