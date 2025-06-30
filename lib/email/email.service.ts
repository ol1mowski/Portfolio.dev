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

export const sendJavaScriptNotesEmail = async (client: EmailClientData): Promise<boolean> => {
  try {
    const unsubscribeLink = getUnsubscribeLink(client.email);
    const emailMessage: EmailMessage = {
      to: client.email,
      from: FROM_EMAIL,
      subject: 'Dziękujemy za pobranie notatek JavaScript!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
            <h1 style="color: #0066cc; margin: 0;">Witaj, ${client.name}!</h1>
          </div>
          <div style="padding: 20px; background-color: #ffffff;">
            <p>Dziękujemy za pobranie <strong>notatek JavaScript</strong>!</p>
            <p>Mam nadzieję, że zawarte w nich informacje okażą się dla Ciebie wartościowe i pomogą Ci w nauce JavaScript.</p>
            <p>W notatkach znajdziesz:</p>
            <ul>
              <li>Podstawowe koncepcje JavaScript</li>
              <li>Praktyczne przykłady kodu</li>
              <li>Najlepsze praktyki programowania</li>
              <li>Wskazówki do dalszej nauki</li>
            </ul>
            <p>Jeśli masz pytania lub sugestie dotyczące notatek, nie wahaj się skontaktować ze mną odpowiadając na tego maila.</p>
            <p>Pozdrawiam serdecznie,<br>Oliwier</p>
          </div>
          <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 5px 5px;">
            <p>© ${new Date().getFullYear()} oliwiermarkiewicz.pl. Wszelkie prawa zastrzeżone.</p>
            <p>Nie chcesz otrzymywać więcej takich wiadomości? <a href="${unsubscribeLink}" style="color: #0066cc;">Wypisz się</a>.</p>
          </div>
        </div>
      `,
      text: `
Witaj, ${client.name}!

Dziękujemy za pobranie notatek JavaScript!

Mam nadzieję, że zawarte w nich informacje okażą się dla Ciebie wartościowe i pomogą Ci w nauce JavaScript.

W notatkach znajdziesz:
- Podstawowe koncepcje JavaScript
- Praktyczne przykłady kodu
- Najlepsze praktyki programowania
- Wskazówki do dalszej nauki

Jeśli masz pytania lub sugestie dotyczące notatek, nie wahaj się skontaktować ze mną odpowiadając na tego maila.

Pozdrawiam serdecznie,
Oliwier

© ${new Date().getFullYear()} oliwiermarkiewicz.pl. Wszelkie prawa zastrzeżone.

Aby zrezygnować z otrzymywania wiadomości, odwiedź: ${unsubscribeLink}
      `,
    };

    return await sendEmail(emailMessage);
  } catch (error) {
    console.error('Błąd podczas wysyłania maila z notatkami JavaScript:', error);
    return false;
  }
};

export const sendEbookEmail = async (client: EmailClientData): Promise<boolean> => {
  try {
    const unsubscribeLink = getUnsubscribeLink(client.email);
    const emailMessage: EmailMessage = {
      to: client.email,
      from: FROM_EMAIL,
      subject: 'Dziękujemy za pobranie ebooka o projektowaniu stron!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
            <h1 style="color: #0066cc; margin: 0;">Witaj, ${client.name}!</h1>
          </div>
          <div style="padding: 20px; background-color: #ffffff;">
            <p>Dziękujemy za pobranie ebooka <strong>"Praktyczne Porady Na Co Zwrócić Uwagę Podczas Projektowania Strony Internetowej"</strong>!</p>
            <p>Mam nadzieję, że zawarte w nim informacje okażą się dla Ciebie wartościowe i pomogą Ci w tworzeniu lepszych stron internetowych.</p>
            <p>W ebooku znajdziesz:</p>
            <ul>
              <li>Kluczowe zasady projektowania UX/UI</li>
              <li>Najlepsze praktyki responsywności</li>
              <li>Wskazówki dotyczące wydajności</li>
              <li>Praktyczne porady z doświadczenia</li>
            </ul>
            <p>Jeśli masz pytania lub sugestie dotyczące ebooka, nie wahaj się skontaktować ze mną odpowiadając na tego maila.</p>
            <p>Pozdrawiam serdecznie,<br>Oliwier</p>
          </div>
          <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 5px 5px;">
            <p>© ${new Date().getFullYear()} oliwiermarkiewicz.pl. Wszelkie prawa zastrzeżone.</p>
            <p>Nie chcesz otrzymywać więcej takich wiadomości? <a href="${unsubscribeLink}" style="color: #0066cc;">Wypisz się</a>.</p>
          </div>
        </div>
      `,
      text: `
Witaj, ${client.name}!

Dziękujemy za pobranie ebooka "Praktyczne Porady Na Co Zwrócić Uwagę Podczas Projektowania Strony Internetowej"!

Mam nadzieję, że zawarte w nim informacje okażą się dla Ciebie wartościowe i pomogą Ci w tworzeniu lepszych stron internetowych.

W ebooku znajdziesz:
- Kluczowe zasady projektowania UX/UI
- Najlepsze praktyki responsywności
- Wskazówki dotyczące wydajności
- Praktyczne porady z doświadczenia

Jeśli masz pytania lub sugestie dotyczące ebooka, nie wahaj się skontaktować ze mną odpowiadając na tego maila.

Pozdrawiam serdecznie,
Oliwier

© ${new Date().getFullYear()} oliwiermarkiewicz.pl. Wszelkie prawa zastrzeżone.

Aby zrezygnować z otrzymywania wiadomości, odwiedź: ${unsubscribeLink}
      `,
    };

    return await sendEmail(emailMessage);
  } catch (error) {
    console.error('Błąd podczas wysyłania maila z ebookiem:', error);
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
