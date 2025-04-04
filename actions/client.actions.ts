'use server';

import { createAuthSession } from '@/lib/auth';
import { saveClient } from '@/lib/api/client/client.service';
import { SaveClientResponse } from '@/lib/api/client/client.types';
import { validateEmail } from '@/utils/validation';

export async function saveClientData(
  formData: FormData
): Promise<SaveClientResponse> {
  try {
    const email = formData.get('email')?.toString().trim();
    const name = formData.get('name')?.toString().trim();

    if (!email || !name) {
      return {
        success: false,
        error: 'Missing required fields'
      };
    }

    if (!validateEmail(email)) {
      return {
        success: false,
        error: 'Invalid email format'
      };
    }

    const savedClient = await saveClient({ name, email });

    if (!savedClient) {
      throw new Error('Failed to save client data');
    }

    const sessionResult = await createAuthSession(email, name);
    
    if (!sessionResult.success) {
      throw new Error('Failed to create session');
    }

    return { 
      success: true,
      client: {
        id: savedClient._id?.toString() || savedClient.id?.toString(),
        name: savedClient.name,
        email: savedClient.email
      }
    };
  } catch (error) {
    console.error('Error in saveClientData:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    };
  }
} 