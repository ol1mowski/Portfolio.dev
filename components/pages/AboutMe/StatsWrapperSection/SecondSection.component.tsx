import React from 'react';
import _Image from 'next/image';
import s from './SecondSection.component.module.scss';
import ImageSection from './ImageSection/ImageSection.component';
import StatsSection from './StatsSection/StatsSection.component';

export const SecondSection: React.FC = () => {
  return (
    <section className={s.secondSection}>
      <ImageSection />
      <StatsSection />
    </section>
  );
};

export default SecondSection;
