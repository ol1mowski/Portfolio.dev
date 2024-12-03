import AboutMeWrapper from "./AboutMeWrapper/AboutMeWrapper.component";
import InfoAboutMe from "./InfoAboutMe/InfoAboutMe.component";
import SecondSection from "./SecondSection/SecondSection.component";

function AbourMe() {
  return (
    <AboutMeWrapper>
      <InfoAboutMe />
      <SecondSection />
    </AboutMeWrapper>
  );
}

export default AbourMe;
