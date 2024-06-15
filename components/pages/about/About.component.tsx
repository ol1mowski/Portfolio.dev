import s from "./About.component.module.scss";

import about from "@/assets/author_about.svg";

import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";

import AboutMeInfoSection from "../../UI/AboutMeInfoSection/AboutMeInfoSection.component";
import AboutMeImageSection from "../../UI/AboutMeImageSection/AboutMeImageSection.component";

const About = () => {
  return (
    <AnimationWrapper>
      <div id="about" />
      <section className={s.aboutContainer}>
        <AboutMeImageSection image={about} />
        <AboutMeInfoSection />
      </section>
    </AnimationWrapper>
  );
};

export default About;
