'use server';

import { createAuthSession } from '@/lib/auth';
import { saveClient, deleteClient } from '@/lib/api/client/client.service';
import { SaveClientResponse } from '@/lib/api/client/client.types';
import { validateEmail } from '@/utils/validation';
import { sendEbookEmail } from '@/lib/email/email.service';
import { createHash } from 'crypto';

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
      await sendEbookEmail({ name, email });
    } catch (emailError) {
      console.error('Error sending ebook email:', emailError);
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

const verifyUnsubscribeToken = (email: string, token: string): boolean => {
  const secret = process.env.UNSUBSCRIBE_SECRET || 'default-secret-key';
  const expectedToken = createHash('sha256')
    .update(`${email}${secret}`)
    .digest('hex')
    .substring(0, 16);

  return token === expectedToken;
};

export const unsubscribeClient = async (
  token: string
): Promise<{ success: boolean; message?: string; error?: string }> => {
  try {
    if (!token || token.trim() === '') {
      return {
        success: false,
        error: 'Token jest wymagany',
      };
    }

    const { dbConnect } = await import('@/db/db_connect');
    await dbConnect();
    const { Customers } = await import('@/db/Schemas/Clients');

    const allCustomers = await Customers.find({});
    let targetEmail = null;

    for (const customer of allCustomers) {
      if (verifyUnsubscribeToken(customer.email, token)) {
        targetEmail = customer.email;
        break;
      }
    }

    if (!targetEmail) {
      return {
        success: false,
        error: 'Nieprawidłowy token bezpieczeństwa',
      };
    }

    const result = await deleteClient(targetEmail);

    if (result.success) {
      return {
        success: true,
        message:
          'Pomyślnie usunięto z bazy danych. Nie będziesz już otrzymywać naszych wiadomości.',
      };
    } else {
      return {
        success: false,
        error: result.error || 'Nie udało się usunąć z bazy danych',
      };
    }
  } catch (error) {
    console.error('Błąd podczas rezygnacji:', error);
    return {
      success: false,
      error: 'Wystąpił błąd serwera',
    };
  }
};

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
