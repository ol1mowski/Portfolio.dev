export const getThankYouEmailTemplate = (name: string, downloadLink: string): string => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dziękujemy za pobranie ebooka</title>
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
      <h1>Dziękujemy, ${name}!</h1>
    </div>
    <div class="content">
      <p>Dzięki za zainteresowanie moim ebookiem "Praktyczne Porady Na Co Zwrócić Uwagę Podczas Projektowania Strony Internetowej".</p>
      <p>Mam nadzieję, że zawarte w nim informacje okażą się dla Ciebie wartościowe i pomogą Ci w tworzeniu lepszych stron internetowych.</p>
      <p>Jeśli jeszcze nie pobrałeś/aś ebooka, możesz to zrobić klikając poniższy przycisk:</p>
      <div style="text-align: center;">
        <a href="${downloadLink}" class="button">Pobierz E-book</a>
      </div>
      <p>Jeśli masz jakiekolwiek pytania lub sugestie, nie wahaj się skontaktować ze mną odpowiadając na tego maila.</p>
      <p>Pozdrawiam serdecznie,<br>Twój Autor</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Portfolio.dev. Wszelkie prawa zastrzeżone.</p>
      <p>Nie chcesz otrzymywać więcej takich wiadomości? <a href="#">Wypisz się</a>.</p>
    </div>
  </div>
</body>
</html>
  `;
};

export const getPlainTextEmailTemplate = (name: string, downloadLink: string): string => {
  return `
Dziękujemy, ${name}!

Dzięki za zainteresowanie moim ebookiem "Praktyczne Porady Na Co Zwrócić Uwagę Podczas Projektowania Strony Internetowej".

Mam nadzieję, że zawarte w nim informacje okażą się dla Ciebie wartościowe i pomogą Ci w tworzeniu lepszych stron internetowych.

Jeśli jeszcze nie pobrałeś/aś ebooka, możesz to zrobić korzystając z poniższego linku:
${downloadLink}

Jeśli masz jakiekolwiek pytania lub sugestie, nie wahaj się skontaktować ze mną odpowiadając na tego maila.

Pozdrawiam serdecznie,
Twój Autor

© ${new Date().getFullYear()} Portfolio.dev. Wszelkie prawa zastrzeżone.
  `;
};
