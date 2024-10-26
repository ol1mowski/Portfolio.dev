import HomePageImageSection from "./HomePageImageSection/HomePageImageSection.component";
import HeroSectionWrapper from "./HeroSectionWrapper/HeroSectionWrapper.component";
import MainSectionWrapper from "./MainSectionWrapper/MainSectionWrapper.component";
import HomePageInfoSection from "./HomePageInfo/HomePageInfoSection.component";
import TechStack from "./TechStack/TechStack.component";

function HomePage() {
  return (
    <HeroSectionWrapper>
      <MainSectionWrapper>
        <HomePageImageSection />
        <HomePageInfoSection />
      </MainSectionWrapper>

      <TechStack />
    </HeroSectionWrapper>
  );
}

export default HomePage;
