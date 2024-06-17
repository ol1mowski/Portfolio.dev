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
    id: "Courses Online Platform",
    date: "Listopad 2023",
    description:
      "Strona internetowa sklepu z kursami to platforma online, która pozwala użytkownikom kupować kursy do użytku osobistego lub biznesowego.",
    githubLink: "https://github.com/ol1mowski/it-shop.de",
    image:
      "https://res.cloudinary.com/dbbuav0rj/image/upload/v1718622790/courses_ohtwhp.webp",
    liveLink: "https://ol1mowski.github.io/it-shop.de/",
    reverse: false,
    technologies: ["React", "SCSS"],
    title: "Courses Online Platform",
  },
  {
    id: "Photographer Portfolio",
    date: "Sierpień 2023",
    description:
      "To jest oszałamiająca i interaktywna strona internetowa portfolio fotografa zbudowana przy użyciu React.",
    githubLink: "https://github.com/ol1mowski/Misia_photo.de",
    image:
      "https://res.cloudinary.com/dbbuav0rj/image/upload/v1718622785/photo_ieb6iq.webp",
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
      "https://res.cloudinary.com/dbbuav0rj/image/upload/v1718622781/hotel_xjxd51.webp",
    liveLink: "https://ol1mowski.github.io/Best_hotel.de/",
    reverse: false,
    technologies: ["React", "SCSS"],
    title: "Hotel's Webpage",
  },
  {
    id: "Blog",
    date: "Maj 2024",
    description:
      "Projekt Bloga w Next.js to dynamiczna aplikacja internetowa, która pozwala użytkownikom przeglądać, czytać i dodawać artykuły związane z technologią.",
    githubLink: "https://github.com/ol1mowski/Portfolio.dev",
    image:
      "https://res.cloudinary.com/dbbuav0rj/image/upload/v1718622382/blog_vuam1g.png",
    liveLink: "/Blog",
    reverse: true,
    technologies: ["Next.js", "SCSS"],
    title: "Blog",
  },
];
