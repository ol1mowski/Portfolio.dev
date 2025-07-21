import { useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { validateEmail } from '@/utils/validation';

export interface FormErrors {
  [key: string]: string;
}

export interface FormState {
  isPending: boolean;
  error: string | null;
  success: string | null;
  errors: FormErrors;
}

export interface FormRefs {
  email: React.RefObject<HTMLInputElement>;
  name: React.RefObject<HTMLInputElement>;
  privacy: React.RefObject<HTMLInputElement>;
}

interface UseFormValidationProps {
  action: (formData: FormData) => Promise<{ success: boolean } | void>;
  redirectPath?: string;
}

export const useFormValidation = ({ action, redirectPath }: UseFormValidationProps) => {
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>({
    isPending: false,
    error: null,
    success: null,
    errors: {},
  });

  const formRefs: FormRefs = {
    email: useRef<HTMLInputElement>(null),
    name: useRef<HTMLInputElement>(null),
    privacy: useRef<HTMLInputElement>(null),
  };

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    const nameValue = formRefs.name.current?.value.trim() || '';
    const emailValue = formRefs.email.current?.value.trim() || '';
    const privacyChecked = formRefs.privacy.current?.checked || false;

    if (!nameValue) {
      newErrors.name = '*Imię jest wymagane';
    } else if (nameValue.length < 3) {
      newErrors.name = '*Imię musi zawierać co najmniej 3 litery';
    }

    if (!emailValue) {
      newErrors.email = '*Email jest wymagany';
    } else if (!validateEmail(emailValue)) {
      newErrors.email = '*Nieprawidłowy format email';
    }

    if (!privacyChecked) {
      newErrors.privacy = '*Musisz zaakceptować politykę prywatności';
    }

    setFormState(prev => ({ ...prev, errors: newErrors }));
    return Object.keys(newErrors).length === 0;
  }, [formRefs]);

  const resetForm = useCallback(() => {
    if (formRefs.name.current) formRefs.name.current.value = '';
    if (formRefs.email.current) formRefs.email.current.value = '';
    if (formRefs.privacy.current) formRefs.privacy.current.checked = false;
  }, [formRefs]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setFormState(prev => ({
        ...prev,
        isPending: true,
        error: null,
        success: null,
      }));

      if (!validateForm()) {
        setFormState(prev => ({ ...prev, isPending: false }));
        return;
      }

      try {
        const formData = new FormData(event.currentTarget);
        const result = await action(formData);

        if (result?.success) {
          resetForm();

          // Najpierw pokaż sukces
          setFormState(prev => ({
            ...prev,
            success: 'Sukces! Dane zostały wysłane! ✓',
          }));

          // Po 1 sekundzie dodaj informację o przekierowaniu
          setTimeout(() => {
            setFormState(prev => ({
              ...prev,
              success: 'Sukces! Za chwilę zostaniesz przekierowany na stronę z podziękowianiami...',
            }));
          }, 1000);

          if (redirectPath) {
            setTimeout(() => {
              router.push(redirectPath);
            }, 3000); // 3 sekundy delay
          }
        } else {
          throw new Error('Failed to save data');
        }
      } catch (err) {
        console.error('Form submission error:', err);
        setFormState(prev => ({
          ...prev,
          error: err instanceof Error ? err.message : '[-] Coś Poszło Nie Tak, Spróbuj ponownie',
        }));
      } finally {
        setFormState(prev => ({ ...prev, isPending: false }));
      }
    },
    [action, validateForm, resetForm, router, redirectPath]
  );

  return {
    formState,
    formRefs,
    handleSubmit,
  };
};
