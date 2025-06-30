'use server';

import { saveClientToDB } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { createAuthSession } from '@/lib/auth';
import { validateEmail } from '@/utils/validation';
import { sendThankYouEmail } from '@/lib/email/email.service';

interface SaveClientDataResponse {
  success: boolean;
  error?: string;
}

export async function saveClientData(formData: FormData): Promise<SaveClientDataResponse> {
  try {
    const email = formData.get('email')?.toString().trim();
    const name = formData.get('name')?.toString().trim();

    if (!email || !name) {
      return {
        success: false,
        error: 'Missing required fields',
      };
    }
    if (!validateEmail(email)) {
      return {
        success: false,
        error: 'Invalid email format',
      };
    }

    const savedClient = await saveClientToDB({
      name,
      email,
    });

    if (!savedClient) {
      throw new Error('Failed to save client data');
    }

    try {
      await sendThankYouEmail({ name, email });
    } catch (emailError) {
      console.error('Error sending thank you email:', emailError);
    }

    const sessionResult = await createAuthSession(email, name);

    if (!sessionResult.success) {
      throw new Error('Failed to create session');
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error in saveClientData:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}
