import s from './ProjectDescription.component.module.scss';

interface ProjectDescriptionProps {
  description: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ description }) => {
  const paragraphs = description.split('\n\n').filter(Boolean);

  return (
    <div className={s.descriptionContainer}>
      <h2 className={s.descriptionTitle}>O projekcie</h2>
      <div className={s.descriptionContent}>
        {paragraphs.length > 0 ? (
          paragraphs.map((paragraph, index) => (
            <p key={index} className={s.paragraph}>
              {paragraph}
            </p>
          ))
        ) : (
          <p className={s.paragraph}>{description}</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDescription;
