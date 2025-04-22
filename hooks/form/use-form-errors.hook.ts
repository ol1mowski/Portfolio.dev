import { useState, useCallback } from 'react';

export interface FieldErrors {
  [key: string]: string;
}

export interface FormErrorsState {
  fieldErrors: FieldErrors;
  errorMessage: string | null;
}

export const useFormErrors = () => {
  const [errorState, setErrorState] = useState<FormErrorsState>({
    fieldErrors: {},
    errorMessage: null,
  });

  const setFieldErrors = useCallback((fieldErrors: FieldErrors) => {
    setErrorState(prev => ({
      ...prev,
      fieldErrors,
    }));
  }, []);

  const setError = useCallback((errorMessage: string | null) => {
    setErrorState(prev => ({
      ...prev,
      errorMessage,
    }));
  }, []);

  const clearErrors = useCallback(() => {
    setErrorState({
      fieldErrors: {},
      errorMessage: null,
    });
  }, []);

  return {
    fieldErrors: errorState.fieldErrors,
    errorMessage: errorState.errorMessage,
    setFieldErrors,
    setError,
    clearErrors,
  };
};
