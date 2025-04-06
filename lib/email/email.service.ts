import { sendEmail, EmailMessage } from './sendgrid';
import { getThankYouEmailTemplate, getPlainTextEmailTemplate } from './templates';

const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'noreply@oliwiermarkiewicz.pl';

export interface EmailClientData {
  name: string;
  email: string;
}

export const sendThankYouEmail = async (client: EmailClientData): Promise<boolean> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://oliwiermarkiewicz.pl';
    const downloadLink = `${baseUrl}/Praktyczne_Porady_Na_Co_Zwrócić_Uwagę_Podczas_Projektowania_Strony_Internetowej.pdf`;
    
    const emailMessage: EmailMessage = {
      to: client.email,
      from: FROM_EMAIL,
      subject: 'Dziękujemy za pobranie ebooka!',
      html: getThankYouEmailTemplate(client.name, downloadLink),
      text: getPlainTextEmailTemplate(client.name, downloadLink)
    };
    
    return await sendEmail(emailMessage);
  } catch (error) {
    console.error('Błąd podczas wysyłania maila z podziękowaniem:', error);
    return false;
  }
}; 