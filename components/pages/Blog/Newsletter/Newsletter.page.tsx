import s from "./Newsletter.module.scss";

import Image from "next/image";

import Description from "@/components/UI/Description/Description.component";
import Form from "@/components/UI/Form/Form.logic";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";

import newsletterImage from "@/assets/newsletter_image.svg";
import { saveClientEmail } from "@/actions/SaveClientEmail";

function Newsletter() {
  return (
    <AnimationWrapper>
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
          <Form action={saveClientEmail} />
        </section>
      </section>
    </AnimationWrapper>
  );
}

export default Newsletter;
