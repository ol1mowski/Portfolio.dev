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
   git clone https://github.com/ol1mowski/Portfolio.dev.git
   cd Portfolio.dev
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

Check out the live version of my portfolio [here](www.oliwiermarkiewicz.pl/).

## 🤝 Contributing

I'm always open to contributions! Feel free to fork this project and submit pull requests. If you encounter any issues, please open an issue in this repository.

## 📫 Contact

Feel free to reach out if you have any questions or feedback. Connect with me on [LinkedIn](https://www.linkedin.com/in/oliwier-markiewicz-47857228a/).

## ⭐️ Show Your Support

If you like this project, please give it a ⭐️ on GitHub—it means a lot!

## Naming Conventions

The project uses established naming conventions to help maintain consistency and code readability. Detailed information can be found in the [naming conventions documentation](docs/NAMING_CONVENTIONS.md).

To perform migration to the new conventions, you can use the scripts:

- `scripts/migrate-to-conventions.ps1` - for changing file and directory names
- `scripts/update-imports.ps1` - for updating imports

# Portfolio.dev

## Docker Configuration

The project is configured to run in a Docker environment. Below are instructions for running the application in containers.

### Requirements

- Docker
- Docker Compose

### Running the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/ol1mowski/Portfolio.dev.git
   cd Portfolio.dev
   ```

2. Create a `.env` file in the main project directory with appropriate environment variables:

   ```
   DB_URL=mongodb://mongo:27017/portfolio
   JWT_SECRET=your_jwt_secret_key
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

3. Build and run the containers:

   ```bash
   docker-compose up -d
   ```

4. The application will be available at: http://localhost:3000

### Stopping the Application

```bash
docker-compose down
```

### Viewing Logs

```bash
docker-compose logs -f
```

### Useful Commands

- Rebuilding the application:

  ```bash
  docker-compose build --no-cache
  ```

- Removing all data (volumes):
  ```bash
  docker-compose down -v
  ```

### Docker Structure

The project uses a multi-stage build process:

1. **base** - base image with Node.js
2. **deps** - dependency installation
3. **builder** - building the Next.js application
4. **runner** - final image containing only necessary files

This structure provides minimal final image size and enhances security by using an unprivileged user.

## Continuous Integration and Deployment (CI/CD)

The project utilizes GitHub Actions to automate the testing, building, and deployment processes.

### Available Workflows:

1. **CI/CD Pipeline** - the main pipeline that:

   - Runs code linting
   - Performs unit tests
   - Runs end-to-end tests
   - Builds and publishes a Docker image
   - Deploys the application to the production server (only for main/master branches)

2. **Docker Build** - builds and publishes a Docker image when Docker-related files change

3. **Preview Deployment** - creates a preview environment for pull requests

### GitHub Secrets

For the workflows to function properly, the following secrets need to be configured in the GitHub repository:

- `DOCKER_USERNAME` - Docker Hub username
- `DOCKER_PASSWORD` - Docker Hub password/token
- `SSH_HOST` - production server IP address
- `SSH_USERNAME` - server username
- `SSH_PRIVATE_KEY` - SSH private key for connecting to the server
- `DB_URL` - MongoDB database URL
- `JWT_SECRET` - secret key for signing JWT tokens
- `NEXT_PUBLIC_BASE_URL` - public URL of the application
- `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` - needed for Vercel deployments
