import { memo } from 'react';
import dynamic from 'next/dynamic';

import HomePageImageSection from "./HomePageImageSection/HomePageImageSection.component";
import HeroSectionWrapper from "./HeroSectionWrapper/HeroSectionWrapper.component";
import MainSectionWrapper from "./MainSectionWrapper/MainSectionWrapper.component";
import HomePageInfoSection from "./HomePageInfo/HomePageInfoSection.component";


const TechStack = dynamic(() => import("./TechStack/TechStack.component"), {
  ssr: true,
  loading: () => <div>Loading technologies...</div>
});

const HomePage = memo(() => {
  return (
    <HeroSectionWrapper>
      <MainSectionWrapper>
        <HomePageImageSection />
        <HomePageInfoSection />
      </MainSectionWrapper>
      <TechStack />
    </HeroSectionWrapper>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
