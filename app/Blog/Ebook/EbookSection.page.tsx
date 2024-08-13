import s from "./EbookSection.module.scss";

import Image from "next/image";

import Description from "@/components/UI/Description/Description.component";
import Button from "@/components/UI/Button/Button.component";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";

import ebookImage from "@/assets/bezplatny_ebook.svg";

function EbookSection() {
  return (
    <AnimationWrapper>
      <section className={s.container}>
        <section className={s.container__contentSection}>
          <h2 className={s.container__contentSection__title}>
            Odbierz Mojego Bezpłatnego{" "}
            <span className={s.container__contentSection__ytSpan}>
              {" "}
              E-Booka
            </span>
          </h2>
          <Description value="Aby nasza znajomość zaczęła się naprawdę dobrze, chciałbym podzielić się z Tobą moim najnowszym e-bookiem, który otrzymasz zupełnie za darmo !" />
          <a href="/Ebook" target="_blank" rel="noopener noreferrer">
            <Button type="normal" value="Odbierz" />
          </a>
        </section>
        <section className={s.container__imageSection}>
          <Image
            className={s.container__imageSection__img}
            src={ebookImage}
            alt="Okładka mojego ebooka"
            width={300}
            height={300}
          />
        </section>
      </section>
    </AnimationWrapper>
  );
}

export default EbookSection;
