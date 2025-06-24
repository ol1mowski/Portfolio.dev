'use client';

import s from './EmailGateForm.component.module.scss';

import { memo, useState } from 'react';
import Button from '@/components/UI/Button/Button.component';

interface EmailGateFormProps {
  onEmailSubmit: (email: string) => void;
}

const EmailGateForm = memo(({ onEmailSubmit }: EmailGateFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    {
      icon: '📚',
      title: 'Dostęp do wszystkich materiałów',
      description: 'Pobieraj e-booki, notatki i zasoby bez ograniczeń',
    },
    {
      icon: '🚀',
      title: 'Ekskluzywne treści',
      description: 'Otrzymuj najnowsze materiały jako pierwszy',
    },
    {
      icon: '💡',
      title: 'Praktyczne porady',
      description: 'Cotygodniowe wskazówki i najlepsze praktyki',
    },
    {
      icon: '🎯',
      title: 'Spersonalizowane rekomendacje',
      description: 'Materiały dostosowane do Twojego poziomu',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      return;
    }

    setIsSubmitting(true);

    // Symulacja wysyłania
    await new Promise(resolve => setTimeout(resolve, 1000));

    onEmailSubmit(email);
    setIsSubmitting(false);
  };

  return (
    <div className={s.emailGateContainer}>
      <div className={s.backgroundElements}>
        <div className={s.circle1}></div>
        <div className={s.circle2}></div>
        <div className={s.circle3}></div>
      </div>

      <div className={s.contentWrapper}>
        <div className={s.header}>
          <div className={s.lockIcon}>🔐</div>
          <h1 className={s.title}>
            Odblokuj <span className={s.gradient}>Centrum Materiałów</span>
          </h1>
          <p className={s.subtitle}>
            Podaj swój adres email i uzyskaj natychmiastowy dostęp do wszystkich materiałów
            edukacyjnych, e-booków i zasobów dla programistów.
          </p>
        </div>

        <div className={s.benefitsSection}>
          <h2 className={s.benefitsTitle}>Co otrzymasz?</h2>
          <div className={s.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={s.benefitCard}>
                <div className={s.benefitIcon}>{benefit.icon}</div>
                <div className={s.benefitContent}>
                  <h3 className={s.benefitTitle}>{benefit.title}</h3>
                  <p className={s.benefitDescription}>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className={s.emailForm}>
          <div className={s.formHeader}>
            <h3 className={s.formTitle}>Zacznij już teraz!</h3>
            <p className={s.formSubtitle}>Bezpłatny dostęp na zawsze</p>
          </div>

          <div className={s.inputWrapper}>
            <div className={s.inputGroup}>
              <label htmlFor="email-input" className={s.inputLabel}>
                Podaj swój adres email
              </label>
              <div className={s.inputContainer}>
                <span className={s.inputIcon}>📧</span>
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="np. jan.kowalski@gmail.com"
                  className={s.emailInput}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <button
              type="submit"
              className={s.submitButton}
              disabled={isSubmitting || !email.includes('@')}
            >
              {isSubmitting ? 'Odblokowuję...' : 'Odblokuj dostęp'}
            </button>
          </div>
        </form>

        <div className={s.socialProof}>
          <div className={s.statsRow}>
            <div className={s.stat}>
              <span className={s.statNumber}>2.5K+</span>
              <span className={s.statLabel}>Aktywnych użytkowników</span>
            </div>
            <div className={s.stat}>
              <span className={s.statNumber}>15+</span>
              <span className={s.statLabel}>Materiałów premium</span>
            </div>
            <div className={s.stat}>
              <span className={s.statNumber}>4.9/5</span>
              <span className={s.statLabel}>Średnia ocena</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

EmailGateForm.displayName = 'EmailGateForm';

export default EmailGateForm;
