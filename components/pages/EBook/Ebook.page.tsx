import Image from "next/image";
import s from "./Ebook.page.module.scss";

function Ebook() {
  return (
    <section className={s.container}>
      <section className={s.container__cta}>
        <div className={s.container__cta__headerWrapper}>
          <h2 className={s.container__cta__headerWrapper__header}>
            Mój Bezpłatny <br /> E-Book
          </h2>
        </div>
        <div className={s.container__cta__opinionWrapper}>
          <span className={s.container__cta__opinionWrapper__note}>5.0</span>
          <div className={s.container__cta__opinionWrapper__starsWrapper}>
            <Image
              className={s.container__cta__opinionWrapper__starIcon}
              src={
                "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728905012/Portfolio/Icons/star_dorn3r.svg"
              }
              alt="star icon"
              width={40}
              height={40}
            />
            <Image
              className={s.container__cta__opinionWrapper__starIcon}
              src={
                "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728905012/Portfolio/Icons/star_dorn3r.svg"
              }
              alt="star icon"
              width={40}
              height={40}
            />
            <Image
              className={s.container__cta__opinionWrapper__starIcon}
              src={
                "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728905012/Portfolio/Icons/star_dorn3r.svg"
              }
              alt="star icon"
              width={40}
              height={40}
            />
            <Image
              className={s.container__cta__opinionWrapper__starIcon}
              src={
                "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728905012/Portfolio/Icons/star_dorn3r.svg"
              }
              alt="star icon"
              width={40}
              height={40}
            />
            <Image
              className={s.container__cta__opinionWrapper__starIcon}
              src={
                "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728905012/Portfolio/Icons/star_dorn3r.svg"
              }
              alt="star icon"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className={s.container__cta__pWrapper}>
          <p className={s.container__cta__pWrapper__p}>
            Aby nasza znajomość zaczęła się naprawdę dobrze, chciałbym podzielić
            się z Tobą moim najnowszym e-bookiem, który otrzymasz zupełnie{" "}
            <span className={s.container__importantTextDecorate}>
              za darmo !
            </span>
          </p>
        </div>
        <div className={s.container__cta__buttonWrapper}>
          <a href="/Ebook" target="_blank">
            <button className={s.container__cta__buttonWrapper__btn}>
              Odbierz Bezpłatnie
            </button>
          </a>
        </div>
      </section>



      <section className={s.container__imageSide}>
        <Image
          className={s.container__imageSide__backgroundItemImg}
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728905822/Portfolio/images/mobile-background-item_leiajm.webp"
          }
          alt="background-item"
          width={331}
          height={748}
        />
        <Image
          className={s.container__imageSide__ebookImg}
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728905079/Portfolio/images/ebook_mockup_sotb2v.webp"
          }
          alt="E-Book Graphic"
          width={305}
          height={500}
        />
      </section>
    </section>
  );
}

export default Ebook;
