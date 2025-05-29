import React from 'react';
import s from '../../ServiceConfigurator.page.module.scss';
import { ServiceRecommendation } from '../../types/ServiceConfigurator.types';

interface ResultCardProps {
  recommendation: ServiceRecommendation;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ recommendation, onReset }) => {
  const handleEmailClick = () => {
    window.location.href =
      'mailto:kontakt@oliwiermarkiewicz.pl?subject=Zapytanie o projekt&body=Dzień dobry, jestem zainteresowany/a realizacją projektu...';
  };

  return (
    <div className={s.container}>
      <div className={s.result}>
        <div className={s.result__header}>
          <div className={s.result__icon}>🎉</div>
          <h1 className={s.result__title}>Twoja rekomendacja</h1>
          <p className={s.result__subtitle}>
            Na podstawie Twoich odpowiedzi przygotowaliśmy idealną ofertę
          </p>
        </div>

        <div className={s.result__card}>
          <div className={s.result__card__header}>
            <h2 className={s.result__card__title}>{recommendation.title}</h2>
            <p className={s.result__card__description}>{recommendation.description}</p>
          </div>

          <div className={s.result__card__pricing}>
            <div className={s.result__card__pricing__price}>
              <span className={s.result__card__pricing__currency}>od</span>
              <span className={s.result__card__pricing__amount}>{recommendation.price}</span>
            </div>
            <div className={s.result__card__pricing__timeline}>
              Realizacja: {recommendation.timeline}
            </div>
          </div>

          <div className={s.result__card__features}>
            <h3>Twój projekt będzie zawierał:</h3>
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
              📧 Wyślij zapytanie
            </button>
            <button className={s.result__card__actions__secondary} onClick={onReset}>
              🔄 Rozpocznij ponownie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
