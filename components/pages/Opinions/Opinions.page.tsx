import s from "./Opinions.page.module.scss";
import Opinion from "./Opinion/Opinion.component";
import OpinionHeader from "./OpinionHeader/OpinionHeader.component";
import SectionName from "./SectionName/SectionName.component";
import OpinionsWrapper from "./OpinionsWrapper/OpinionsWrapper.component";
import { useFetchData } from '@/hooks/useFetchData.hook';
import { 
  OPINIONS_ARIA_LABEL, 
  OPINIONS_FETCH_ERROR_LOG,
  OPINIONS_FETCH_ERROR_MESSAGE, 
  OPINIONS_SECTION_ID 
} from './constants/opinions.constants';
import { SectionContainer } from '@/components/UI/shared';
import { SingleOpinionType } from '@/types/Opinions.types';

export const Opinions = async () => {
  const opinionsData = await useFetchData('opinions', OPINIONS_FETCH_ERROR_LOG);

  if (!opinionsData) {
    return <p>{OPINIONS_FETCH_ERROR_MESSAGE}</p>;
  }

  const res = opinionsData[0].opinions;

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
        {res.map((opinion: SingleOpinionType, index: number) => (
          <Opinion key={index} opinion={opinion} />
        ))}
      </OpinionsWrapper>
    </SectionContainer>
  );
};

export default Opinions;
