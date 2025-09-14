'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { unsubscribeClient } from '@/actions/unsubscribe.actions';

export const useUnsubscribe = () => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isValidToken, setIsValidToken] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const tokenFromUrl = searchParams.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      setIsValidToken(true);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const result = await unsubscribeClient(token);

      if (result.success) {
        setMessage(result.message || 'Pomyślnie zrezygnowano z otrzymywania wiadomości');
        setIsSuccess(true);
      } else {
        setMessage(result.error || 'Wystąpił błąd podczas rezygnacji');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Wystąpił błąd serwera');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    token,
    setToken,
    isLoading,
    message,
    isSuccess,
    isValidToken,
    handleSubmit,
  };
};
