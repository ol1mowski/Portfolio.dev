import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';
import s from './ProjectHeader.component.module.scss';

function ProjectHeader() {
  const t = useOptimizedTranslations('projects');

  return (
    <section className={s.contentSection}>
      <h3 className={s.contentSection__h3}>{t('title')}</h3>
      <h4 className={s.contentSection__h4}>{t('subtitle')}</h4>
    </section>
  );
}

export default ProjectHeader;
