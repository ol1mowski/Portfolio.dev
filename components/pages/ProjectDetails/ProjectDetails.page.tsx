import Image from 'next/image';
import { ProjectType } from '@/types/PostType.types';
import s from './ProjectDetails.page.module.scss';
import TechnologiesSection from './TechnologiesSection/TechnologiesSection.component';
import ProjectGallery from './ProjectGallery/ProjectGallery.component';
import ProjectHeader from './ProjectHeader/ProjectHeader.component';
import ProjectDescription from './ProjectDescription/ProjectDescription.component';
import { SectionContainer } from '@/components/UI/shared';
import { useTranslations } from 'next-intl';
import { GoArrowLeft } from 'react-icons/go';

interface ProjectDetailsProps {
  project: ProjectType;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const t = useTranslations('projects');
  const { title, image, description, technologies, githubLink, liveLink, date } = project;

  const galleryImages = [
    { id: 1, src: image, alt: `${title} - ${t('mainView')}` },
    { id: 2, src: image, alt: `${title} - ${t('subpage')}` },
    { id: 3, src: image, alt: `${title} - ${t('responsive')}` },
  ];

  return (
    <div className={s.projectDetailsContainer}>
      <div className={s.backButtonWrapper}>
        <a href="/#projekty" className={s.backButton}>
          <GoArrowLeft size={20} />
          <span>{t('backToProjects')}</span>
        </a>
      </div>

      <ProjectHeader title={title} date={date} githubLink={githubLink} liveLink={liveLink} />

      <div className={s.heroImageContainer}>
        <Image src={image} alt={title} width={1200} height={600} className={s.heroImage} priority />
      </div>

      <SectionContainer
        className={s.descriptionSection}
        id="projektOpis"
        ariaLabel={t('projectDescription')}
      >
        <ProjectDescription description={description} />
      </SectionContainer>

      <SectionContainer
        className={s.technologiesSection}
        id="projektTechnologie"
        ariaLabel={`${t('technologies')} użyte w projekcie`}
      >
        <h2 className={s.sectionTitle}>{t('technologies')}</h2>
        <TechnologiesSection technologies={technologies} />
      </SectionContainer>

      <SectionContainer
        className={s.gallerySection}
        id="projektGaleria"
        ariaLabel={`${t('projectGallery')} zdjęć projektu`}
      >
        <h2 className={s.sectionTitle}>{t('projectGallery')}</h2>
        <ProjectGallery images={galleryImages} />
      </SectionContainer>
    </div>
  );
};

export default ProjectDetails;
