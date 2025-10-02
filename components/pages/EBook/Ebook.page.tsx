import { type FC } from 'react';
import { useDynamicImport } from './hooks/useDynamicImport.hook';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';
import { EbookWrapper } from './EbookWrapper/EbookWrapper.component';
import { EbookCtaWrapper } from './EbookCtaWrapper/EbookCtaWrapper.component';
import { EbookCtaHeader } from './EbookCtaWrapper/EbookCtaHeader/EbookCtaHeader.component';
import { EbookCtaOpinion } from './EbookCtaWrapper/EbookCtaOpinion/EbookCtaOpinion.component';
import { EbookCtaText } from './EbookCtaWrapper/EbookCtaText/EbookCtaText.component';
import { EbookCtaButton } from './EbookCtaWrapper/EbookCtaButton/EbookCtaButton.component';

const Ebook: FC = () => {
  const t = useOptimizedTranslations('ebook');

  const EbookImageSide = useDynamicImport(
    () => import('./EbookImageSide/EbookImageSide.component'),
    {
      loading: () => <div>Loading...</div>,
    }
  );

  return (
    <EbookWrapper>
      <EbookCtaWrapper>
        <EbookCtaHeader />
        <EbookCtaOpinion />
        <EbookCtaText />
        <EbookCtaButton />
      </EbookCtaWrapper>
      <EbookImageSide />
    </EbookWrapper>
  );
};

export { Ebook };
