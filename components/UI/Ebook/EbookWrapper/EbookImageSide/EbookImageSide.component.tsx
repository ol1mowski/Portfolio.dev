import Image from "next/image";
import s from "./EbookImageSide.component.module.scss";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";

function EbookImageSide() {
  return (
    <section className={s.imageSide}>
      <Image
        className={s.imageSide__mobileBackgroundItemImg}
        src={
          "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728905822/Portfolio/images/mobile-background-item_leiajm.webp"
        }
        alt="background-item"
        width={331}
        height={748}
      />
      <Image
        className={s.imageSide__desktopBackgroundItemImg}
        src={
          "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728905074/Portfolio/images/background-item_iuezih.webp"
        }
        alt="background-item"
        width={904}
        height={889}
      />
      <AnimationWrapper>
        <Image
          className={s.imageSide__ebookImg}
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728905079/Portfolio/images/ebook_mockup_sotb2v.webp"
          }
          alt="E-Book Graphic"
          width={310}
          height={500}
        />
      </AnimationWrapper>
    </section>
  );
}

export default EbookImageSide;
