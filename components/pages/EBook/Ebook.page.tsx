import EbookCtaHeader from "@/components/pages/EBook/EbookCtaWrapper/EbookCtaHeader/EbookCtaHeader.component";
import EbookCtaOpinion from "@/components/pages/EBook/EbookCtaWrapper/EbookCtaOpinion/EbookCtaOpinion.component";
import EbookCtaText from "@/components/pages/EBook/EbookCtaWrapper/EbookCtaText/EbookCtaText.component";
import EbookCtaWrapper from "@/components/pages/EBook/EbookCtaWrapper/EbookCtaWrapper.component";

import EbookWrapper from "./EbookWrapper/EbookWrapper.component";
import EbookImageSide from "./EbookImageSide/EbookImageSide.component";
import EbookCtaButton from "./EbookCtaWrapper/EbookCtaButton/EbookCtaButton.component";

function Ebook() {
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
}

export default Ebook;
