import Image from "next/image";
import s from "./StatsSection.component.module.scss";
import Stat from "./Stat/Stat.component";
import IconElement from "./IconElement/IconElement.component";
import KeyTechnologies from "./KeyTechnologies/KeyTechnologies.component";
import Social from "./Social/Social.component";

function StatsSection() {
  return (
    <section className={s.infoAboutMeWrapper}>
      <Stat title="Zrealizowanych Projektów" number={7} />
      <Stat title="Lata Doświadczenia" number={2} />
      <KeyTechnologies />
      <Social />
    </section>
  );
}

export default StatsSection;
