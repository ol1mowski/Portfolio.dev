import { useTranslations } from 'next-intl';
import s from './SectionName.component.module.scss';

function SectionName() {
  const t = useTranslations('opinions');

  return (
    <div className={s.sectionInfoWrapper}>
      <span className={s.sectionInfoWrapper__content}>{t('title')}</span>
    </div>
  );
}

export default SectionName;
