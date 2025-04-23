import s from './ProjectDescription.component.module.scss';

interface ProjectDescriptionProps {
  description: string;
}

const ProjectDescription = ({ description }: ProjectDescriptionProps) => {
  return (
    <div className={s.descriptionContainer}>
      <p className={s.description}>{description}</p>
    </div>
  );
};

export default ProjectDescription;
