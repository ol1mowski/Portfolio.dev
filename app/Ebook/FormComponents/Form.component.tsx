import React, { RefObject } from "react";
import s from "./Form.component.module.scss";

interface FormComponentProps {
  name: RefObject<HTMLInputElement>;
  email: RefObject<HTMLInputElement>;
  privacy: RefObject<HTMLInputElement>;
  error: string | null;
  errors: { [key: string]: string };
  isPending: boolean;
  success: string | null;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({
  name,
  email,
  privacy,
  errors,
  isPending,
  handleSubmit,
}) => (
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
      {errors.name && <p className={s.form__error}>{errors.name}</p>}
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
      {errors.email && <p className={s.form__error}>{errors.email}</p>}
    </div>
    <div className={s.form__inpWrapper}>
      <div className={s.form__inpWrapper__privacyWrapper}>
        <input type="checkbox" name="privacy" id="privacy" ref={privacy} />
        <span className={s.form__inpWrapper__privacyWrapper__content}>
          *Akceptuję{" "}
          <a href="/prywatnosc">Politykę Prywatności i pliki cookies</a>
        </span>
      </div>
      {errors.privacy && (
        <span className={s.form__error}>{errors.privacy}</span>
      )}
    </div>

    <button type="submit" className={s.form__btn} disabled={isPending}>
      {isPending ? "Wysyłanie..." : "Odbieram Bezpłatnie"}
    </button>
  </form>
);

export default FormComponent;
