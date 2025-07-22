import s from './Opinions.page.module.scss';
import Opinion from './Opinion/Opinion.component';
import OpinionHeader from './OpinionHeader/OpinionHeader.component';
import SectionName from './SectionName/SectionName.component';
import OpinionsWrapper from './OpinionsWrapper/OpinionsWrapper.component';
import { OPINIONS_ARIA_LABEL, OPINIONS_SECTION_ID } from './constants/opinions.constants';
import { SectionContainer } from '@/components/UI/shared';
import { OpinionsType, SingleOpinionType } from '@/types/Opinions.types';

interface OpinionsProps {
  opinions: OpinionsType[];
}

const Opinions = ({ opinions }: OpinionsProps) => {
  if (!opinions || !Array.isArray(opinions) || !opinions.length) {
    return (
      <SectionContainer
        id={OPINIONS_SECTION_ID}
        className={s.container}
        role="contentinfo"
        ariaLabel={OPINIONS_ARIA_LABEL}
      >
        <SectionName />
        <OpinionHeader />
        <div role="alert">No opinions available</div>
      </SectionContainer>
    );
  }

  const firstItem = opinions[0] as OpinionsType;
  if (!firstItem || !Array.isArray(firstItem.opinions)) {
    return (
      <SectionContainer
        id={OPINIONS_SECTION_ID}
        className={s.container}
        role="contentinfo"
        ariaLabel={OPINIONS_ARIA_LABEL}
      >
        <SectionName />
        <OpinionHeader />
        <div role="alert">Invalid opinions data structure</div>
      </SectionContainer>
    );
  }

  const opinionsList = firstItem.opinions;

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
