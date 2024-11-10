import s from './HomePageImageSection.component.module.scss';

import { memo } from 'react';
import Image from "next/image";

const HomePageImageSection = memo(() => {
  return (
    <Image
      src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729942605/Portfolio/images/new_main_im3s4v.svg"
      width={600}
      height={600}
      alt="Oliwier Markiewicz - Frontend Developer"
      className={s.img}
      priority
      loading="eager"
      quality={90}
    />
  );
});

HomePageImageSection.displayName = 'HomePageImageSection';

export default HomePageImageSection;
