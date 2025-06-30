import { Resend } from 'resend';

export interface EmailMessage {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html: string;
}

let resendInstance: Resend | null = null;

export const initResend = (): Resend => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('Brak klucza API Resend w zmiennych środowiskowych');
  }

  if (!resendInstance) {
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }

  return resendInstance;
};

export const sendEmail = async (message: EmailMessage): Promise<boolean> => {
  try {
    const resend = initResend();

    const emailData = {
      from: message.from,
      to: message.to,
      subject: message.subject,
      html: message.html,
      ...(message.text && { text: message.text }),
    };

    await resend.emails.send(emailData);
    return true;
  } catch (error) {
    console.error('Błąd podczas wysyłania emaila przez Resend:', error);
    return false;
  }
};

export const sendTestEmail = async (to: string): Promise<boolean> => {
  try {
    const resend = initResend();

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'oliwier@oliwiermarkiewicz.pl',
      to: to,
      subject: 'Test email z Resend',
      html: '<p>To jest testowy email wysłany przez <strong>Resend</strong>!</p>',
    });

    return true;
  } catch (error) {
    console.error('Błąd podczas wysyłania testowego emaila:', error);
    return false;
  }
};
