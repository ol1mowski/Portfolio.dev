import { sendEmail, EmailMessage } from './resend';
import { getThankYouEmailTemplate, getPlainTextEmailTemplate } from './templates';

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'noreply@oliwiermarkiewicz.pl';

export interface EmailClientData {
  name: string;
  email: string;
}

export const sendThankYouEmail = async (client: EmailClientData): Promise<boolean> => {
  try {
    const emailMessage: EmailMessage = {
      to: client.email,
      from: FROM_EMAIL,
      subject: 'Dziękujemy za dołączenie do Centrum Materiałów!',
      html: getThankYouEmailTemplate(client.name),
      text: getPlainTextEmailTemplate(client.name),
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
        <p>Pozdrawiamy,<br>Zespół Portfolio.dev</p>
      `,
      text: `
        Dziękujemy za wiadomość, ${client.name}!
        
        Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe.
        
        Twoja wiadomość:
        ${message}
        
        Pozdrawiamy,
        Zespół Portfolio.dev
      `,
    };

    return await sendEmail(emailMessage);
  } catch (error) {
    console.error('Błąd podczas wysyłania maila kontaktowego:', error);
    return false;
  }
};
