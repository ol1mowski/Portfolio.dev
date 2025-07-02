import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

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
      const response = await fetch('/api/clients/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
        setIsSuccess(true);
        setToken('');
      } else {
        setMessage(data.error || 'Wystąpił błąd podczas rezygnacji');
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
