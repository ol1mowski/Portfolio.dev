import Image, { type StaticImageData } from "next/image";
import s from './HomePageImageSection.component.module.scss';

function HomePageImageSection({ img }: { img: StaticImageData}) {
  return (
    <Image
      src={img}
      width={600}
      height={600}
      alt="oliwier img"
      className={s.img}
    />
  );
}

export default HomePageImageSection;
