import { FC } from 'react';
import Paragraph from '@/components/UI/Word/Paragraph.component';
import s from './EbookCtaHeader.component.module.scss';
import { useTranslations } from 'next-intl';

export const EbookCtaHeader: FC = () => {
  const t = useTranslations('ebook');

  return (
    <section className={s.headerWrapper}>
      <h2 className={s.headerWrapper__header}>
        <Paragraph
          value={`${t('myTitle')} ${t('freeTitle')}`}
          className={s.headerWrapper__header}
        />
        <br />
        <Paragraph value={t('ebookTitle')} className={s.headerWrapper__header} />
      </h2>
    </section>
  );
};

export default EbookCtaHeader;
