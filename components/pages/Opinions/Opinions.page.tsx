import s from "./Opinions.page.module.scss";

import rec_1 from "@/assets/Rectangle_1.png";
import rec_2 from "@/assets/Rectangle_2.png";
import Image from "next/image";

function Opinions() {
  return (
    <section className={s.container}>
      <Image
        height={700}
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
        <h2>Zobacz Co myślą o mnie moi Klienci</h2>
      </section>
    </section>
  );
}

export default Opinions;
