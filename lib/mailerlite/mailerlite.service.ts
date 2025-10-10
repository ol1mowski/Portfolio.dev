export interface MailerLiteSubscriber {
  email: string;
  groups?: string[];
  fields?: {
    name?: string;
    last_name?: string;
  };
}

export interface MailerLiteResponse {
  data: {
    id: string;
    email: string;
    status: string;
    created_at: string;
  };
}

const MATERIALS_CENTER_GROUP_ID = process.env.MAILERLITE_MATERIALS_GROUP_ID || '';

class MailerLiteService {
  private apiKey: string;
  private baseUrl = 'https://connect.mailerlite.com/api';

  constructor() {
    this.apiKey = process.env.MAILERLITE_API_KEY || '';

    if (!this.apiKey) {
      console.error('❌ MAILERLITE_API_KEY environment variable is missing!');
      throw new Error('MAILERLITE_API_KEY environment variable is required');
    }

    if (!MATERIALS_CENTER_GROUP_ID) {
      console.warn(
        '⚠️ MAILERLITE_MATERIALS_GROUP_ID environment variable is missing! Subscribers will not be added to Materials Center group.'
      );
    }
  }

  private async makeRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`MailerLite API Error: ${response.status} - ${errorText}`);
    }

    if (response.status === 204) {
      return {} as T;
    }

    const responseData = await response.json();
    return responseData;
  }

  async addSubscriber(subscriber: MailerLiteSubscriber): Promise<MailerLiteResponse> {
    return this.makeRequest<MailerLiteResponse>('/subscribers', {
      method: 'POST',
      body: JSON.stringify(subscriber),
    });
  }

  async deleteSubscriberByEmail(email: string): Promise<void> {
    await this.makeRequest(`/subscribers/${encodeURIComponent(email)}`, {
      method: 'DELETE',
    });
  }
}

let mailerLiteInstance: MailerLiteService | null = null;

export const getMailerLiteService = (): MailerLiteService => {
  if (!mailerLiteInstance) {
    mailerLiteInstance = new MailerLiteService();
  }
  return mailerLiteInstance;
};

export const addSubscriberToMailerLite = async (
  email: string,
  name?: string
): Promise<{ success: boolean; data?: MailerLiteResponse; error?: string }> => {
  try {
    const service = getMailerLiteService();

    const subscriber: MailerLiteSubscriber = {
      email,
      ...(MATERIALS_CENTER_GROUP_ID && {
        groups: [MATERIALS_CENTER_GROUP_ID],
      }),
      ...(name && {
        fields: {
          name: name.split(' ')[0] || name,
          last_name: name.split(' ').slice(1).join(' ') || undefined,
        },
      }),
    };

    const result = await service.addSubscriber(subscriber);

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

export const removeSubscriberFromMailerLite = async (
  email: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const service = getMailerLiteService();

    await service.deleteSubscriberByEmail(email);

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};
