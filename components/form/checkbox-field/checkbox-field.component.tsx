import { forwardRef, type RefObject, type ReactNode } from 'react';
import s from './checkbox-field.module.scss';

interface CheckboxFieldProps {
  name: string;
  children: ReactNode;
  error?: string;
  className?: string;
  innerRef?: RefObject<HTMLInputElement>;
}

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ name, children, error, className, innerRef }, ref) => {
    const inputRef = innerRef || ref;
    const hasError = Boolean(error);
    
    return (
      <div className={s.fieldWrapper}>
        <label className={`${s.label} ${className || ''}`}>
          <input 
            type="checkbox" 
            name={name} 
            ref={inputRef}
            className={s.checkbox} 
          />
          <span className={s.content}>
            {children}
          </span>
        </label>
        {hasError && <p className={s.errorMessage}>{error}</p>}
      </div>
    );
  }
);

CheckboxField.displayName = 'CheckboxField'; 