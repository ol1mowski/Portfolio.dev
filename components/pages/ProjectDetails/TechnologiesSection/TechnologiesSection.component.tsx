import s from './TechnologiesSection.component.module.scss';

interface TechnologiesSectionProps {
  technologies: string[];
}

const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({ technologies }) => {
  return (
    <div className={s.technologiesContainer}>
      <ul className={s.technologiesList}>
        {technologies.map((tech, index) => (
          <li key={index} className={s.technologyItem}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologiesSection;
