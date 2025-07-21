import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { unsubscribeClient } from '@/actions/unsubscribe.actions';

interface UnsubscribeState {
  token: string;
  isLoading: boolean;
  message: string;
  isSuccess: boolean;
  isValidToken: boolean;
}

interface UnsubscribeActions {
  setToken: (token: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export const useUnsubscribe = (): UnsubscribeState & UnsubscribeActions => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isValidToken, setIsValidToken] = useState(false);

  const searchParams = useSearchParams();
  const tokenFromUrl = searchParams.get('token');

  useEffect(() => {
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      setIsValidToken(true);
    }
  }, [tokenFromUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const result = await unsubscribeClient(token.trim());

      if (result.success) {
        setMessage(result.message || 'Pomyślnie zrezygnowano z subskrypcji');
        setIsSuccess(true);
        setToken('');
      } else {
        setMessage(result.error || 'Wystąpił błąd podczas rezygnacji');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Wystąpił błąd połączenia. Spróbuj ponownie.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    token,
    isLoading,
    message,
    isSuccess,
    isValidToken,
    setToken,
    handleSubmit,
  };
};
