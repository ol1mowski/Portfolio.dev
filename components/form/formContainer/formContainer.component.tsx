import { type FC, type ReactNode } from 'react';
import Success from '@/components/UI/Success/Success.component';
import { type FormState } from '@/hooks/form/useFormValidation.hook';
import s from './form-container.module.scss';
import { ErrorMessage } from '@/components/UI/shared';

interface FormContainerProps {
  formState: FormState;
  children: ReactNode;
  title?: string;
  description?: string;
}

export const FormContainer: FC<FormContainerProps> = ({
  formState,
  children,
  title,
  description,
}) => {
  const { success, error } = formState;

  if (success) {
    return <Success />;
  }

  return (
    <div className={s.container}>
      {title && (
        <h2 className={s.title}>
          {title}
          {description && <span className={s.description}>{description}</span>}
        </h2>
      )}

      {error && <ErrorMessage message={error} variant="alert" />}

      {children}
    </div>
  );
};
