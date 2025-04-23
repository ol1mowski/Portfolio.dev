import Link from 'next/link';
import s from './ProjectCta.component.module.scss';

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
    <section className={s.iconSection}>
      {title && (
        <Link href={`/projekt/${projectSlug}`} className={s.detailsLink}>
          <section className={s.iconSection__icon}>
            <span className={s.iconSection__icon__span}>Więcej</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-info-circle"
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M12 9h.01"></path>
              <path d="M11 12h1v4h1"></path>
            </svg>
          </section>
        </Link>
      )}
    </section>
  );
};

export default ProjectCta;
