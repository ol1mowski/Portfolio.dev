import dynamic from "next/dynamic";
import AboutMeWrapper from "./AboutMeWrapper/AboutMeWrapper.component";
import InfoAboutMe from "./InfoAboutMe/InfoAboutMe.component";

const SecondSection = dynamic(
  () => import("./SecondSection/SecondSection.component"),
  {
    loading: () => <div>Loading...</div>,
  }
);

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <InfoAboutMe />
      <SecondSection />
    </AboutMeWrapper>
  );
};

export default AboutMe;
