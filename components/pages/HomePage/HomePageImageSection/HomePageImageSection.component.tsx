import Image from "next/image";
import s from './HomePageImageSection.component.module.scss';

function HomePageImageSection() {
  return (
    <Image
      src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729942605/Portfolio/images/new_main_im3s4v.svg"
      width={600}
      height={600}
      alt="oliwier img"
      className={s.img}
    />
  );
}

export default HomePageImageSection;
