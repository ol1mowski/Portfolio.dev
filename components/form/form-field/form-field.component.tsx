import { forwardRef, type RefObject } from 'react';
import s from './form-field.module.scss';

interface FormFieldProps {
  name: string;
  placeholder: string;
  type?: 'text' | 'email' | 'checkbox';
  error?: string;
  className?: string;
  innerRef?: RefObject<HTMLInputElement>;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ name, placeholder, type = 'text', error, className, innerRef }, ref) => {
    const inputRef = innerRef || ref;
    const hasError = Boolean(error);
    
    return (
      <div className={s.fieldWrapper}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          ref={inputRef}
          className={`${s.input} ${hasError ? s.inputError : ''} ${className || ''}`}
        />
        {hasError && <p className={s.errorMessage}>{error}</p>}
      </div>
    );
  }
);

FormField.displayName = 'FormField'; 