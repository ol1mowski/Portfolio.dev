import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { useTranslations } from 'next-intl';

interface ProjectTypeStepProps {
  selectedType: string;
  onSelect: (type: string) => void;
}

const ProjectTypeStep: React.FC<ProjectTypeStepProps> = ({ selectedType, onSelect }) => {
  const t = useTranslations('configurator.steps.projectType');

  const projectTypes = [
    { id: 'website', title: t('options.website.title'), desc: t('options.website.desc') },
    { id: 'ecommerce', title: t('options.ecommerce.title'), desc: t('options.ecommerce.desc') },
    { id: 'webapp', title: t('options.webapp.title'), desc: t('options.webapp.desc') },
    { id: 'blog', title: t('options.blog.title'), desc: t('options.blog.desc') },
  ];

  return (
    <div className={s.stepContent}>
      <h1 className={s.stepContent__title}>{t('title')}</h1>
      <p className={s.stepContent__subtitle}>{t('subtitle')}</p>

      <div className={s.options}>
        {projectTypes.map(type => (
          <button
            key={type.id}
            className={`${s.optionCard} ${selectedType === type.id ? s.optionCard__selected : ''}`}
            onClick={() => onSelect(type.id)}
          >
            <h3 className={s.optionCard__title}>{type.title}</h3>
            <p className={s.optionCard__desc}>{type.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectTypeStep;
