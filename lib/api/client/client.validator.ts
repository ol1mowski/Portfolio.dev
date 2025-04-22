import { ClientData } from './client.types';

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateClientData = (data: ClientData): ValidationResult => {
  if (!data.name || !data.name.trim()) {
    return { isValid: false, error: 'Name is required' };
  }

  if (!data.email || !data.email.trim()) {
    return { isValid: false, error: 'Email is required' };
  }

  if (data.name.trim().length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email.trim())) {
    return { isValid: false, error: 'Please provide a valid email address' };
  }

  return { isValid: true };
};
