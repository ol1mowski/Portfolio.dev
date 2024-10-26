import Image from "next/image";
import s from "./SecondSection.component.module.scss";
import ImageSection from "./ImageSection/ImageSection.component";
import StatsSection from "./StatsSection/StatsSection.component";

function SecondSection() {
  return (
    <section className={s.secondSection}>
      <ImageSection />
      <StatsSection />
    </section>
  );
}

export default SecondSection;
