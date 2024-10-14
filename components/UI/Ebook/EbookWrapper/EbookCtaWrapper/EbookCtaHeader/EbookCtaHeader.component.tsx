import s from "./EbookCtaHeader.component.module.scss";

function EbookCtaHeader() {
  return (
    <section className={s.headerWrapper}>
      <h2 className={s.headerWrapper__header}>
        Mój Bezpłatny <br /> E-Book
      </h2>
    </section>
  );
}

export default EbookCtaHeader;
