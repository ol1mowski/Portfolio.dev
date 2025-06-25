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

  const leftSideBenefits = [
    {
      icon: '📚',
      title: 'Biblioteka wiedzy',
      description: 'Dostęp do 50+ e-booków, notatek i praktycznych przewodników',
    },
    {
      icon: '🚀',
      title: 'Ekskluzywne treści',
      description: 'Pierwsze spojrzenie na nowe materiały i beta wersje',
    },
    {
      icon: '💎',
      title: 'Premium zasoby',
      description: 'Szablony, checklist i gotowe rozwiązania do projektów',
    },
  ];

  const rightSideBenefits = [
    {
      icon: '💡',
      title: 'Cotygodniowe wskazówki',
      description: 'Najlepsze praktyki programowania prosto na email',
    },
    {
      icon: '🎯',
      title: 'Spersonalizowane ścieżki',
      description: 'Materiały dostosowane do Twojego poziomu zaawansowania',
    },
    {
      icon: '🔥',
      title: 'Aktualne trendy',
      description: 'Najnowsze technologie, narzędzia i trendy w branży IT',
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

        {/* Left Side Benefits */}
        <div className={s.leftBenefits}>
          {leftSideBenefits.map((benefit, index) => (
            <div key={index} className={s.sideBenefitCard}>
              <div className={s.sideBenefitIcon}>{benefit.icon}</div>
              <h3 className={s.sideBenefitTitle}>{benefit.title}</h3>
              <p className={s.sideBenefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Right Side Benefits */}
        <div className={s.rightBenefits}>
          {rightSideBenefits.map((benefit, index) => (
            <div key={index} className={s.sideBenefitCard}>
              <div className={s.sideBenefitIcon}>{benefit.icon}</div>
              <h3 className={s.sideBenefitTitle}>{benefit.title}</h3>
              <p className={s.sideBenefitDescription}>{benefit.description}</p>
            </div>
          ))}
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

          <div className={s.formFooter}>
            <p className={s.privacy}>🔒 Twoje dane są bezpieczne. Nie wysyłamy spamu.</p>
            <p className={s.guarantee}>✅ 100% bezpłatne.</p>
          </div>
        </form>
      </div>
    </div>
  );
});

EmailGateForm.displayName = 'EmailGateForm';

export default EmailGateForm;
