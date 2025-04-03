import { FC, memo } from 'react';
import s from "./EbookCtaButton.component.module.scss";
import Link from 'next/link';
import Button from "@/components/UI/Button/Button.component";
import { EBOOK_BUTTON_ARIA_LABEL, EBOOK_BUTTON_LINK, EBOOK_BUTTON_TEXT } from '../../constants/ebook.constants';

export const EbookCtaButton: FC = memo(() => {
  return (
    <section className={s.buttonWrapper}>
      <Link 
        href={EBOOK_BUTTON_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={EBOOK_BUTTON_ARIA_LABEL}
      >
        <Button 
          type="normal" 
          value={EBOOK_BUTTON_TEXT}
        />
      </Link>
    </section>
  );
});

EbookCtaButton.displayName = 'EbookCtaButton';

export default EbookCtaButton;
