import { FC, memo } from 'react';
import s from './EbookCtaOpinion.component.module.scss';
import Image from 'next/image';
import { STAR_IMAGES } from '@/data/EbookImages.data';
import {
  EBOOK_RATING,
  EBOOK_RATING_ARIA_LABEL,
  EBOOK_SECTION_ARIA_LABEL,
  EBOOK_STARS_ARIA_LABEL,
} from '../../constants/ebook.constants';

export const EbookCtaOpinion: FC = memo(() => {
  return (
    <section className={s.opinionWrapper} aria-label={EBOOK_SECTION_ARIA_LABEL}>
      <span className={s.opinionWrapper__note} aria-label={EBOOK_RATING_ARIA_LABEL}>
        {EBOOK_RATING}
      </span>
      <div
        className={s.opinionWrapper__starsWrapper}
        role="img"
        aria-label={EBOOK_STARS_ARIA_LABEL}
      >
        {STAR_IMAGES.map(({ id, src, alt, width, height }) => (
          <Image key={id} src={src} alt={alt} width={width} height={height} />
        ))}
      </div>
    </section>
  );
});

EbookCtaOpinion.displayName = 'EbookCtaOpinion';

export default EbookCtaOpinion;
