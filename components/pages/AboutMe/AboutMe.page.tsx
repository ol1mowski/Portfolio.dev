import { FC } from 'react';
import { AboutMeWrapper } from './AboutMeWrapper/AboutMeWrapper.component';
import { InfoAboutMe } from './InfoAboutMe/InfoAboutMe.component';
import { useDynamicImport } from './hooks/useDynamicImport.hook';
import { ABOUT_ME_LOADING_TEXT } from './constants/aboutMe.constants';

export const AboutMe: FC = () => {
  const SecondSection = useDynamicImport(
    () => import('./StatsWrapperSection/SecondSection.component'),
    {
      loading: () => <div>{ABOUT_ME_LOADING_TEXT}</div>,
    }
  );

  return (
    <AboutMeWrapper>
      <InfoAboutMe />
      <SecondSection />
    </AboutMeWrapper>
  );
};

export default AboutMe;
