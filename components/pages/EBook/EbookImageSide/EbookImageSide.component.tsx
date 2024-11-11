import s from "./EbookImageSide.component.module.scss";

import { memo } from 'react';
import Image from "next/image";

import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";

const EbookImageSide = memo(() => {
  return (
    <section className={s.imageSide} aria-label="E-book preview">
      <Image
        className={s.imageSide__mobileBackgroundItemImg}
        src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1728905822/Portfolio/images/mobile-background-item_leiajm.webp"
        alt="Mobile background decoration"
        width={331}
        height={748}
        loading="lazy"
      />
      <Image
        className={s.imageSide__desktopBackgroundItemImg}
        src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1728905074/Portfolio/images/background-item_iuezih.webp"
        alt="Desktop background decoration"
        width={904}
        height={889}
        loading="lazy"
      />
      <AnimationWrapper>
        <Image
          className={s.imageSide__ebookImg}
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1728905079/Portfolio/images/ebook_mockup_sotb2v.webp"
          alt="E-Book Preview"
          width={310}
          height={500}
          priority
        />
      </AnimationWrapper>
    </section>
  );
});

EbookImageSide.displayName = 'EbookImageSide';

export default EbookImageSide;
