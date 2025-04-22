import { memo } from 'react';
import Image from 'next/image';
import s from './Step.component.module.scss';
import AnimationWrapper from '@/components/UI/AnimationWrapper/AnimationWrapper.component';
import type { CollaborationStepType } from '@/types/CollaborationStep.types';

const Step = memo(({ image, title, reverse, description, id }: CollaborationStepType) => {
  const stepClass = `${s.step} ${reverse ? s.stepR : ''}`;

  return (
    <AnimationWrapper>
      <article className={stepClass} role="listitem" aria-label={`Krok ${id}: ${title}`}>
        <Image
          className={s.step__img}
          src={image}
          width={300}
          height={300}
          alt={`Ilustracja dla kroku ${id}: ${title}`}
          loading="lazy"
        />
        <section className={s.step__content}>
          <h3 className={s.step__content__title}>{title}</h3>
          <p className={s.step__content__description}>{description}</p>
        </section>
      </article>
    </AnimationWrapper>
  );
});

Step.displayName = 'Step';

export default Step;
