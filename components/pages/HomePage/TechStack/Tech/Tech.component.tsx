import { memo } from 'react';
import Image from 'next/image';
import s from './Tech.component.module.scss';

interface TechProps {
  src: string;
  href?: string;
  alt: string;
}

const Tech = memo(({ src, href, alt }: TechProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Zobacz więcej o ${alt}`}
      role="listitem"
    >
      <Image src={src} alt={alt} width={75} height={75} className={s.skill} loading="lazy" />
    </a>
  );
});

Tech.displayName = 'Tech';

export default Tech;
