import s from './ProjectCta.component.module.scss';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

interface ProjectCtaProps {
  liveLink: string;
  githubLink: string;
  title?: string;
}

const ProjectCta = ({ liveLink, githubLink, title }: ProjectCtaProps) => {
  const projectSlug = title
    ? title
        .toLowerCase()
        .replace(/\|/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
    : '';

  return (
    <div className={s.iconSection}>
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={s.ctaLink}
          aria-label="Zobacz kod źródłowy na GitHub"
        >
          <div className={s.ctaButton}>
            <FaGithub />
            <span>Kod źródłowy</span>
          </div>
        </a>
      )}

      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className={s.ctaLink}
          aria-label="Zobacz wersję na żywo"
        >
          <div className={`${s.ctaButton} ${s.liveButton}`}>
            <FaExternalLinkAlt />
            <span>Wersja na żywo</span>
          </div>
        </a>
      )}

      {title && (
        <a
          href={`/projekt/${projectSlug}`}
          className={s.ctaLink}
          aria-label="Zobacz więcej szczegółów"
        >
          <div className={`${s.ctaButton} ${s.moreButton}`}>
            <FaInfoCircle />
            <span>Więcej</span>
          </div>
        </a>
      )}
    </div>
  );
};

export default ProjectCta;
