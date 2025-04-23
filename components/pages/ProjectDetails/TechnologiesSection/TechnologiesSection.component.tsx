import s from './TechnologiesSection.component.module.scss';
import { getTechIcon } from '@/utils/techIcons';

interface TechnologiesSectionProps {
  technologies: string[];
}

const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({ technologies }) => {
  return (
    <div className={s.technologiesContainer}>
      <ul className={s.technologiesList}>
        {technologies.map((tech, index) => (
          <li key={index} className={s.technologyItem}>
            <div className={s.technologyIcon}>{getTechIcon(tech)}</div>
            <span className={s.technologyName}>{tech}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologiesSection;
