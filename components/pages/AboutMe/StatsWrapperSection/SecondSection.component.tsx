import React from 'react';
import _Image from 'next/image';
import s from './SecondSection.component.module.scss';
import ImageSection from './ImageSection/ImageSection.component';
import StatsSection from './StatsSection/StatsSection.component';
import { SiteStats } from '@/actions/stats.actions';

interface SecondSectionProps {
  stats: SiteStats;
}

export const SecondSection: React.FC<SecondSectionProps> = ({ stats }) => {
  return (
    <section className={s.secondSection}>
      <ImageSection />
      <StatsSection stats={stats} />
    </section>
  );
};

export default SecondSection;
