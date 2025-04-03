import s from "./Opinions.page.module.scss";
import Opinion from "./Opinion/Opinion.component";
import OpinionHeader from "./OpinionHeader/OpinionHeader.component";
import SectionName from "./SectionName/SectionName.component";
import OpinionsWrapper from "./OpinionsWrapper/OpinionsWrapper.component";
import { useOpinionsFetching } from './hooks/useOpinionsFetching.hook';
import { 
  OPINIONS_ARIA_LABEL, 
  OPINIONS_FETCH_ERROR_MESSAGE, 
  OPINIONS_SECTION_ID 
} from './constants/opinions.constants';
import { SectionContainer } from '@/components/UI/shared';

export const Opinions = async () => {
  const opinionsData = await useOpinionsFetching();

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
        {res.map((opinion, index) => (
          <Opinion key={index} opinion={opinion} />
        ))}
      </OpinionsWrapper>
    </SectionContainer>
  );
};

export default Opinions;
