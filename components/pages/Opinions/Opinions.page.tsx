import s from "./Opinions.page.module.scss";

import rec_1 from "@/assets/Rectangle_1.png";
import companyLogo from "@/assets/Infmovilweb.jpeg";

import Image from "next/image";
import OpinionsBoxSection from "./OpinionsBoxSection/OpinionsBoxSection.component";

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
       <OpinionsBoxSection companyLogo={companyLogo}/>
      </section>
    </section>
  );
}

export default Opinions;
