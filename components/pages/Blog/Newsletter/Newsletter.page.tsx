import Image from "next/image";
import s from "./Newsletter.module.scss";

import newsletterImage from "@/assets/newsletter_image.svg";
import Description from "@/components/UI/Description/Description.component";
import Form from "@/components/UI/Form/Form.logic";
import { saveClientEmail } from "@/actions/SaveClientEmail";

function Newsletter() {
  return (
    <section id="newsletter" className={s.container}>
      <section className={s.container__imageSection}>
        <Image
          className={s.container__imageSection__img}
          src={newsletterImage}
          alt="Newsletter image"
          width={300}
          height={300}
        />
      </section>
      <section className={s.container__contentSection}>
        <h1 className={s.container__contentSection__title}>
          Zapisz się na nasz
          <span className={s.container__contentSection__newsletterSpan}>
            {" "}
            Newsletter
          </span>
        </h1>
        <Description
          value="Znajdziesz tu konkretne informacje o pracy w branży IT,
          najnowocześniejsze rozwiązania w branży, praktyczne porady i wiele
          więcej."
        />
        <Form action={saveClientEmail}/>
      </section>
    </section>
  );
}

export default Newsletter;
