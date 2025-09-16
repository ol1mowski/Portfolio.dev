import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { useTranslations } from 'next-intl';

interface TimelineStepProps {
  selectedTimeline: string;
  onSelect: (timeline: string) => void;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ selectedTimeline, onSelect }) => {
  const t = useTranslations('configurator.steps.timeline');

  const timelines = [
    { id: 'urgent', title: t('options.urgent'), multiplier: 1.5 },
    { id: 'standard', title: t('options.standard'), multiplier: 1 },
  ];

  return (
    <div className={s.stepContent}>
      <h1 className={s.stepContent__title}>{t('title')}</h1>
      <p className={s.stepContent__subtitle}>{t('subtitle')}</p>

      <div className={s.options}>
        {timelines.map(timeline => (
          <button
            key={timeline.id}
            className={`${s.optionCard} ${selectedTimeline === timeline.id ? s.optionCard__selected : ''}`}
            onClick={() => onSelect(timeline.id)}
          >
            <h3 className={s.optionCard__title}>{timeline.title}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimelineStep;
