export type ProjectType = {
  id: string;
  date: string;
  description: string;
  githubLink: string;
  image: string;
  liveLink: string;
  reverse?: boolean;
  technologies: string[];
  title: string;
};

export const PROJECTS: ProjectType[] = [
  {
    id: "Courses Online Portal",
    date: "Listopad 2023",
    description:
      "Strona internetowa sklepu z kursami to platforma online, która pozwala użytkownikom kupować kursy do użytku osobistego lub biznesowego.",
    githubLink: "https://github.com/ol1mowski/it-shop.de",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-a109e.appspot.com/o/images%2Fcourses.webp?alt=media&token=fb50713d-3806-4682-aaee-4e700d1455c7",
    liveLink: "https://ol1mowski.github.io/it-shop.de/",
    reverse: false,
    technologies: ["React", "SCSS"],
    title: "Courses Online Portal",
  },
  {
    id: "Photographer Portfolio",
    date: "Sierpień 2023",
    description:
      "To jest oszałamiająca i interaktywna strona internetowa portfolio fotografa zbudowana przy użyciu React.",
    githubLink: "https://github.com/ol1mowski/Misia_photo.de",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-a109e.appspot.com/o/images%2Fphoto.webp?alt=media&token=ef8aab80-46b8-4c43-9e94-7ce0f8c119c3",
    liveLink: "https://ol1mowski.github.io/Misia_photo.de/",
    reverse: true,
    technologies: ["React", "SCSS"],
    title: "Photographer Portfolio",
  },
  {
    id: "Hotel's Webpage",
    date: "Lipiec 2023",
    description:
      "Moja strona internetowa hotelu to twoje wejście do niezapomnianych doświadczeń podróżniczych. Strona posiada przyjazny dla użytkownika system rezerwacji online, który pozwala łatwo zaplanować pobyt.",
    githubLink: "https://github.com/ol1mowski/Best_hotel.de",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-a109e.appspot.com/o/images%2Fhotel.webp?alt=media&token=412c67c1-bb67-4442-998c-803f574b56ae",
    liveLink: "https://ol1mowski.github.io/Best_hotel.de/",
    reverse: false,
    technologies: ["React", "SCSS"],
    title: "Hotel's Webpage",
  },
  {
    id: "IT-Blog",
    date: "Maj 2024",
    description:
      "Projekt IT Blog w Next.js to dynamiczna aplikacja internetowa, która pozwala użytkownikom przeglądać, czytać i dodawać artykuły związane z technologią.",
    githubLink: "https://github.com/ol1mowski/it-blog",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-a109e.appspot.com/o/images%2Fblog.webp?alt=media&token=ed2499d4-1059-41e5-8156-8b9be6c7b73e",
    liveLink: "https://webblogger.netlify.app/",
    reverse: true,
    technologies: ["Next.js", "SCSS"],
    title: "IT-Blog",
  },
];
