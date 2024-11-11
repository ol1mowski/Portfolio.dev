import { memo } from 'react';
import dynamic from 'next/dynamic';
import AboutMeWrapper from "./AboutMeWrapper/AboutMeWrapper.component";
import InfoAboutMe from "./InfoAboutMe/InfoAboutMe.component";

// Lazy load SecondSection component
const SecondSection = dynamic(() => import("./SecondSection/SecondSection.component"), {
  loading: () => <div>Loading...</div>
});

const AboutMe = memo(() => {
  return (
    <AboutMeWrapper>
      <InfoAboutMe />
      <SecondSection />
    </AboutMeWrapper>
  );
});

AboutMe.displayName = 'AboutMe';

export default AboutMe; 