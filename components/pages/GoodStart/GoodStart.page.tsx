import Image from "next/image";
import s from "./GoodStart.page.module.scss";

import ebook from "@/assets/bezplatny_ebook.png";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";

function GoodStart() {
  return (
    <AnimationWrapper>
      <section className={s.container}>
        <section className={s.container__content}>
          <section className={s.container__content__header}>
            <h2 className={s.container__content__header__title}>
              Na Dobry Początek <br /> Naszej Znajomości
            </h2>
            <span className={s.container__content__header__line}></span>
          </section>
          <p className={s.container__content__p}>
            Aby nasza znajomość zaczęła się naprawdę dobrze, chciałbym podzielić
            się z Tobą moim najnowszym e-bookiem, który otrzymasz zupełnie{" "}
            <span className={s.container__content__p__special}>za darmo </span>{" "}
            !
          </p>
          <a href="/Ebook" target="_blank" rel="noopener noreferrer">
            <button className={s.container__content__btn}>
              Odbierz Bezpłatnie
            </button>
          </a>
          <p className={s.container__content__p}>
            Chcesz więcej bezpłatnej wiedzy ? Zobacz mojego
            <a href="/Blog"><span className={s.container__content__p__special}> Bloga </span>{" "}</a>
            lub mój kanał na <a href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"><span className={s.container__content__p__special}> YouTube </span>{" "}</a>
            !
          </p>
        </section>
        <section className={s.container__image}>
          <Image
            src={ebook}
            className={s.container__image__img}
            alt="bezpłatny ebook projektowanie stron internetowych"
            width={500}
            height={600}
          />
        </section>
      </section>
    </AnimationWrapper>
  );
}

export default GoodStart;
