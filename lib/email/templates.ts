import { createHash } from 'crypto';

const getUnsubscribeLink = (email: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const secret = process.env.UNSUBSCRIBE_SECRET || 'default-secret-key';
  const token = createHash('sha256').update(`${email}${secret}`).digest('hex').substring(0, 16);

  return `${baseUrl}/unsubscribe?token=${token}`;
};

export const getThankYouEmailTemplate = (name: string, email?: string): string => {
  const unsubscribeLink = email ? getUnsubscribeLink(email) : '#';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dziękujemy za dołączenie do Centrum Materiałów</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #f8f9fa;
      padding: 20px;
      text-align: center;
      border-radius: 5px 5px 0 0;
    }
    .content {
      padding: 20px;
      background-color: #ffffff;
    }
    .footer {
      background-color: #f8f9fa;
      padding: 15px;
      text-align: center;
      font-size: 12px;
      color: #666;
      border-radius: 0 0 5px 5px;
    }
    .button {
      display: inline-block;
      background-color: #0066cc;
      color: #ffffff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 5px;
      margin: 20px 0;
    }
    h1 {
      color: #0066cc;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Witaj, ${name}!</h1>
    </div>
    <div class="content">
      <p>Dziękujemy za dołączenie do <strong>Centrum Materiałów</strong>!</p>
      <p>Od teraz masz dostęp do wszystkich materiałów edukacyjnych, e-booków, notatek i zasobów dla programistów.</p>
      <p>Wkrótce otrzymasz od nas kolejne wartościowe treści, inspiracje i praktyczne wskazówki na podany adres email.</p>
      <p>Jeśli masz pytania lub sugestie, po prostu odpowiedz na tego maila.</p>
      <p>Pozdrawiam serdecznie,<br>Oliwier</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} oliwiermarkiewicz.pl. Wszelkie prawa zastrzeżone.</p>
      <p>Nie chcesz otrzymywać więcej takich wiadomości? <a href="${unsubscribeLink}" style="color: #0066cc;">Wypisz się</a>.</p>
    </div>
  </div>
</body>
</html>
  `;
};

export const getPlainTextEmailTemplate = (name: string, email?: string): string => {
  const unsubscribeLink = email ? getUnsubscribeLink(email) : '#';

  return `
Witaj, ${name}!

Dziękujemy za dołączenie do Centrum Materiałów!

Od teraz masz dostęp do wszystkich materiałów edukacyjnych, e-booków, notatek i zasobów dla programistów.

Wkrótce otrzymasz od nas kolejne wartościowe treści, inspiracje i praktyczne wskazówki na podany adres email.

Jeśli masz pytania lub sugestie, po prostu odpowiedz na tego maila.

Pozdrawiam serdecznie,
Oliwier

© ${new Date().getFullYear()} oliwiermarkiewicz.pl. Wszelkie prawa zastrzeżone.

Aby zrezygnować z otrzymywania wiadomości, odwiedź: ${unsubscribeLink}
  `;
};
