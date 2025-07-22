import { FC, useState } from 'react';
import s from './EmailGateForm.component.module.scss';
import { ErrorMessage } from '@/components/UI/shared';
import { saveClientData } from '@/actions/client.actions';
import { MATERIALS_CONSTANTS } from '../../../../constants/materials.constants';

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

  const { EMAIL_GATE } = MATERIALS_CONSTANTS;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@') || !name.trim()) {
      setError(EMAIL_GATE.ERRORS.FILL_FIELDS);
      return;
    }

    if (!acceptPolicy) {
      setError(EMAIL_GATE.POLICY.ERROR);
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
        setSuccess(EMAIL_GATE.SUCCESS);
        onEmailSubmit(email);
      } else {
        setError(result.error || EMAIL_GATE.ERRORS.SAVE_ERROR);
      }
    } catch (err) {
      setError(EMAIL_GATE.ERRORS.CONNECTION_ERROR);
      console.error('Error saving email:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.emailForm}>
      <div className={s.formHeader}>
        <h3 className={s.formTitle}>{EMAIL_GATE.FORM.TITLE}</h3>
        <p className={s.formSubtitle}>{EMAIL_GATE.FORM.SUBTITLE}</p>
      </div>

      {error && <ErrorMessage message={error} variant="alert" />}
      {success && <div className={s.formSuccess}>{success}</div>}

      <div className={s.inputWrapper}>
        <div className={s.inputGroup}>
          <label htmlFor="name-input" className={s.inputLabel}>
            {EMAIL_GATE.FORM.NAME_LABEL}
          </label>
          <div className={s.inputContainer}>
            <span className={s.inputIcon}>👤</span>
            <input
              id="name-input"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={EMAIL_GATE.FORM.NAME_PLACEHOLDER}
              className={s.nameInput}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className={s.inputGroup}>
          <label htmlFor="email-input" className={s.inputLabel}>
            {EMAIL_GATE.FORM.EMAIL_LABEL}
          </label>
          <div className={s.inputContainer}>
            <span className={s.inputIcon}>📧</span>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={EMAIL_GATE.FORM.EMAIL_PLACEHOLDER}
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
              {EMAIL_GATE.POLICY.CHECKBOX_TEXT}{' '}
              <a
                href="/prywatnosc"
                target="_blank"
                rel="noopener noreferrer"
                className={s.policyLink}
              >
                {EMAIL_GATE.POLICY.PRIVACY_POLICY}
              </a>{' '}
              {EMAIL_GATE.POLICY.AND}{' '}
              <a
                href="/prywatnosc"
                target="_blank"
                rel="noopener noreferrer"
                className={s.policyLink}
              >
                {EMAIL_GATE.POLICY.COOKIES}
              </a>
            </span>
          </label>
        </div>

        <button
          type="submit"
          className={s.submitButton}
          disabled={isSubmitting || !email.includes('@') || !name.trim() || !acceptPolicy}
        >
          {isSubmitting ? EMAIL_GATE.FORM.LOADING_BUTTON : EMAIL_GATE.FORM.SUBMIT_BUTTON}
        </button>
      </div>

      <div className={s.formFooter}>
        <p className={s.privacy}>{EMAIL_GATE.FOOTER.PRIVACY}</p>
        <p className={s.guarantee}>{EMAIL_GATE.FOOTER.GUARANTEE}</p>
      </div>
    </form>
  );
};
