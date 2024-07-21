import Image from "next/image";
import s from "./GoodStart.page.module.scss";

import ebook from "@/assets/bezplatny_ebook.png";

function GoodStart() {
  return (
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
          się z Tobą moim najnowszym e-bookiem, który otrzymasz zupełnie za
          darmo !
        </p>
        <button className={s.container__content__btn}>
          Odbierz Bezpłatnie
        </button>
      </section>
      <section className={s.container__image}>
        <Image src={ebook} alt="" width={500} height={600}/>
      </section>
    </section>
  );
}

export default GoodStart;
