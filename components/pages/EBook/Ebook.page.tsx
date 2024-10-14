import EbookWrapper from "@/components/UI/Ebook/EbookWrapper/EbookWrapper.component";
import EbookCtaHeader from "@/components/UI/Ebook/EbookWrapper/EbookCtaWrapper/EbookCtaHeader/EbookCtaHeader.component";
import EbookCtaOpinion from "@/components/UI/Ebook/EbookWrapper/EbookCtaWrapper/EbookCtaOpinion/EbookCtaOpinion.component";
import EbookCtaText from "@/components/UI/Ebook/EbookWrapper/EbookCtaWrapper/EbookCtaText/EbookCtaText.component";
import EbookCtaWrapper from "@/components/UI/Ebook/EbookWrapper/EbookCtaWrapper/EbookCtaWrapper.component";
import EbookCtaButton from "@/components/UI/Ebook/EbookWrapper/EbookCtaWrapper/EbookCtaButton/EbookCtaButton.component";
import EbookImageSide from "@/components/UI/Ebook/EbookWrapper/EbookImageSide/EbookImageSide.component";

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
