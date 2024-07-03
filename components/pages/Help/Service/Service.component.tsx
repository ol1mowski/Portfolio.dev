import Image, { type StaticImageData } from "next/image";
import s from "./Service.component.module.scss";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";

function Service({
  image,
  title,
  description,
  width,
  height,
}: {
  image: StaticImageData;
  title: string;
  description: string;
  width: number;
  height: number;
}) {
  return (
    <AnimationWrapper>
      <div className={s.service}>
        <Image
          src={image}
          alt={`${title} icon`}
          width={width}
          height={height}
        />
        {title === "Strony i Sklpy Internetowe" ? (
          <h3 className={s.service__headerWWW}>{title}</h3>
        ) : (
          <h3 className={s.service__header}>{title}</h3>
        )}

        <p className={s.service__description}>{description}</p>
      </div>
    </AnimationWrapper>
  );
}

export default Service;
