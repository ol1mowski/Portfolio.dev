import { sendEmail, EmailMessage } from './resend';
import { getThankYouEmailTemplate, getPlainTextEmailTemplate } from './templates';
import { createHash } from 'crypto';

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Oliwier@oliwiermarkiewicz.pl';

export interface EmailClientData {
  name: string;
  email: string;
}

const getUnsubscribeLink = (email: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const secret = process.env.UNSUBSCRIBE_SECRET || 'default-secret-key';
  const token = createHash('sha256').update(`${email}${secret}`).digest('hex').substring(0, 16);

  return `${baseUrl}/unsubscribe?token=${token}`;
};

export const sendThankYouEmail = async (client: EmailClientData): Promise<boolean> => {
  try {
    const emailMessage: EmailMessage = {
      to: client.email,
      from: FROM_EMAIL,
      subject: 'Dziękujemy za dołączenie do Centrum Materiałów!',
      html: getThankYouEmailTemplate(client.name, client.email),
      text: getPlainTextEmailTemplate(client.name, client.email),
    };

    return await sendEmail(emailMessage);
  } catch (error) {
    console.error('Błąd podczas wysyłania maila z podziękowaniem:', error);
    return false;
  }
};

export const sendContactEmail = async (
  client: EmailClientData,
  message: string
): Promise<boolean> => {
  try {
    const emailMessage: EmailMessage = {
      to: client.email,
      from: FROM_EMAIL,
      subject: 'Potwierdzenie wiadomości kontaktowej',
      html: `
        <h2>Dziękujemy za wiadomość, ${client.name}!</h2>
        <p>Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe.</p>
        <p><strong>Twoja wiadomość:</strong></p>
        <p>${message}</p>
        <p>Pozdrawiam,<br>Oliwier</p>
      `,
      text: `
        Dziękujemy za wiadomość, ${client.name}!
        
        Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe.
        
        Twoja wiadomość:
        ${message}
        
        Pozdrawiam,
        Oliwier
      `,
    };

    return await sendEmail(emailMessage);
  } catch (error) {
    console.error('Błąd podczas wysyłania maila kontaktowego:', error);
    return false;
  }
};
