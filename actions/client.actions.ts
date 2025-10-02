'use server';

import { createAuthSession } from '@/lib/auth';
import { saveClient } from '@/lib/api/client/client.service';
import { SaveClientResponse } from '@/lib/api/client/client.types';
import { validateEmail } from '@/utils/validation';
import { addSubscriberToMailerLite } from '@/lib/mailerlite';

export const saveClientData = async (formData: FormData): Promise<SaveClientResponse> => {
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

    const savedClient = await saveClient({ name, email });

    if (!savedClient.success || !savedClient.client) {
      throw new Error('Failed to save client data');
    }

    const sessionResult = await createAuthSession(email, name);

    if (!sessionResult.success) {
      throw new Error('Failed to create session');
    }

    try {
      const mailerLiteResult = await addSubscriberToMailerLite(email, name);
      if (!mailerLiteResult.success) {
        console.error('MailerLite subscription failed:', mailerLiteResult.error);
      } else {
        console.log('✅ Successfully added to MailerLite:', email);
      }
    } catch (mailerLiteError) {
      console.error('Error adding to MailerLite:', mailerLiteError);
    }

    return {
      success: true,
      client: {
        id: savedClient.client._id?.toString() || savedClient.client.id?.toString() || '',
        name: savedClient.client.name,
        email: savedClient.client.email,
      },
    };
  } catch (error) {
    console.error('Error in saveClientData:', error);

    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
};
