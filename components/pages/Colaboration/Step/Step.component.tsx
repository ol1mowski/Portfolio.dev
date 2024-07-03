import Image, { type StaticImageData } from "next/image";
import s from "./Step.component.module.scss";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";

function Step({
  image,
  title,
  reverse,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: string;
  reverse: boolean;
}) {
  return (
    <>
      {reverse ? (
        <AnimationWrapper>
          <section className={`${s.step} ${s.stepR}`}>
            <Image className={s.step__img} src={image} alt="step icon" />
            <section className={s.step__content}>
              <h5 className={s.step__content__title}>{title}</h5>
              <p className={s.step__content__description}>{description}</p>
            </section>
          </section>
        </AnimationWrapper>
      ) : (
        <AnimationWrapper>
          <section className={s.step}>
            <Image className={s.step__img} src={image} alt="step icon" />
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
