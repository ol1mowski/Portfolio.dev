'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import s from './page.module.scss';
import Footer from '@/components/pages/Footer/Footer.page';
import Header from '@/components/pages/Header/Header.component';

function UnsubscribeContent() {
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

  if (!isValidToken) {
    return (
      <main className={s.container}>
        <div className={s.content}>
          <div className={s.header}>
            <h1 className={s.title}>Rezygnacja z bazy danych</h1>
            <p className={s.subtitle}>
              Aby zrezygnować z otrzymywania wiadomości, użyj linku z ostatniego maila lub
              skontaktuj się z nami.
            </p>
          </div>
          <div className={s.info}>
            <h3>Jak zrezygnować?</h3>
            <ul>
              <li>Kliknij link &quotWypisz się&quot w ostatnim otrzymanym mailu</li>
              <li>Lub odpowiedz na dowolny mail z prośbą o rezygnację</li>
              <li>Lub skontaktuj się z nami bezpośrednio</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={s.container}>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>Rezygnacja z bazy danych</h1>
          <p className={s.subtitle}>Potwierdź rezygnację z otrzymywania wiadomości</p>
        </div>

        <form onSubmit={handleSubmit} className={s.form}>
          <div className={s.formGroup}>
            <label htmlFor="token" className={s.label}>
              Token bezpieczeństwa:
            </label>
            <input
              type="text"
              id="token"
              value={token}
              onChange={e => setToken(e.target.value)}
              className={s.input}
              placeholder="Token z linku"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className={`${s.button} ${isLoading ? s.loading : ''}`}
            disabled={isLoading || !token.trim()}
          >
            {isLoading ? 'Przetwarzanie...' : 'Zrezygnuj z bazy danych'}
          </button>
        </form>

        {message && (
          <div className={`${s.message} ${isSuccess ? s.success : s.error}`}>{message}</div>
        )}

        <div className={s.info}>
          <h3>Co się stanie po rezygnacji?</h3>
          <ul>
            <li>Twój adres email zostanie usunięty z naszej bazy danych</li>
            <li>Przestaniesz otrzymywać nasze wiadomości</li>
            <li>Nie będziesz już otrzymywać powiadomień o nowych materiałach</li>
            <li>Możesz w każdej chwili ponownie dołączyć do bazy danych</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

function LoadingFallback() {
  return (
    <main className={s.container}>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>Ładowanie...</h1>
        </div>
      </div>
    </main>
  );
}

export default function UnsubscribePage() {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <UnsubscribeContent />
      </Suspense>
      <Footer />
    </>
  );
}
