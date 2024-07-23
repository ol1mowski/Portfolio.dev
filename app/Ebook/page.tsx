import Image from "next/image";
import s from "./page.module.scss";

import ebook from "@/assets/bezplatny_ebook.png";
import Header from "@/components/UI/Header/Header.component";
import Footer from "@/components/pages/Footer/Footer.page";

function GoodStart() {
  return (
    <>
      <Header type="out"/>
      <section className={s.container}>
        <section className={s.container__content}>
          <section className={s.container__content__header}>
            <h2 className={s.container__content__header__title}>
              Jeszcze Tylko Jeden Krok
            </h2>
            <span className={s.container__content__header__line}></span>
          </section>
          <section className={s.container__form}>
            <form className={s.container__form} action="">
              <input
                type="text"
                name="formInput"
                placeholder="Twoje Imię"
                className={s.container__form__inp}
              />
              <input
                type="text"
                name="formInput"
                placeholder="Twój Email"
                className={s.container__form__inp}
              />
              <div className={s.container__form__privacyInp}>
                <input type="checkbox" name="formInput" id="privacy" />
                <span className={s.container__form__privacyInp__content}>
                  *Akceptuję <a href="/prywatnosc">Politykę Prywatnoci</a>
                </span>
              </div>

              <button className={s.container__form__btn}>
                Odbieram Bezpłatnie
              </button>
            </form>
          </section>
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
      <Footer />
    </>
  );
}

export default GoodStart;
