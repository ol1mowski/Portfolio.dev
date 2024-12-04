import Paragraph from "@/components/UI/Word/Paragraph.component";
import s from "./EbookCtaText.component.module.scss";

function EbookCtaText() {
  return (
    <section className={s.pWrapper}>
      <p className={s.pWrapper__p}>
        <Paragraph
          value="Aby nasza znajomość zaczęła się naprawdę dobrze, chciałbym podzielić się
        z Tobą moim najnowszym e-bookiem, który otrzymasz zupełnie"
          className={s.pWrapper__p}
        />

        <span className={s.importantTextDecorate}>za darmo !</span>
      </p>
    </section>
  );
}

export default EbookCtaText;
