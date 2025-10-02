import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';
import s from './SectionName.component.module.scss';

function SectionName() {
  const t = useOptimizedTranslations('opinions');

  return (
    <div className={s.sectionInfoWrapper}>
      <span className={s.sectionInfoWrapper__content}>{t('title')}</span>
    </div>
  );
}

export default SectionName;
