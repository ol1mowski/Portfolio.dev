import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';
import s from './ContectHeaderSection.component.module.scss';

function ContectHeaderSection() {
  const t = useOptimizedTranslations('contact');

  return (
    <div className={s.title}>
      <h3 className={s.title__h3}>{t('title')}</h3>
      <h4 className={s.title__h4}>{t('subtitle')}</h4>
    </div>
  );
}

export default ContectHeaderSection;
