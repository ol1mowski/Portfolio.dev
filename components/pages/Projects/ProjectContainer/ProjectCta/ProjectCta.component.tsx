import Link from 'next/link';
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
        <Link
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
        </Link>
      )}

      {liveLink && (
        <Link
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
        </Link>
      )}

      {title && (
        <Link
          href={`/projekt/${projectSlug}`}
          className={s.ctaLink}
          aria-label="Zobacz więcej szczegółów"
        >
          <div className={`${s.ctaButton} ${s.moreButton}`}>
            <FaInfoCircle />
            <span>Więcej</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProjectCta;
