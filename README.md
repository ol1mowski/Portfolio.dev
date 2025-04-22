# 🚀 My React Front-End Developer Portfolio

Welcome to my **React Front-End Developer Portfolio**! This project showcases my skills as a front-end developer, featuring a beautifully crafted portfolio site built with the latest web technologies.

![Portfolio](https://github.com/user-attachments/assets/34bd6439-d605-43dd-b2f7-e9b18ddfd56c)


## ✨ Overview

I designed this portfolio **from scratch in Figma** and brought it to life using **Next.js** with **Server-Side Rendering (SSR)** for optimal performance. The project is styled using **Sass** to ensure a clean and maintainable codebase. 

### Key Features:
- **🏡 Stunning Landing Page:** A captivating homepage that introduces who I am and what I do.
- **📝 Blog Subpage:** Dedicated to web design topics, where I share insights and tips.
- **📚 Ebook Get Page:** A special section where users can download my ebook, complete with a form and user authentication.
- **🔒 Authentication:** Secure login and registration to access exclusive content.

## 🔧 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React-based framework with SSR)
- **Design:** [Figma](https://figma.com) (Designed from scratch)
- **Styling:** [Sass](https://sass-lang.com/) (CSS with superpowers)
- **Authentication:** Custom authentication logic with session management

## 🚀 How to Run This Project Locally

1. **Clone this repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open in your browser:**

   Visit `http://localhost:3000` to see the portfolio in action.

## 🎨 Design Inspiration

The design was carefully crafted in Figma, with a focus on modern web design principles. It reflects my passion for creating intuitive and visually appealing user interfaces.

## 📚 Blog and Ebook Section

The **Blog** subpage offers valuable content on web design, keeping you updated with the latest trends and best practices. On the **Ebook Get Page**, users can download my ebook by filling out a form, secured by an authentication system.

## 🌍 Live Demo

Check out the live version of my portfolio [here](your-live-demo-url).

## 🤝 Contributing

I'm always open to contributions! Feel free to fork this project and submit pull requests. If you encounter any issues, please open an issue in this repository.

## 📫 Contact

Feel free to reach out if you have any questions or feedback. Connect with me on [LinkedIn](your-linkedin-url) or [Twitter](your-twitter-url).

## ⭐️ Show Your Support

If you like this project, please give it a ⭐️ on GitHub—it means a lot!

## Konwencje Nazewnictwa

Projekt korzysta z ustalonych konwencji nazewnictwa, które pomagają zachować spójność i czytelność kodu. Szczegółowe informacje znajdziesz w [dokumentacji konwencji nazewnictwa](docs/NAMING_CONVENTIONS.md).

Aby przeprowadzić migrację na nowe konwencje, możesz użyć skryptów:
- `scripts/migrate-to-conventions.ps1` - do zmiany nazw plików i katalogów
- `scripts/update-imports.ps1` - do aktualizacji importów

# Portfolio.dev

## Konfiguracja Dockera

Projekt jest skonfigurowany do uruchomienia w środowisku Docker. Poniżej znajdują się instrukcje dotyczące uruchomienia aplikacji w kontenerach.

### Wymagania

- Docker
- Docker Compose

### Uruchomienie aplikacji

1. Sklonuj repozytorium:
   ```bash
   git clone [URL_REPOZYTORIUM]
   cd Portfolio.dev
   ```

2. Utwórz plik `.env` w głównym katalogu projektu z odpowiednimi zmiennymi środowiskowymi:
   ```
   DB_URL=mongodb://mongo:27017/portfolio
   JWT_SECRET=twoj_sekretny_klucz_jwt
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

3. Zbuduj i uruchom kontenery:
   ```bash
   docker-compose up -d
   ```

4. Aplikacja będzie dostępna pod adresem: http://localhost:3000

### Zatrzymanie aplikacji

```bash
docker-compose down
```

### Wyświetlanie logów

```bash
docker-compose logs -f
```

### Przydatne komendy

- Przebudowanie aplikacji:
  ```bash
  docker-compose build --no-cache
  ```

- Usunięcie wszystkich danych (wolumenów):
  ```bash
  docker-compose down -v
  ```

### Struktura Dockera

Projekt wykorzystuje wieloetapowy proces budowania:

1. **base** - obraz bazowy z Node.js
2. **deps** - instalacja zależności
3. **builder** - budowanie aplikacji Next.js
4. **runner** - finalny obraz zawierający tylko niezbędne pliki

Ta struktura zapewnia minimalny rozmiar obrazu końcowego i zwiększa bezpieczeństwo poprzez użycie nieprivilegowanego użytkownika.
