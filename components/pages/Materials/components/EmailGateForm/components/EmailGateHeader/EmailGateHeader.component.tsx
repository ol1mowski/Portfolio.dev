import { FC } from 'react';
import { useTranslations } from 'next-intl';
import s from './EmailGateHeader.component.module.scss';

export const EmailGateHeader: FC = () => {
  const t = useTranslations('materials.emailGate');

  return (
    <div className={s.header}>
      <div className={s.lockIcon}>🔐</div>
      <h1 className={s.title}>
        {t('title').split(' ')[0]}{' '}
        <span className={s.gradient}>{t('title').split(' ').slice(1).join(' ')}</span>
      </h1>
      <p className={s.subtitle}>{t('subtitle')}</p>
    </div>
  );
};
