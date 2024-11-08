import { type ReactNode } from "react";
import s from "./ServicesCta.component.module.scss";
import Button from "@/components/UI/Button/Button.component";

function ServicesCta({ des }: { des: ReactNode }) {
  return (
    <section className={s.ctaWrapper} data-testid="cta-wrapper">
      <div className={s.ctaWrapper__desWrapper} data-testid="des-wrapper">
        <p className={s.ctaWrapper__desWrapper__des}>{des}</p>
      </div>
      <div className={s.ctaWrapper__buttonWrapper} data-testid="button-wrapper">
        <a href="#contact">
          <Button type="normal" value="Skontaktuj Się" />
        </a>
      </div>
    </section>
  );
}

export default ServicesCta;
