import s from "./StatsSection.component.module.scss";

import { memo } from 'react';

import Stat from "./Stat/Stat.component";
import KeyTechnologies from "./KeyTechnologies/KeyTechnologies.component";
import Social from "./Social/Social.component";

const STATS_DATA = [
  { title: "Zrealizowanych Projektów", number: 7 },
  { title: "Lata Doświadczenia", number: 2 }
] as const;

const StatsSection = memo(() => {
  return (
    <section 
      className={s.infoAboutMeWrapper}
      aria-label="Statystyki i technologie"
    >
      {STATS_DATA.map((stat) => (
        <Stat key={stat.title} {...stat} />
      ))}
      <KeyTechnologies />
      <Social />
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

export default StatsSection;
