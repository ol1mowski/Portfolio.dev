'use client';

import { useState } from 'react';
import s from '../../page.module.scss';
import { useTranslations } from 'next-intl';

interface UnsubscribeFormProps {
  token: string;
  onTokenChange: (token: string) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
}

export default function UnsubscribeForm({
  token,
  onTokenChange,
  onSubmit,
  isLoading,
}: UnsubscribeFormProps) {
  const t = useTranslations('unsubscribe');
  return (
    <form onSubmit={onSubmit} className={s.form}>
      <div className={s.formGroup}>
        <label htmlFor="token" className={s.label}>
          {t('labels.token')}
        </label>
        <input
          type="text"
          id="token"
          value={token}
          onChange={e => onTokenChange(e.target.value)}
          className={s.input}
          placeholder={t('placeholders.token')}
          required
          disabled={isLoading}
        />
      </div>

      <button
        type="submit"
        className={`${s.button} ${isLoading ? s.loading : ''}`}
        disabled={isLoading || !token.trim()}
      >
        {isLoading ? t('buttons.loading') : t('buttons.submit')}
      </button>
    </form>
  );
}
