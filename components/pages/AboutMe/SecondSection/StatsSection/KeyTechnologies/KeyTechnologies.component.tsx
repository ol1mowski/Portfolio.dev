import Image from "next/image";
import s from './KeyTechnologies.component.module.scss';

function KeyTechnologies() {
  return (
    <div className={s.infoWrapper}>
      <div className={s.infoWrapper__iconsWrapper}>
        <Image
          className={s.infoWrapper__iconsWrapper__img}
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978324/Portfolio/Icons/next_pjgt9f.svg"
          }
          alt="NextJs image"
          width={40}
          height={40}
        />
        <Image
          className={s.infoWrapper__iconsWrapper__img}
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978324/Portfolio/Icons/ts_ffotu1.svg"
          }
          alt="TypeScript image"
          width={40}
          height={40}
        />
        <Image
          className={s.infoWrapper__iconsWrapper__img}
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978324/Portfolio/Icons/webflow_tx3jia.svg"
          }
          alt="Webflow image"
          width={40}
          height={40}
        />
        <Image
          className={s.infoWrapper__iconsWrapper__img}
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978324/Portfolio/Icons/figma_o5qsca.svg"
          }
          alt="Figma image"
          width={40}
          height={40}
        />
      </div>
      <span className={s.infoWrapper__des}>Kluczowe Technologie</span>
    </div>
  );
}

export default KeyTechnologies;
