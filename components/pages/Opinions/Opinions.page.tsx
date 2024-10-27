import s from "./Opinions.page.module.scss";

import Opinion from "./Opinion/Opinion.component";
import OpinionHeader from "./OpinionHeader/OpinionHeader.component";
import SectionName from "./SectionName/SectionName.component";
import OpinionsWrapper from "./OpinionsWrapper/OpinionsWrapper.component";

function Opinions() {
  return (
    <section id="opinions" className={s.container}>
      <SectionName />
      <OpinionHeader />
      <OpinionsWrapper>
        <Opinion />
      </OpinionsWrapper>
    </section>
  );
}

export default Opinions;
