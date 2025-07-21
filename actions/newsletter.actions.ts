'use server';

import { saveClient } from '@/lib/api/client/client.service';
import { validateEmail } from '@/utils/validation';

export const subscribeToNewsletter = async (
  formData: FormData
): Promise<{ success: boolean; message?: string; error?: string }> => {
  try {
    const email = formData.get('email')?.toString().trim();

    if (!email) {
      return {
        success: false,
        error: 'Email jest wymagany',
      };
    }

    if (!validateEmail(email)) {
      return {
        success: false,
        error: 'Nieprawidłowy format email',
      };
    }

    const savedClient = await saveClient({
      name: 'Newsletter Subscriber',
      email,
    });

    if (!savedClient.success) {
      return {
        success: false,
        error: savedClient.error || 'Nie udało się zapisać do newslettera',
      };
    }

    return {
      success: true,
      message: 'Pomyślnie zapisano do newslettera',
    };
  } catch (error) {
    console.error('Error in subscribeToNewsletter:', error);

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Wystąpił błąd podczas zapisywania',
    };
  }
};
