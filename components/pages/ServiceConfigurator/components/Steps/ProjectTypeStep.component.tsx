import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { projectTypes } from '../../constants/ServiceConfigurator.constants';

interface ProjectTypeStepProps {
  selectedType: string;
  onSelect: (type: string) => void;
}

const ProjectTypeStep: React.FC<ProjectTypeStepProps> = ({ selectedType, onSelect }) => {
  return (
    <div className={s.stepContent}>
      <h1 className={s.stepContent__title}>Jaki typ projektu Cię interesuje?</h1>
      <p className={s.stepContent__subtitle}>
        Wybierz jedną opcję, która najlepiej opisuje Twoje potrzeby
      </p>

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
