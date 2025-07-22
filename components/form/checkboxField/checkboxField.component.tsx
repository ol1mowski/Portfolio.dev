import { forwardRef, type RefObject, type ReactNode } from 'react';
import s from './checkboxField.module.scss';
import { ErrorMessage } from '@/components/UI/shared';

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
          <input type="checkbox" name={name} ref={inputRef} className={s.checkbox} />
          <span className={s.content}>{children}</span>
        </label>
        {hasError && error && <ErrorMessage message={error} variant="inline" showIcon={false} />}
      </div>
    );
  }
);

CheckboxField.displayName = 'CheckboxField';
