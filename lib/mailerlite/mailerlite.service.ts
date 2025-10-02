export interface MailerLiteSubscriber {
  email: string;
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

class MailerLiteService {
  private apiKey: string;
  private baseUrl = 'https://connect.mailerlite.com/api';

  constructor() {
    this.apiKey = process.env.MAILERLITE_API_KEY || '';

    console.log('🔧 MailerLite Service Constructor:', {
      hasApiKey: !!this.apiKey,
      apiKeyLength: this.apiKey.length,
      apiKeyPreview: this.apiKey ? `${this.apiKey.substring(0, 10)}...` : 'MISSING',
    });

    if (!this.apiKey) {
      console.error('❌ MAILERLITE_API_KEY environment variable is missing!');
      throw new Error('MAILERLITE_API_KEY environment variable is required');
    }
  }

  private async makeRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    console.log('🔗 MailerLite API Request:', {
      url,
      method: options.method || 'GET',
      headers: {
        Authorization: `Bearer ${this.apiKey.substring(0, 10)}...`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: options.body ? JSON.parse(options.body as string) : undefined,
    });

    const response = await fetch(url, {
      ...options,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...options.headers,
      },
    });

    console.log('📡 MailerLite API Response:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ MailerLite API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
      });
      throw new Error(`MailerLite API Error: ${response.status} - ${errorText}`);
    }

    if (response.status === 204) {
      console.log('✅ MailerLite API Success (204 No Content)');
      return {} as T;
    }

    const responseData = await response.json();
    console.log('✅ MailerLite API Success:', responseData);
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
  console.log('🚀 Starting addSubscriberToMailerLite:', { email, name });

  try {
    const service = getMailerLiteService();
    console.log('✅ MailerLite service initialized');

    const subscriber: MailerLiteSubscriber = {
      email,
      ...(name && {
        fields: {
          name: name.split(' ')[0] || name,
          last_name: name.split(' ').slice(1).join(' ') || undefined,
        },
      }),
    };

    console.log('📝 Prepared subscriber data:', subscriber);

    const result = await service.addSubscriber(subscriber);
    console.log('🎉 Successfully added subscriber:', result);

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error('❌ MailerLite addSubscriber error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

export const removeSubscriberFromMailerLite = async (
  email: string
): Promise<{ success: boolean; error?: string }> => {
  console.log('🗑️ Starting removeSubscriberFromMailerLite:', { email });

  try {
    const service = getMailerLiteService();
    console.log('✅ MailerLite service initialized for removal');

    await service.deleteSubscriberByEmail(email);
    console.log('🎉 Successfully removed subscriber:', email);

    return {
      success: true,
    };
  } catch (error) {
    console.error('❌ MailerLite removeSubscriber error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};
