import s from './ProjectHeader.component.module.scss';
import { formatDate } from '@/utils/dateFormatters';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectHeaderProps {
  title: string;
  date: string;
  githubLink: string;
  liveLink: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, date, githubLink, liveLink }) => {
  const formattedDate = formatDate(date);

  return (
    <header className={s.header}>
      <div className={s.titleContainer}>
        <h1 className={s.title}>{title}</h1>
        <time className={s.date}>{formattedDate}</time>
      </div>
      <div className={s.links}>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={s.link}
            aria-label="Zobacz kod źródłowy na GitHub"
          >
            <FaGithub size={20} />
            <span>Kod źródłowy</span>
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.link} ${s.liveLink}`}
            aria-label="Zobacz stronę na żywo"
          >
            <FaExternalLinkAlt size={18} />
            <span>Wersja na żywo</span>
          </a>
        )}
      </div>
    </header>
  );
};

export default ProjectHeader;
