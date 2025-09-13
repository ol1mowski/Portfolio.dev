import Paragraph from '@/components/UI/Word/Paragraph.component';
import s from './InfoHeader.component.module.scss';
import { useTranslations } from 'next-intl';

function InfoHeader() {
  const t = useTranslations('aboutMe');

  return (
    <section className={s.headerContainer}>
      <div className={s.headerContainer__sectionInfoWrapper}>
        <span className={s.headerContainer__sectionInfoWrapper__content}>{t('title')}</span>
      </div>
      <div className={s.headerContainer__headerWrapper}>
        <h3 className={s.headerContainer__headerWrapper__header}>
          <Paragraph className={s.headerContainer__headerWrapper__header} value={t('greeting')} />{' '}
          <br />{' '}
          <Paragraph className={s.headerContainer__headerWrapper__header} value={t('name')} />
        </h3>
      </div>
    </section>
  );
}

export default InfoHeader;
