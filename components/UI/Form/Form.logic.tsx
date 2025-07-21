'use client';

import { useRef, useState } from 'react';
import FormComponent from './Form.component';
import { subscribeToNewsletter } from '@/actions/newsletter.actions';

function Form({ action }: { action: (formData: FormData) => Promise<void> }) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const inp = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await subscribeToNewsletter(formData);

      if (result.success) {
        setSuccess(result.message || 'Newsletter wkrótce będzie dostępny ;)');
        if (inp.current) {
          inp.current.value = '';
        }
      } else {
        setError(result.error || '[-] Błędny adres email, Spróbuj ponownie');
      }
    } catch (err) {
      setError('[-] Błędny adres email, Spróbuj ponownie');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <FormComponent
      inp={inp}
      error={error}
      isPending={isPending}
      success={success}
      handleSubmit={handleSubmit}
    />
  );
}

export default Form;
