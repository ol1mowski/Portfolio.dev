import Image from "next/image";
import s from "./Step.component.module.scss";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";
import { type CollaborationStepType } from "@/types/CollaborationStep";

function Step({ image, title, reverse, description }: CollaborationStepType) {
  return (
    <>
      {reverse ? (
        <AnimationWrapper>
          <section className={`${s.step} ${s.stepR}`}>
            <Image
              className={s.step__img}
              src={image}
              width={300}
              height={300}
              alt="step icon"
            />
            <section className={s.step__content}>
              <h5 className={s.step__content__title}>{title}</h5>
              <p className={s.step__content__description}>{description}</p>
            </section>
          </section>
        </AnimationWrapper>
      ) : (
        <AnimationWrapper>
          <section className={s.step}>
            <Image
              className={s.step__img}
              src={image}
              width={300}
              height={300}
              alt="step icon"
            />
            <section className={s.step__content}>
              <h5 className={s.step__content__title}>{title}</h5>
              <p className={s.step__content__description}>{description}</p>
            </section>
          </section>
        </AnimationWrapper>
      )}
    </>
  );
}

export default Step;