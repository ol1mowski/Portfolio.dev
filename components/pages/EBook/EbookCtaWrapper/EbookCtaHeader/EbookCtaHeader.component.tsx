import { FC } from 'react';
import Paragraph from "@/components/UI/Word/Paragraph.component";
import s from "./EbookCtaHeader.component.module.scss";
import { EBOOK_HEADER_FIRST_LINE, EBOOK_HEADER_SECOND_LINE } from '../../constants/ebook.constants';

export const EbookCtaHeader: FC = () => {
  return (
    <section className={s.headerWrapper}>
      <h2 className={s.headerWrapper__header}>
        <Paragraph value={EBOOK_HEADER_FIRST_LINE} className={s.headerWrapper__header} /> 
        <br /> 
        <Paragraph value={EBOOK_HEADER_SECOND_LINE} className={s.headerWrapper__header} />
      </h2>
    </section>
  );
};

export default EbookCtaHeader;
