import s from "./Opinions.page.module.scss";

import rec_1 from "@/assets/Rectangle_1.png";
import companyLogo from "@/assets/Infmovilweb.jpeg";

import Image from "next/image";

function Opinions() {
  return (
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
          <section className={s.container__boxWrapper__opinionContainer}></section>
        </section>
      </section>
    </section>
  );
}

export default Opinions;
