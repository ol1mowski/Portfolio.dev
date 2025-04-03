import { FC } from 'react';
import { useDynamicImport } from './hooks/useDynamicImport.hook';
import { EBOOK_LOADING_TEXT } from './constants/ebook.constants';
import { EbookWrapper } from './EbookWrapper/EbookWrapper.component';
import { EbookCtaWrapper } from './EbookCtaWrapper/EbookCtaWrapper.component';
import { EbookCtaHeader } from './EbookCtaWrapper/EbookCtaHeader/EbookCtaHeader.component';
import { EbookCtaOpinion } from './EbookCtaWrapper/EbookCtaOpinion/EbookCtaOpinion.component';
import { EbookCtaText } from './EbookCtaWrapper/EbookCtaText/EbookCtaText.component';

export const Ebook: FC = () => {
  const EbookImageSide = useDynamicImport(
    () => import('./EbookImageSide/EbookImageSide.component'),
    {
      loading: () => <div>{EBOOK_LOADING_TEXT}</div>
    }
  );

  const EbookCtaButton = useDynamicImport(
    () => import('./EbookCtaWrapper/EbookCtaButton/EbookCtaButton.component')
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

export default Ebook;
