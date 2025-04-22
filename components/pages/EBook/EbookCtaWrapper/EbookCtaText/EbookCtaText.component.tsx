import { FC } from 'react';
import Paragraph from '@/components/UI/Word/Paragraph.component';
import s from './EbookCtaText.component.module.scss';
import { EBOOK_TEXT_CONTENT, EBOOK_TEXT_HIGHLIGHT } from '../../constants/ebook.constants';
import Button from '@/components/UI/Button/Button.component';
import Link from 'next/link';

export const EbookCtaText: FC = () => {
  return (
    <section className={s.pWrapper}>
      <p className={s.pWrapper__p}>
        <Paragraph value={EBOOK_TEXT_CONTENT} className={s.pWrapper__p} />
        <span className={s.importantTextDecorate}>{EBOOK_TEXT_HIGHLIGHT}</span>
      </p>
      <div className={s.buttonWrapper}>
        <Link href="/Ebooki/Praktyczne_Porady_Na_Co_Zwrocic_Uwage_Podczas_Projektowania_Strony_Internetowej">
          <Button value="Pobierz za darmo" type="small" />
        </Link>
      </div>
    </section>
  );
};

export default EbookCtaText;
