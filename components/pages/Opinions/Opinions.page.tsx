import s from './Opinions.page.module.scss';
import Opinion from './Opinion/Opinion.component';
import OpinionHeader from './OpinionHeader/OpinionHeader.component';
import SectionName from './SectionName/SectionName.component';
import OpinionsWrapper from './OpinionsWrapper/OpinionsWrapper.component';
import { getOpinions } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import {
  OPINIONS_ARIA_LABEL,
  OPINIONS_FETCH_ERROR_LOG,
  OPINIONS_FETCH_ERROR_MESSAGE,
  OPINIONS_SECTION_ID,
} from './constants/opinions.constants';
import { SectionContainer } from '@/components/UI/shared';
import { OpinionsType, SingleOpinionType } from '@/types/Opinions.types';

export const Opinions = async () => {
  try {
    const opinionsData = await getOpinions();
    
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
  } catch (error) {
    console.error(OPINIONS_FETCH_ERROR_LOG, error);
    return <p>{OPINIONS_FETCH_ERROR_MESSAGE}</p>;
  }
};

export default Opinions;
