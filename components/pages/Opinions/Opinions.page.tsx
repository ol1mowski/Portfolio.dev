'use client';

import { useEffect } from 'react';
import s from './Opinions.page.module.scss';
import Opinion from './Opinion/Opinion.component';
import OpinionHeader from './OpinionHeader/OpinionHeader.component';
import SectionName from './SectionName/SectionName.component';
import OpinionsWrapper from './OpinionsWrapper/OpinionsWrapper.component';
import { OPINIONS_ARIA_LABEL, OPINIONS_SECTION_ID } from './constants/opinions.constants';
import { SectionContainer, Loading, ErrorMessage } from '@/components/UI/shared';
import { OpinionsType, SingleOpinionType } from '@/types/Opinions.types';
import { useOpinionsData } from './hooks/useOpinionsData.hook';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

interface OpinionsProps {
  opinions: OpinionsType[];
}

const Opinions = ({ opinions }: OpinionsProps) => {
  const t = useOptimizedTranslations('opinions');
  const { opinions: fetchedOpinions, loading, error, fetchOpinions } = useOpinionsData();

  useEffect(() => {
    if (!opinions || !Array.isArray(opinions) || !opinions.length) {
      fetchOpinions();
    }
  }, [opinions, fetchOpinions]);

  const opinionsList = opinions?.[0]?.opinions || fetchedOpinions;

  if (!opinionsList || !Array.isArray(opinionsList) || !opinionsList.length) {
    return (
      <SectionContainer
        id={OPINIONS_SECTION_ID}
        className={s.container}
        role="contentinfo"
        ariaLabel={OPINIONS_ARIA_LABEL}
      >
        <SectionName />
        <OpinionHeader />
        {loading ? (
          <Loading message={t('loadingOpinions')} />
        ) : error ? (
          <ErrorMessage message={error} variant="page" showRetry onRetry={fetchOpinions} />
        ) : (
          <div role="alert">{t('noOpinionsAvailable')}</div>
        )}
      </SectionContainer>
    );
  }

  return (
    <SectionContainer
      id={OPINIONS_SECTION_ID}
      className={s.container}
      role="contentinfo"
      ariaLabel={OPINIONS_ARIA_LABEL}
    >
      <SectionName />
      <OpinionHeader />
      <OpinionsWrapper>
        {opinionsList.map((opinion: SingleOpinionType, index: number) => (
          <Opinion key={index} opinion={opinion} />
        ))}
      </OpinionsWrapper>
    </SectionContainer>
  );
};

export default Opinions;
