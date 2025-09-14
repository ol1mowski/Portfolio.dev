import { FC, useState } from 'react';
import s from './EmailGateForm.component.module.scss';
import { ErrorMessage } from '@/components/UI/shared';
import { saveClientData } from '@/actions/client.actions';
import { useTranslations, useLocale } from 'next-intl';

interface EmailGateFormProps {
  onEmailSubmit: (email: string) => void;
}

export const EmailGateForm: FC<EmailGateFormProps> = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const t = useTranslations('materials.emailGate');
  const locale = useLocale();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@') || !name.trim()) {
      setError(t('errors.fillFields'));
      return;
    }

    if (!acceptPolicy) {
      setError(t('policy.error'));
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
        setSuccess(t('success'));
        onEmailSubmit(email);
      } else {
        setError(result.error || t('errors.saveError'));
      }
    } catch (err) {
      setError(t('errors.connectionError'));
      console.error('Error saving email:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.emailForm}>
      <div className={s.formHeader}>
        <h3 className={s.formTitle}>{t('form.title')}</h3>
        <p className={s.formSubtitle}>{t('form.subtitle')}</p>
      </div>

      {error && <ErrorMessage message={error} variant="alert" />}
      {success && <div className={s.formSuccess}>{success}</div>}

      <div className={s.inputWrapper}>
        <div className={s.inputGroup}>
          <label htmlFor="name-input" className={s.inputLabel}>
            {t('form.nameLabel')}
          </label>
          <div className={s.inputContainer}>
            <span className={s.inputIcon}>👤</span>
            <input
              id="name-input"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={t('form.namePlaceholder')}
              className={s.nameInput}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className={s.inputGroup}>
          <label htmlFor="email-input" className={s.inputLabel}>
            {t('form.emailLabel')}
          </label>
          <div className={s.inputContainer}>
            <span className={s.inputIcon}>📧</span>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t('form.emailPlaceholder')}
              className={s.emailInput}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className={s.checkboxGroup}>
          <label className={s.checkboxLabel}>
            <input
              type="checkbox"
              checked={acceptPolicy}
              onChange={e => setAcceptPolicy(e.target.checked)}
              className={s.checkbox}
              disabled={isSubmitting}
            />
            <span className={s.checkboxText}>
              {t('policy.checkboxText')}{' '}
              <a
                href={`/${locale}/prywatnosc`}
                target="_blank"
                rel="noopener noreferrer"
                className={s.policyLink}
              >
                {t('policy.privacyPolicy')}
              </a>{' '}
              {t('policy.and')}{' '}
              <a
                href={`/${locale}/prywatnosc`}
                target="_blank"
                rel="noopener noreferrer"
                className={s.policyLink}
              >
                {t('policy.cookies')}
              </a>
            </span>
          </label>
        </div>

        <button
          type="submit"
          className={s.submitButton}
          disabled={isSubmitting || !email.includes('@') || !name.trim() || !acceptPolicy}
        >
          {isSubmitting ? t('form.loadingButton') : t('form.submitButton')}
        </button>
      </div>

      <div className={s.formFooter}>
        <p className={s.privacy}>{t('footer.privacy')}</p>
        <p className={s.guarantee}>{t('footer.guarantee')}</p>
      </div>
    </form>
  );
};
