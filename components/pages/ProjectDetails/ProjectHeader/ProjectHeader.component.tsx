import s from './ProjectHeader.component.module.scss';
import { formatDate } from '@/utils/dateFormatters';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

interface ProjectHeaderProps {
  title: string;
  date: string;
  githubLink: string;
  liveLink: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, date, githubLink, liveLink }) => {
  const t = useOptimizedTranslations('projects');
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
            aria-label={t('sourceCodeAriaLabel')}
          >
            <FaGithub size={20} />
            <span>{t('sourceCode')}</span>
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.link} ${s.liveLink}`}
            aria-label={t('liveVersionAriaLabel')}
          >
            <FaExternalLinkAlt size={18} />
            <span>{t('liveVersion')}</span>
          </a>
        )}
      </div>
    </header>
  );
};

export default ProjectHeader;
