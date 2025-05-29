import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { timelines } from '../../constants/ServiceConfigurator.constants';

interface TimelineStepProps {
  selectedTimeline: string;
  onSelect: (timeline: string) => void;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ selectedTimeline, onSelect }) => {
  return (
    <div className={s.stepContent}>
      <h1 className={s.stepContent__title}>Jaki masz harmonogram?</h1>
      <p className={s.stepContent__subtitle}>Wybierz preferowany czas realizacji projektu</p>

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
