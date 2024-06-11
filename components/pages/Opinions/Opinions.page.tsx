import s from "./Opinions.page.module.scss";

import rec_1 from "@/assets/Rectangle_1.png";
import companyLogo from "@/assets/Infmovilweb.jpeg";
import location from "@/assets/location.svg";
import arrow from "@/assets/arrow.png";

import Image from "next/image";

function Opinions() {
  return (
    <a href="https://jmp.sh/s/mNlcSWPwdNWRNFOaei2n" target="_blank">
      <section id="opinions" className={s.container}>
        <Image
          height={700}
          width={600}
          src={rec_1}
          alt="Reactangel"
          className={s.container__rec1}
        />
        <section className={s.container__boxWrapper}>
          <section className={s.container__boxWrapper__contentSection}>
            <h3 className={s.container__boxWrapper__contentSection__h3}>
              OPINIE
            </h3>
            <h4 className={s.container__boxWrapper__contentSection__h4}>
              Zobacz Co Myślą O Mnie Moi Klienci
            </h4>
            <section className={s.container__boxWrapper__opinionContainer}>
              <Image
                width={300}
                height={200}
                className={s.container__boxWrapper__opinionContainer__img}
                src={companyLogo}
                alt="company logo"
              />

              <section
                className={
                  s.container__boxWrapper__opinionContainer__readWrapper
                }
              >
                <span
                  className={
                    s.container__boxWrapper__opinionContainer__readWrapper__text
                  }
                >
                  Przeczytaj{" "}
                  <span
                    className={
                      s.container__boxWrapper__opinionContainer__readWrapper__text__mark
                    }
                  >
                    Opinię
                  </span>
                </span>
                <Image
                  className={
                    s.container__boxWrapper__opinionContainer__readWrapper__icon
                  }
                  width={18}
                  height={18}
                  src={arrow}
                  alt="Arrow Icon"
                />
              </section>
            </section>
          </section>
        </section>
      </section>
    </a>
  );
}

export default Opinions;
