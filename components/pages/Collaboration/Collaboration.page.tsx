import s from "./Collaboration.page.module.scss";

import Step from "./Step/Step.component";
import CollaborationHeader from "./CollaborationHeader/CollaborationHeader.component";
import ColaborationCta from "./CollaborationCta/CollaborationCta.component";
import { COLLABORATION_STEP } from "@/data/CollaborationStep.data";


function Collaboration() {
  return (
    <section className={s.container}>
      <CollaborationHeader />
      <section className={s.container__stepWrapper}>
        {COLLABORATION_STEP.map((step) => (
          <Step
            reverse={step.reverse}
            key={step.id}
            id={step.id}
            title={step.title}
            image={step.image}
            description={step.description}
          />
        ))}
      </section>
      <ColaborationCta />
    </section>
  );
}

export default Collaboration;
