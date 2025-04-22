import Image from 'next/image';
import s from './Opinion.component.module.scss';
import { SingleOpinionType } from '@/types/Opinions.types';

function Opinion({ opinion }: { opinion: SingleOpinionType }) {
  const { content, link, companyImage, companyName } = opinion;
  return (
    <div className={s.opinion}>
      <p className={s.opinion__text}>{content}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <span className={s.importantTextDecorate}>Zobacz Pełną Opinię</span>
      </a>
      <div className={s.opinion__imgWrapper}>
        <Image src={companyImage} alt="Company Logo" width={40} height={40} />
        <span>{companyName}</span>
      </div>
    </div>
  );
}

export default Opinion;
