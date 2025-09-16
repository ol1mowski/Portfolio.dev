import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { useTranslations } from 'next-intl';
import { ServiceRecommendation } from '../../types/ServiceConfigurator.types';

interface ResultCardProps {
  recommendation: ServiceRecommendation;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ recommendation, onReset }) => {
  const t = useTranslations('configurator.result');

  const handleEmailClick = () => {
    window.location.href = `mailto:oliwier.markiewicz.dev@gmail.com?subject=${t('emailSubject')}&body=${t('emailBody')}`;
  };

  return (
    <div className={s.container}>
      <div className={s.result}>
        <div className={s.result__header}>
          <div className={s.result__icon}>🎉</div>
          <h1 className={s.result__title}>{t('title')}</h1>
          <p className={s.result__subtitle}>{t('subtitle')}</p>
        </div>

        <div className={s.result__card}>
          <div className={s.result__card__header}>
            <h2 className={s.result__card__title}>{recommendation.title}</h2>
            <p className={s.result__card__description}>{recommendation.description}</p>
          </div>

          <div className={s.result__card__pricing}>
            <div className={s.result__card__pricing__price}>
              <span className={s.result__card__pricing__amount}>{recommendation.price}</span>
            </div>
          </div>

          <div className={s.result__card__features}>
            <h3>{t('featuresTitle')}</h3>
            <ul>
              {recommendation.features.map((feature, index) => (
                <li key={index}>
                  <span className={s.result__card__features__icon}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className={s.result__card__actions}>
            <button className={s.result__card__actions__primary} onClick={handleEmailClick}>
              {t('actions.sendInquiry')}
            </button>
            <button className={s.result__card__actions__secondary} onClick={onReset}>
              {t('actions.startAgain')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
