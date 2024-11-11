import { memo } from 'react';
import dynamic from 'next/dynamic';
import EbookWrapper from "./EbookWrapper/EbookWrapper.component";
import EbookCtaWrapper from "./EbookCtaWrapper/EbookCtaWrapper.component";
import EbookCtaHeader from "./EbookCtaWrapper/EbookCtaHeader/EbookCtaHeader.component";
import EbookCtaOpinion from "./EbookCtaWrapper/EbookCtaOpinion/EbookCtaOpinion.component";
import EbookCtaText from "./EbookCtaWrapper/EbookCtaText/EbookCtaText.component";

// Lazy load image section
const EbookImageSide = dynamic(() => import("./EbookImageSide/EbookImageSide.component"), {
  loading: () => <div>Loading...</div>
});

const EbookCtaButton = dynamic(() => import("./EbookCtaWrapper/EbookCtaButton/EbookCtaButton.component"));

const Ebook = memo(() => {
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
});

Ebook.displayName = 'Ebook';

export default Ebook;
