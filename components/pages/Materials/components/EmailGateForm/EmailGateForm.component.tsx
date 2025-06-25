'use client';

import s from './EmailGateForm.component.module.scss';

import { memo, useState } from 'react';
import Button from '@/components/UI/Button/Button.component';
import { saveClientData } from '@/actions/SaveClientEmail';

interface EmailGateFormProps {
  onEmailSubmit: (email: string) => void;
}

const EmailGateForm = memo(({ onEmailSubmit }: EmailGateFormProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

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

    if (!email || !email.includes('@') || !name.trim()) {
      setError('Proszę wypełnić wszystkie pola');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('name', name);

      const result = await saveClientData(formData);

      if (result.success) {
        setSuccess('Dostęp odblokowany! Przekierowuję...');
        onEmailSubmit(email);
      } else {
        setError(result.error || 'Wystąpił błąd podczas zapisywania');
      }
    } catch (err) {
      setError('Wystąpił błąd podczas zapisywania');
      console.error('Error saving email:', err);
    } finally {
      setIsSubmitting(false);
    }
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

          {error && <div className={s.formError}>{error}</div>}
          {success && <div className={s.formSuccess}>{success}</div>}

          <div className={s.inputWrapper}>
            <div className={s.inputGroup}>
              <label htmlFor="name-input" className={s.inputLabel}>
                Twoje imię
              </label>
              <div className={s.inputContainer}>
                <span className={s.inputIcon}>👤</span>
                <input
                  id="name-input"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="np. Jan Kowalski"
                  className={s.nameInput}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

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
              disabled={isSubmitting || !email.includes('@') || !name.trim()}
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
