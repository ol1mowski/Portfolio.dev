import { FC, memo } from 'react';
import Image from 'next/image';
import s from './HomePageImageSection.component.module.scss';
import { HOME_PAGE_IMAGE } from '../constants/homePageConstants';

export const HomePageImageSection: FC = memo(() => {
  return (
    <Image
      src={HOME_PAGE_IMAGE.src}
      width={HOME_PAGE_IMAGE.width}
      height={HOME_PAGE_IMAGE.height}
      alt={HOME_PAGE_IMAGE.alt}
      className={s.img}
      priority
      loading="eager"
      quality={HOME_PAGE_IMAGE.quality}
    />
  );
});

HomePageImageSection.displayName = 'HomePageImageSection';

export default HomePageImageSection;
