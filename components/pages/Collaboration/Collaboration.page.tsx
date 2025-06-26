import s from './Collaboration.page.module.scss';

import dynamic from 'next/dynamic';

import CollaborationHeader from './CollaborationHeader/CollaborationHeader.component';
import { COLLABORATION_STEP } from '@/data/CollaborationStep.data';
import type { CollaborationStepType } from '@/types/CollaborationStep.types';

const Step = dynamic(() => import('./Step/Step.component'));
const CollaborationCta = dynamic(() => import('./CollaborationCta/CollaborationCta.component'));

const Collaboration = () => {
  return (
    <section id="collaboration" className={s.container} aria-label="Etapy współpracy">
      <CollaborationHeader />
      <section
        className={s.container__stepWrapper}
        role="list"
        aria-label="Lista etapów współpracy"
      >
        {COLLABORATION_STEP.map((step: CollaborationStepType) => (
          <Step key={step.id} {...step} />
        ))}
      </section>
      <CollaborationCta />
    </section>
  );
};

export default Collaboration;
