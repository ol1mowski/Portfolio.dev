import Image from 'next/image';
import s from './Opinion.component.module.scss';
import { SingleOpinionType } from '@/types/Opinions.types';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

function Opinion({ opinion }: { opinion: SingleOpinionType }) {
  const t = useOptimizedTranslations('opinions');
  const { content, link, companyImage, companyName } = opinion;
  return (
    <div className={s.opinion}>
      <p className={s.opinion__text}>{content}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <span className={s.importantTextDecorate}>{t('viewFullOpinion')}</span>
      </a>
      <div className={s.opinion__imgWrapper}>
        <Image src={companyImage} alt="Company Logo" width={40} height={40} />
        <span>{companyName}</span>
      </div>
    </div>
  );
}

export default Opinion;
