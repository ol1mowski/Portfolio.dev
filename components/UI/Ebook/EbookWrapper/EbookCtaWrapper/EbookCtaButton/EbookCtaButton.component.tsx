import s from "./EbookCtaButton.component.module.scss";

function EbookCtaButton() {
  return (
    <section className={s.buttonWrapper}>
      <a href="/Ebook" target="_blank">
        <button className={s.buttonWrapper__btn}>
          Odbierz Bezpłatnie
        </button>
      </a>
    </section>
  );
}

export default EbookCtaButton;
