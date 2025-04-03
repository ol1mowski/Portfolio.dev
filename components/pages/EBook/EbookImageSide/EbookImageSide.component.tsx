import { FC, memo } from 'react';
import s from "./EbookImageSide.component.module.scss";
import Image from "next/image";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";
import { EBOOK_IMAGES, EBOOK_IMAGE_SIDE_ARIA_LABEL } from '../constants/ebook.constants';

export const EbookImageSide: FC = memo(() => {
  const { mobileBackground, desktopBackground, ebookPreview } = EBOOK_IMAGES;
  
  return (
    <section className={s.imageSide} aria-label={EBOOK_IMAGE_SIDE_ARIA_LABEL}>
      <Image
        className={s.imageSide__mobileBackgroundItemImg}
        src={mobileBackground.src}
        alt={mobileBackground.alt}
        width={mobileBackground.width}
        height={mobileBackground.height}
        loading="lazy"
      />
      <Image
        className={s.imageSide__desktopBackgroundItemImg}
        src={desktopBackground.src}
        alt={desktopBackground.alt}
        width={desktopBackground.width}
        height={desktopBackground.height}
        loading="lazy"
      />
      <AnimationWrapper>
        <Image
          className={s.imageSide__ebookImg}
          src={ebookPreview.src}
          alt={ebookPreview.alt}
          width={ebookPreview.width}
          height={ebookPreview.height}
          priority
        />
      </AnimationWrapper>
    </section>
  );
});

EbookImageSide.displayName = 'EbookImageSide';

export default EbookImageSide;
