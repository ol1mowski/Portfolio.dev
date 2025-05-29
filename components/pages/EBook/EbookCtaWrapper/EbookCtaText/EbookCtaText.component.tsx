import { FC } from 'react';
import Paragraph from '@/components/UI/Word/Paragraph.component';
import s from './EbookCtaText.component.module.scss';
import { EBOOK_TEXT_CONTENT, EBOOK_TEXT_HIGHLIGHT } from '../../constants/ebook.constants';

export const EbookCtaText: FC = () => {
  return (
    <section className={s.pWrapper}>
      <p className={s.pWrapper__p}>
        <Paragraph value={EBOOK_TEXT_CONTENT} className={s.pWrapper__p} />
        <span className={s.importantTextDecorate}>{EBOOK_TEXT_HIGHLIGHT}</span>
      </p>
    </section>
  );
};

export default EbookCtaText;
