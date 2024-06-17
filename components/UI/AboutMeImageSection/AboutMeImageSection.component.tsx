import s from "./AboutMeImageSection.component.module.scss";

import Image, { type StaticImageData } from "next/image";

function AboutMeImageSection({ image }: { image: StaticImageData }) {
  return (
    <div className={s.imageSection}>
      <Image
        width={600}
        height={600}
        src={image}
        alt="work place"
        className={s.imageSection__img}
      />
    </div>
  );
}

export default AboutMeImageSection;
