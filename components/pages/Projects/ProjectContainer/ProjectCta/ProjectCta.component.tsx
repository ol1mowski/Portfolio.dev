import s from './ProjectCta.component.module.scss';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { useTranslations, useLocale } from 'next-intl';

interface ProjectCtaProps {
  liveLink: string;
  githubLink: string;
  title?: string;
}

const ProjectCta = ({ liveLink, githubLink, title }: ProjectCtaProps) => {
  const t = useTranslations('projects');
  const locale = useLocale();

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
          aria-label={t('sourceCodeAriaLabel')}
        >
          <div className={s.ctaButton}>
            <FaGithub />
            <span>{t('sourceCode')}</span>
          </div>
        </a>
      )}

      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className={s.ctaLink}
          aria-label={t('liveVersionAriaLabel')}
        >
          <div className={`${s.ctaButton} ${s.liveButton}`}>
            <FaExternalLinkAlt />
            <span>{t('liveVersion')}</span>
          </div>
        </a>
      )}

      {title && (
        <a
          href={`/${locale}/projekt/${projectSlug}`}
          className={s.ctaLink}
          aria-label={t('moreAriaLabel')}
        >
          <div className={`${s.ctaButton} ${s.moreButton}`}>
            <FaInfoCircle />
            <span>{t('more')}</span>
          </div>
        </a>
      )}
    </div>
  );
};

export default ProjectCta;
