import { type FC } from 'react';
import { useDynamicImport } from './hooks/useDynamicImport.hook';
import { EBOOK_LOADING_TEXT } from './constants/ebook.constants';
import { EbookWrapper } from './EbookWrapper/EbookWrapper.component';
import { EbookCtaWrapper } from './EbookCtaWrapper/EbookCtaWrapper.component';
import { EbookCtaHeader } from './EbookCtaWrapper/EbookCtaHeader/EbookCtaHeader.component';
import { EbookCtaOpinion } from './EbookCtaWrapper/EbookCtaOpinion/EbookCtaOpinion.component';
import { EbookCtaText } from './EbookCtaWrapper/EbookCtaText/EbookCtaText.component';

const Ebook: FC = () => {
  const EbookImageSide = useDynamicImport(
    () => import('./EbookImageSide/EbookImageSide.component'),
    {
      loading: () => <div>{EBOOK_LOADING_TEXT}</div>,
    }
  );

  return (
    <EbookWrapper>
      <EbookCtaWrapper>
        <EbookCtaHeader />
        <EbookCtaOpinion />
        <EbookCtaText />
      </EbookCtaWrapper>
      <EbookImageSide />
    </EbookWrapper>
  );
};

export { Ebook };
