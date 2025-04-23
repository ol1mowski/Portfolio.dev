import Image from 'next/image';
import s from './ProjectImage.component.module.scss';

const ProjectImage = ({ image }: { image: string }) => {
  return (
    <section className={s.imgSection}>
      <Image
        src={image}
        width={605}
        height={320}
        alt="Zdjęcie projektu"
        className={s.projectImage}
        priority
      />
    </section>
  );
};

export default ProjectImage;
