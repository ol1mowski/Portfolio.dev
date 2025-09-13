import { memo } from 'react';
import s from './CollaborationHeader.component.module.scss';
import { useTranslations } from 'next-intl';

const CollaborationHeader = memo(() => {
  const t = useTranslations('collaboration');

  return (
    <header className={s.contentSection}>
      <h2 className={s.contentSection__h3}>{t('title')}</h2>
      <p className={s.contentSection__h4}>{t('seeSteps')}</p>
    </header>
  );
});

CollaborationHeader.displayName = 'CollaborationHeader';

export default CollaborationHeader;
