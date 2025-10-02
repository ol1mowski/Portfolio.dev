import s from '../../page.module.scss';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

export default function LoadingFallback() {
  const t = useOptimizedTranslations('unsubscribe');
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
