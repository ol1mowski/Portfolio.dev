import TechStack from "../../UI/techStack/techStack.component";
import HomePageInfo from "../../UI/HomePageInfo/HomePageInfoSection.component";

import HomePageImageSection from "../../UI/HomePageImageSection/HomePageImageSection.component";
import HeroSectionWrapper from "./HeroSectionWrapper/HeroSectionWrapper.component";
import MainSectionWrapper from "./MainSectionWrapper/MainSectionWrapper.component";

function HomePage() {
  return (
    <HeroSectionWrapper>
      <MainSectionWrapper>
        <HomePageImageSection />
        <HomePageInfo />
      </MainSectionWrapper>

      <TechStack />
    </HeroSectionWrapper>
  );
}

export default HomePage;
