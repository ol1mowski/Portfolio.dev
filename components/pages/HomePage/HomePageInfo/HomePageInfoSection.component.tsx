import { FC } from 'react';
import s from './HomePageInfoSection.component.module.scss';

import HeroHeader from './HeroHeader/HeroHeader.component';
import HeroCta from './HeroCta/HeroCta.component';

export const HomePageInfoSection: FC = () => {
  return (
    <article className={s.content}>
      <HeroHeader />
      <HeroCta />
    </article>
  );
};

export default HomePageInfoSection;
