import Image from "next/image";
import s from "./ImageSection.component.module.scss";

function ImageSection() {
  return (
    <section className={s.imgWrapper}>
      <Image
        className={s.imgWrapper__img}
        src={
          "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728978852/Portfolio/images/my_image_ozswxx.webp"
        }
        alt="My image"
        width={250}
        height={300}
      />
    </section>
  );
}

export default ImageSection;
