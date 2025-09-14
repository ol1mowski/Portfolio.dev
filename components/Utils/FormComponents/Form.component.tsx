import { type RefObject } from 'react';
import s from './Form.component.module.scss';
import Button from '@/components/UI/Button/Button.component';
import { ErrorMessage } from '@/components/UI/shared';
import { useLocale } from 'next-intl';

type FormComponentProps = {
  name: RefObject<HTMLInputElement>;
  email: RefObject<HTMLInputElement>;
  privacy: RefObject<HTMLInputElement>;
  error: string | null;
  errors: { [key: string]: string };
  isPending: boolean;
  success: string | null;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const FormComponent = ({
  name,
  email,
  privacy,
  errors,
  isPending,
  handleSubmit,
}: FormComponentProps) => {
  const locale = useLocale();

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.form__inpWrapper}>
        {errors.name ? (
          <input
            type="text"
            name="name"
            placeholder="Twoje Imię"
            ref={name}
            className={s.form__inp_err}
          />
        ) : (
          <input
            type="text"
            name="name"
            placeholder="Twoje Imię"
            ref={name}
            className={s.form__inp}
          />
        )}
        {errors.name && <ErrorMessage message={errors.name} variant="inline" showIcon={false} />}
      </div>
      <div className={s.form__inpWrapper}>
        {errors.email ? (
          <input
            type="text"
            name="email"
            placeholder="Twój Email"
            ref={email}
            className={s.form__inp_err}
          />
        ) : (
          <input
            type="text"
            name="email"
            placeholder="Twój Email"
            ref={email}
            className={s.form__inp}
          />
        )}
        {errors.email && <ErrorMessage message={errors.email} variant="inline" showIcon={false} />}
      </div>
      <div className={s.form__inpWrapper}>
        <div className={s.form__inpWrapper__privacyWrapper}>
          <label htmlFor="privacy" className={s.form__inpWrapper__privacyWrapper__label}>
            <input type="checkbox" name="privacy" id="privacy" ref={privacy} />
            <span className={s.form__inpWrapper__privacyWrapper__content}>
              *Akceptuję <a href={`/${locale}/prywatnosc`}>Politykę Prywatności i pliki cookies</a>
            </span>
          </label>
        </div>

        {errors.privacy && (
          <ErrorMessage message={errors.privacy} variant="inline" showIcon={false} />
        )}
      </div>

      <Button value={isPending ? 'Wysyłanie...' : 'Odbieram Bezpłatnie'} type="small" />
    </form>
  );
};

export default FormComponent;
