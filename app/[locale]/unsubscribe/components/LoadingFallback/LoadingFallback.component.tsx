import s from '../../page.module.scss';
import { useTranslations } from 'next-intl';

export default function LoadingFallback() {
  const t = useTranslations('unsubscribe');
  return (
    <main className={s.container}>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>{t('buttons.loading')}</h1>
        </div>
      </div>
    </main>
  );
}
