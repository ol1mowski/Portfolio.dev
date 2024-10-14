import Image from "next/image";
import s from "./EbookCtaOpinion.component.module.scss";
import { STAR_IMAGES } from "@/data/EbookImages.data";

function EbookCtaOpinion() {
  return (
    <section className={s.opinionWrapper}>
      <span className={s.opinionWrapper__note}>5.0</span>
      <div className={s.opinionWrapper__starsWrapper}>
        {STAR_IMAGES.map((val) => (
          <Image
            key={val.id}
            src={val.src}
            alt={val.alt}
            width={val.width}
            height={val.height}
          />
        ))}
      </div>
    </section>
  );
}

export default EbookCtaOpinion;
