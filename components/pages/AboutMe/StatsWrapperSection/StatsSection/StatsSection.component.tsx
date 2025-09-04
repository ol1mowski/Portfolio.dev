import s from './StatsSection.component.module.scss';

import { memo } from 'react';

import Stat from './Stat/Stat.component';
import KeyTechnologies from './KeyTechnologies/KeyTechnologies.component';
import Social from './Social/Social.component';
import { SiteStats } from '@/actions/stats.actions';

interface StatsSectionProps {
  stats: SiteStats;
}

const StatsSection = memo(({ stats }: StatsSectionProps) => {
  const STATS_DATA = [
    { title: 'Zrealizowanych Projektów', number: stats.completedProjects },
    { title: 'Lata Doświadczenia', number: stats.experienceYears },
  ] as const;

  return (
    <section className={s.infoAboutMeWrapper} aria-label="Statystyki i technologie">
      {STATS_DATA.map(stat => (
        <Stat key={stat.title} {...stat} />
      ))}
      <KeyTechnologies />
      <Social />
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

export default StatsSection;
