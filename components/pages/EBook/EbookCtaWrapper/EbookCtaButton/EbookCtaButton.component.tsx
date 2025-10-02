import { FC, memo } from 'react';
import s from './EbookCtaButton.component.module.scss';
import Button from '@/components/UI/Button/Button.component';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';
import { useLocale } from 'next-intl';

export const EbookCtaButton: FC = memo(() => {
  const t = useOptimizedTranslations('ebook');
  const locale = useLocale();

  return (
    <section className={s.buttonWrapper}>
      <a
        href={`/${locale}/materialy`}
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
