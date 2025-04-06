import sgMail from '@sendgrid/mail';

export const initSendGrid = (): void => {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('Brak klucza API SendGrid w zmiennych środowiskowych');
    return;
  }
  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
};

export interface EmailMessage {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html: string;
}

export const sendEmail = async (message: EmailMessage): Promise<boolean> => {
  try {
    initSendGrid();
    await sgMail.send(message);
    return true;
  } catch (error) {
    console.error('Błąd podczas wysyłania emaila:', error);
    return false;
  }
}; 