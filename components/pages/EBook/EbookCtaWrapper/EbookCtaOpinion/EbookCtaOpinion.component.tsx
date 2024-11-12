import s from "./EbookCtaOpinion.component.module.scss";

import { memo } from 'react';
import Image from "next/image";

import { STAR_IMAGES } from "@/data/EbookImages.data";

const EbookCtaOpinion = memo(() => {
  return (
    <section 
      className={s.opinionWrapper}
      aria-label="Ocena E-booka"
    >
      <span 
        className={s.opinionWrapper__note}
        aria-label="Ocena 5.0 na 5"
      >
        5.0
      </span>
      <div 
        className={s.opinionWrapper__starsWrapper}
        role="img" 
        aria-label="5 gwiazdek"
      >
        {STAR_IMAGES.map(({ id, src, alt, width, height   }) => (
          <Image
            key={id}
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        ))}
      </div>
    </section>
  );
});

EbookCtaOpinion.displayName = 'EbookCtaOpinion';

export default EbookCtaOpinion;
