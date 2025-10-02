'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import s from './NotFound.page.module.scss';
import { useLocale } from 'next-intl';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

function NotFound({ link }: { link: string; info?: string }) {
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();
  const t = useOptimizedTranslations('notFound');

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
          <h1 className={s.mainContent__title}>{t('title')}</h1>
          <p className={s.mainContent__subtitle}>{t('subtitle')}</p>

          <div className={s.actions}>
            <Link href={link} className={s.actions__primary}>
              <span className={s.actions__primary__icon}>🏠</span>
              {t('backHome')}
            </Link>
            <Link href={`/${locale}/Blog`} className={s.actions__secondary}>
              <span className={s.actions__secondary__icon}>📝</span>
              {t('goToBlog')}
            </Link>
          </div>

          <div className={s.quickLinks}>
            <h3 className={s.quickLinks__title}>{t('maybeInteresting')}</h3>
            <div className={s.quickLinks__grid}>
              <Link href={`/${locale}/Blog/kategorie/React`} className={s.quickLinks__item}>
                <span className={s.quickLinks__item__icon}>⚛️</span>
                <span className={s.quickLinks__item__text}>{t('reactArticles')}</span>
              </Link>
              <Link href={`/${locale}/Blog/kategorie/TypeScript`} className={s.quickLinks__item}>
                <span className={s.quickLinks__item__icon}>📘</span>
                <span className={s.quickLinks__item__text}>{t('typescriptArticles')}</span>
              </Link>
              <Link href={`/${locale}/Blog/kategorie/Next.js`} className={s.quickLinks__item}>
                <span className={s.quickLinks__item__icon}>▲</span>
                <span className={s.quickLinks__item__text}>{t('nextjsArticles')}</span>
              </Link>
              <Link href={`/${locale}/Blog/search`} className={s.quickLinks__item}>
                <span className={s.quickLinks__item__icon}>🔍</span>
                <span className={s.quickLinks__item__text}>{t('search')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
