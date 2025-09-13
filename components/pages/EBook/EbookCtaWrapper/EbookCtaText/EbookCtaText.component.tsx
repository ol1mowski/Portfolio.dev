import { FC } from 'react';
import Paragraph from '@/components/UI/Word/Paragraph.component';
import s from './EbookCtaText.component.module.scss';
import { useTranslations } from 'next-intl';

export const EbookCtaText: FC = () => {
  const t = useTranslations('ebook');

  return (
    <section className={s.pWrapper}>
      <p className={s.pWrapper__p}>
        <Paragraph value={t('introText')} className={s.pWrapper__p} />
        <span className={s.importantTextDecorate}>{t('freeHighlight')}</span>
      </p>
    </section>
  );
};

export default EbookCtaText;
