import Paragraph from "@/components/UI/Word/Paragraph.component";
import s from "./EbookCtaHeader.component.module.scss";

function EbookCtaHeader() {
  return (
    <section className={s.headerWrapper}>
      <h2 className={s.headerWrapper__header}>
        <Paragraph value="Mój Bezpłatny" className={s.headerWrapper__header} /> <br /> <Paragraph value="E-Book" className={s.headerWrapper__header} />
      </h2>
    </section>
  );
}

export default EbookCtaHeader;
