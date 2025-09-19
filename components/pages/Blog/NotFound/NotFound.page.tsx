'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import s from './NotFound.page.module.scss';
import { useLocale } from 'next-intl';

function NotFound({ link }: { link: string; info?: string }) {
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={s.container}>
      <div className={s.content}>
        <div className={`${s.number} ${mounted ? s.animate : ''}`}>
          <span className={s.number__digit}>4</span>
          <span className={s.number__digit}>0</span>
          <span className={s.number__digit}>4</span>
        </div>

        <div className={s.floatingElements}>
          <div className={s.floatingElements__circle}></div>
          <div className={s.floatingElements__triangle}></div>
          <div className={s.floatingElements__square}></div>
        </div>

        <div className={s.mainContent}>
          <h1 className={s.mainContent__title}>Ups! Strona nie została znaleziona</h1>
          <p className={s.mainContent__subtitle}>
            Strona, której szukasz, mogła zostać przeniesiona, usunięta lub po prostu nie istnieje.
            Nie martw się - pomożemy Ci znaleźć to, czego szukasz!
          </p>

          <div className={s.actions}>
            <Link href={link} className={s.actions__primary}>
              <span className={s.actions__primary__icon}>🏠</span>
              Wróć do strony głównej
            </Link>
            <Link href={`/${locale}/Blog`} className={s.actions__secondary}>
              <span className={s.actions__secondary__icon}>📝</span>
              Przejdź do bloga
            </Link>
          </div>

          <div className={s.quickLinks}>
            <h3 className={s.quickLinks__title}>Może Cię zainteresuje:</h3>
            <div className={s.quickLinks__grid}>
              <Link href={`/${locale}/Blog/kategorie/React`} className={s.quickLinks__item}>
                <span className={s.quickLinks__item__icon}>⚛️</span>
                <span className={s.quickLinks__item__text}>Artykuły React</span>
              </Link>
              <Link href={`/${locale}/Blog/kategorie/TypeScript`} className={s.quickLinks__item}>
                <span className={s.quickLinks__item__icon}>📘</span>
                <span className={s.quickLinks__item__text}>TypeScript</span>
              </Link>
              <Link href={`/${locale}/Blog/kategorie/Next.js`} className={s.quickLinks__item}>
                <span className={s.quickLinks__item__icon}>▲</span>
                <span className={s.quickLinks__item__text}>Next.js</span>
              </Link>
              <Link href={`/${locale}/Blog/search`} className={s.quickLinks__item}>
                <span className={s.quickLinks__item__icon}>🔍</span>
                <span className={s.quickLinks__item__text}>Wyszukaj</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
