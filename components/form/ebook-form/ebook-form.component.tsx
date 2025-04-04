'use client';

import { type FC } from 'react';
import Button from '@/components/UI/Button/Button.component';
import { FormField } from '../form-field/form-field.component';
import { CheckboxField } from '../checkbox-field/checkbox-field.component';
import { useFormValidation } from '@/hooks/form/use-form-validation.hook';
import s from './ebook-form.module.scss';

interface EbookFormProps {
  action: (formData: FormData) => Promise<{ success: boolean } | void>;
  redirectPath?: string;
}

export const EbookForm: FC<EbookFormProps> = ({ 
  action, 
  redirectPath = '/Thanks/ebook' 
}) => {
  const { formState, formRefs, handleSubmit } = useFormValidation({
    action,
    redirectPath
  });

  const { isPending, errors, error } = formState;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {error && (
        <div className={s.formError}>
          {error}
        </div>
      )}
      
      <FormField 
        name="name" 
        placeholder="Twoje Imię"
        innerRef={formRefs.name}
        error={errors.name}
      />
      
      <FormField 
        name="email" 
        placeholder="Twój Email"
        type="email"
        innerRef={formRefs.email}
        error={errors.email}
      />
      
      <CheckboxField 
        name="privacy"
        innerRef={formRefs.privacy}
        error={errors.privacy}
      >
        *Akceptuję <a href="/prywatnosc">Politykę Prywatności i pliki cookies</a>
      </CheckboxField>

      <Button
        value={isPending ? "Wysyłanie..." : "Odbieram Bezpłatnie"}
        type="small"
      />
    </form>
  );
}; 