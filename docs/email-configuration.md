# Konfiguracja systemu wysyłania maili

## Wymagania

- Konto SendGrid (można utworzyć darmowe konto na [sendgrid.com](https://sendgrid.com))
- Zweryfikowana domena lub adres email w SendGrid

## Konfiguracja zmiennych środowiskowych

Aby poprawnie skonfigurować system wysyłania maili, należy ustawić następujące zmienne środowiskowe w pliku `.env`:

```
SENDGRID_API_KEY=SG.twój_klucz_api_sendgrid
SENDGRID_FROM_EMAIL=zweryfikowany_adres@domena.pl
NEXT_PUBLIC_BASE_URL=http://domena.pl
```

### Opis zmiennych

- `SENDGRID_API_KEY` - klucz API wygenerowany w panelu SendGrid
- `SENDGRID_FROM_EMAIL` - adres email, z którego będą wysyłane wiadomości (musi być zweryfikowany w SendGrid)
- `NEXT_PUBLIC_BASE_URL` - adres URL aplikacji, używany do generowania linków w mailach

## Jak uzyskać klucz API SendGrid?

1. Zaloguj się na swoje konto SendGrid
2. Przejdź do sekcji **Settings** > **API Keys**
3. Kliknij przycisk **Create API Key**
4. Wybierz uprawnienia (zalecane: "Restricted Access" z uprawnieniami do "Mail Send")
5. Kliknij **Create & View**
6. Skopiuj wygenerowany klucz API (będzie widoczny tylko raz)

## Weryfikacja adresu email

1. W panelu SendGrid przejdź do **Settings** > **Sender Authentication**
2. Wybierz **Single Sender Verification** lub **Domain Authentication**
3. Postępuj zgodnie z instrukcjami, aby zweryfikować swój adres email lub domenę

## Testowanie

Po skonfigurowaniu zmiennych środowiskowych, system będzie automatycznie wysyłał maile dziękczynne po zapisaniu danych klienta przez formularz ebooka.

Aby przetestować czy konfiguracja działa poprawnie:

1. Wypełnij formularz na stronie ebooka używając testowego adresu email
2. Sprawdź, czy mail dziękczynny dotarł na podany adres
3. Jeśli mail nie dotarł, sprawdź logi aplikacji i panel SendGrid w sekcji **Activity** > **Email Activity**

## Rozwiązywanie problemów

Jeśli maile nie są wysyłane:

1. Sprawdź czy klucz API jest poprawny
2. Upewnij się, że adres nadawcy jest zweryfikowany
3. Sprawdź logi aplikacji (błędy z SendGrid)
4. Sprawdź panel SendGrid Activity > Email Activity, aby zobaczyć czy maile są wysyłane i jaki jest ich status
