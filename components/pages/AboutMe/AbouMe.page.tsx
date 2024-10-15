import Image from "next/image";
import s from "./AboutMe.page.module.scss";

function AbourMe() {
  return (
    <section className={s.container}>
      <section className={s.container__aboutMeWrapper}>
        <section className={s.container__aboutMeWrapper__headerContainer}>
          <div className={s.container__aboutMeWrapper__sectionInfoWrapper}>
            <span
              className={
                s.container__aboutMeWrapper__sectionInfoWrapper__content
              }
            >
              O Mnie
            </span>
          </div>
          <div className={s.container__aboutMeWrapper__headerWrapper}>
            <h3 className={s.container__aboutMeWrapper__headerWrapper__header}>
              Cześć, Nazywam się <br /> Oliwier Markiewicz
            </h3>
          </div>
        </section>
        <div className={s.container__aboutMeWrapper__desWrapper}>
          <p className={s.container__aboutMeWrapper__desWrapper__des}>
            Zajmuję się projektowaniem oraz tworzeniem nowoczesnych i
            funkcjonalnych stron, sklepów i aplikacji internetowych w
            technologiach takich jak{" "}
            <span className={s.container__importantTextDecorate}>Webflow</span>{" "}
            ,<span className={s.container__importantTextDecorate}>Next.js</span>{" "}
            czy{" "}
            <span className={s.container__importantTextDecorate}>
              WordPress
            </span>
            , które spełniają indywidualne potrzeby klientów.
          </p>{" "}
          <p className={s.container__aboutMeWrapper__desWrapper__des}>
            Pomagam małym firmom zaistnieć w internecie, poprzez Pozycjonowanie
            wizytówki Google Moja Firma ,które zwiększają widoczność i przyciąga
            nowych klientów.
          </p>{" "}
          <p className={s.container__aboutMeWrapper__desWrapper__des}>
            Prowadzę również kanał na 
            <span className={s.container__importantTextYtDecorate}>
              YouTube
            </span>
             gdzie dzielę się wiedzą z zakresu programowania oraz tworzenia
            stron internetowych.
          </p>
        </div>
      </section>

      <section className={s.container__leftSection}>
        <section className={s.container__imgWrapper}>
          <Image
            className={s.container__imgWrapper__img}
            src={
              "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978852/Portfolio/images/my_image_ozswxx.webp"
            }
            alt="My image"
            width={250}
            height={300}
          />
        </section>

        <section className={s.container__infoAboutMeWrapper}>
          <div className={s.container__infoAboutMeWrapper__infoWrapper}>
            <h4 className={s.container__infoAboutMeWrapper__header}>10</h4>
            <span className={s.container__infoAboutMeWrapper__des}>
              Zrealizowanych Projektów
            </span>
          </div>
          <div className={s.container__infoAboutMeWrapper__infoWrapper}>
            <h4 className={s.container__infoAboutMeWrapper__header}>2</h4>
            <span className={s.container__infoAboutMeWrapper__des}>
              Lata Doświadczenia
            </span>
          </div>
          <div className={s.container__infoAboutMeWrapper__infoWrapper}>
            <div className={s.container__infoAboutMeWrapper__iconsWrapper}>
              <Image
                className={s.container__infoAboutMeWrapper__iconsWrapper__img}
                src={
                  "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978324/Portfolio/Icons/next_pjgt9f.svg"
                }
                alt="NextJs image"
                width={40}
                height={40}
              />
              <Image
                className={s.container__infoAboutMeWrapper__iconsWrapper__img}
                src={
                  "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978324/Portfolio/Icons/ts_ffotu1.svg"
                }
                alt="TypeScript image"
                width={40}
                height={40}
              />
              <Image
                className={s.container__infoAboutMeWrapper__iconsWrapper__img}
                src={
                  "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978324/Portfolio/Icons/webflow_tx3jia.svg"
                }
                alt="Webflow image"
                width={40}
                height={40}
              />
              <Image
                className={s.container__infoAboutMeWrapper__iconsWrapper__img}
                src={
                  "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978324/Portfolio/Icons/figma_o5qsca.svg"
                }
                alt="Figma image"
                width={40}
                height={40}
              />
            </div>
            <span className={s.container__infoAboutMeWrapper__des}>
              Kluczowe Technologie
            </span>
          </div>
          <div className={s.container__infoAboutMeWrapper__infoWrapper}>
            <div className={s.container__infoAboutMeWrapper__iconsWrapper}>
              <a
                href="https://www.linkedin.com/in/oliwier-markiewicz-47857228a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={s.container__infoAboutMeWrapper__iconsWrapper__img}
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978258/Portfolio/Icons/linkedIn_wz8bz2.svg"
                  }
                  alt="LinkedIn Image"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={s.container__infoAboutMeWrapper__iconsWrapper__img}
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978259/Portfolio/Icons/yt_qvjndd.svg"
                  }
                  alt="YouTube image"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://github.com/ol1mowski"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={s.container__infoAboutMeWrapper__iconsWrapper__img}
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978258/Portfolio/Icons/gh_je0wa4.svg"
                  }
                  alt="GitHub image"
                  width={30}
                  height={30}
                />
              </a>
            </div>
            <span className={s.container__infoAboutMeWrapper__des}>
              Znajdź Mnie
            </span>
          </div>
        </section>
      </section>
    </section>
  );
}

export default AbourMe;
