import Image from "next/image";
import s from "./YTSection.module.scss";

import ytImage from "@/assets/yt.svg";
import Description from "@/components/UI/Description/Description.component";
import Button from "@/components/UI/Button/Button.component";

function YTSection() {
  return (
    <section className={s.container}>
      <section className={s.container__contentSection}>
        <h2 className={s.container__contentSection__title}>
          Odwiedź mój kanał na
          <span className={s.container__contentSection__ytSpan}> YouTube</span>
        </h2>
        <Description
          value="Znajdziesz tu konkretne informacje o pracy w branży IT,
          najnowocześniejsze rozwiązania w branży, praktyczne porady i wiele
          więcej."
        />
        <a
          href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="yt" value="Odwiedź" />
        </a>
      </section>
      <section className={s.container__imageSection}>
        <Image
          className={s.container__imageSection__img}
          src={ytImage}
          alt="image to YouTube section"
          width={300}
          height={300}
        />
      </section>
    </section>
  );
}

export default YTSection;
