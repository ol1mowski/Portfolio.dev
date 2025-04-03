import { FC } from 'react';
import HomePageImageSection from './HomePageImageSection/HomePageImageSection.component';
import HeroSectionWrapper from './HeroSectionWrapper/HeroSectionWrapper.component';
import MainSectionWrapper from './MainSectionWrapper/MainSectionWrapper.component';
import HomePageInfoSection from './HomePageInfo/HomePageInfoSection.component';
import { useDynamicImport } from './hooks/useDynamicImport.hook';

export const HomePage: FC = () => {
  const TechStack = useDynamicImport(
    () => import('./TechStack/TechStack.component'),
    {
      ssr: true,
      loading: () => <div>Loading technologies...</div>
    }
  );

  return (
    <HeroSectionWrapper>
      <MainSectionWrapper>
        <HomePageImageSection />
        <HomePageInfoSection />
      </MainSectionWrapper>
      <TechStack />
    </HeroSectionWrapper>
  );
};

export default HomePage;
