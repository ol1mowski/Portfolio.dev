'use server';

import { removeSubscriberFromMailerLite } from '@/lib/mailerlite';
import { createHash } from 'crypto';

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

    const result = await removeSubscriberFromMailerLite(targetEmail);

    if (result.success) {
      return {
        success: true,
        message:
          'Pomyślnie wypisano z newslettera. Nie będziesz już otrzymywać naszych wiadomości.',
      };
    } else {
      return {
        success: false,
        error: result.error || 'Nie udało się wypisać z newslettera',
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
