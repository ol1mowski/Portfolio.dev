'use client';

import { useEffect, useState } from 'react';
import s from './Opinions.page.module.scss';
import Opinion from './Opinion/Opinion.component';
import OpinionHeader from './OpinionHeader/OpinionHeader.component';
import SectionName from './SectionName/SectionName.component';
import OpinionsWrapper from './OpinionsWrapper/OpinionsWrapper.component';
import {
  OPINIONS_ARIA_LABEL,
  OPINIONS_FETCH_ERROR_LOG,
  OPINIONS_FETCH_ERROR_MESSAGE,
  OPINIONS_SECTION_ID,
} from './constants/opinions.constants';
import { SectionContainer } from '@/components/UI/shared';
import { OpinionsType, SingleOpinionType } from '@/types/Opinions.types';

export const Opinions = () => {
  const [opinionsData, setOpinionsData] = useState<OpinionsType[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        const response = await fetch('/api/opinions');
        if (!response.ok) {
          throw new Error('Failed to fetch opinions');
        }
        const data = await response.json();
        setOpinionsData(data);
      } catch (err) {
        console.error(OPINIONS_FETCH_ERROR_LOG, err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    fetchOpinions();
  }, []);

  if (loading) {
    return <div>Ładowanie opinii...</div>;
  }

  if (error) {
    return <p>{OPINIONS_FETCH_ERROR_MESSAGE}</p>;
  }

  if (!opinionsData || !Array.isArray(opinionsData) || !opinionsData.length) {
    console.error(OPINIONS_FETCH_ERROR_LOG);
    return <p>{OPINIONS_FETCH_ERROR_MESSAGE}</p>;
  }

  const firstItem = opinionsData[0] as OpinionsType;
  if (!firstItem || !Array.isArray(firstItem.opinions)) {
    console.error('Nieprawidłowa struktura danych opinii');
    return <p>{OPINIONS_FETCH_ERROR_MESSAGE}</p>;
  }

  const opinions = firstItem.opinions;

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
        {opinions.map((opinion: SingleOpinionType, index: number) => (
          <Opinion key={index} opinion={opinion} />
        ))}
      </OpinionsWrapper>
    </SectionContainer>
  );
};

export default Opinions;
