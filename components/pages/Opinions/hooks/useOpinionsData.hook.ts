'use client';

import { useState, useCallback } from 'react';
import { SingleOpinionType } from '@/types/Opinions.types';
import { getOpinions } from '@/actions/opinions.actions';

interface OpinionsDataState {
  opinions: SingleOpinionType[] | null;
  loading: boolean;
  error: string | null;
}

export const useOpinionsData = () => {
  const [state, setState] = useState<OpinionsDataState>({
    opinions: null,
    loading: false,
    error: null,
  });

  const fetchOpinions = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const opinionsData = await getOpinions();
      const opinions = opinionsData?.[0]?.opinions || null;
      setState(prev => ({ ...prev, opinions, loading: false }));
      return opinions;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Błąd podczas pobierania opinii';
      setState(prev => ({ ...prev, error: errorMessage, loading: false }));
      return null;
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      opinions: null,
      loading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    fetchOpinions,
    reset,
  };
};
