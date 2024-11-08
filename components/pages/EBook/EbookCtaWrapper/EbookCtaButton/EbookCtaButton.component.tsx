import Button from "@/components/UI/Button/Button.component";
import s from "./EbookCtaButton.component.module.scss";

function EbookCtaButton() {
  return (
    <section className={s.buttonWrapper}>
      <a href="/Ebook" target="_blank">
        <Button type="normal" value="Odbierz Bezpłatnie" />
      </a>
    </section>
  );
}

export default EbookCtaButton;
