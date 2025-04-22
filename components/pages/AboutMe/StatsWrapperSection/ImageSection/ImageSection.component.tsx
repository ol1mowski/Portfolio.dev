import { memo } from 'react';
import Image from 'next/image';
import s from './ImageSection.component.module.scss';

const ImageSection = memo(() => {
  return (
    <section className={s.imgWrapper}>
      <Image
        className={s.imgWrapper__img}
        src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978852/Portfolio/images/my_image_ozswxx.webp"
        alt="Oliwier Markiewicz - Frontend Developer"
        width={250}
        height={300}
        priority
        quality={90}
      />
    </section>
  );
});

ImageSection.displayName = 'ImageSection';

export default ImageSection;
