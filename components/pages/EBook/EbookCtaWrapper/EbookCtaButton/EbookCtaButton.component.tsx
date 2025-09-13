import { FC, memo } from 'react';
import s from './EbookCtaButton.component.module.scss';
import Button from '@/components/UI/Button/Button.component';
import { useTranslations } from 'next-intl';

export const EbookCtaButton: FC = memo(() => {
  const t = useTranslations('ebook');

  return (
    <section className={s.buttonWrapper}>
      <a
        href="/materialy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t('ctaButton')} - ${t('ebookTitle')}`}
      >
        <Button type="normal" value={t('ctaButton')} />
      </a>
    </section>
  );
});

EbookCtaButton.displayName = 'EbookCtaButton';

export default EbookCtaButton;
