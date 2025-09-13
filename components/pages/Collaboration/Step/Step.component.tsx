import { memo } from 'react';
import Image from 'next/image';
import s from './Step.component.module.scss';
import AnimationWrapper from '@/components/UI/AnimationWrapper/AnimationWrapper.component';
import type { CollaborationStepType } from '@/types/CollaborationStep.types';
import { useTranslations } from 'next-intl';

const Step = memo(({ image, titleKey, reverse, descriptionKey, id }: CollaborationStepType) => {
  const t = useTranslations();
  const stepClass = `${s.step} ${reverse ? s.stepR : ''}`;

  const title = t(titleKey);
  const description = t(descriptionKey);

  return (
    <AnimationWrapper>
      <div
        className={stepClass}
        role="listitem"
        aria-label={`Krok ${id}: ${title}`}
        style={{ position: 'relative' }}
      >
        <Image
          className={s.step__img}
          src={image}
          width={300}
          height={300}
          alt={`Ilustracja dla kroku ${id}: ${title}`}
          loading={id === 1 ? 'eager' : 'lazy'}
          priority={id === 1}
        />
        <div className={s.step__content}>
          <h3 className={s.step__content__title}>{title}</h3>
          <p className={s.step__content__description}>{description}</p>
        </div>
      </div>
    </AnimationWrapper>
  );
});

Step.displayName = 'Step';

export default Step;
