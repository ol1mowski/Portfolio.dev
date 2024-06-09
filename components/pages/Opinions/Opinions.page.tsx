import s from "./Opinions.page.module.scss";

import rec_1 from "@/assets/Rectangle_1.png";
import rec_2 from "@/assets/Rectangle_2.png";
import companyLogo from "@/assets/Infmovilweb.jpeg";

import Image from "next/image";

function Opinions() {
  return (
    <section className={s.container}>
      <Image
        height={700}
        width={600}
        src={rec_1}
        alt="Reactangel"
        className={s.container__rec1}
      />
      <Image
        height={700}
        src={rec_2}
        alt="Reactangel"
        className={s.container__rec2}
      />
      <section className={s.container__boxWrapper}>
        <h2 className={s.container__boxWrapper__header}>
          Zobacz Co myślą o mnie moi{" "}
          <span className={s.container__boxWrapper__header__mark}>Klienci</span>{" "}
        </h2>
        <section className={s.container__boxWrapper__opinionContainer}>
          <Image
            height={200}
            width={200}
            src={companyLogo}
            alt="company logo"
            className={s.container__boxWrapper__opinionContainer__companyLogo}
          />
          <span
            className={
              s.container__boxWrapper__opinionContainer__read
            }
          >
            Przeczytaj Rekomendacje
          </span>
        </section>
      </section>
    </section>
  );
}

export default Opinions;
