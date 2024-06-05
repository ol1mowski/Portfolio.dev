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
    id: "Courses Shop",
    date: "November 2023",
    description:
      "A Courses shop website is an online platform that allows users to buy courses for personal or business use.",
    githubLink: "https://github.com/ol1mowski/it-shop.de",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-a109e.appspot.com/o/images%2Fcourses.webp?alt=media&token=fb50713d-3806-4682-aaee-4e700d1455c7",
    liveLink: "https://ol1mowski.github.io/it-shop.de/",
    reverse: false,
    technologies: ["React", "SCSS"],
    title: "Course Shop",
  },
  {
    id: "Courses Shop",
    date: "November 2023",
    description:
      "A Courses shop website is an online platform that allows users to buy courses for personal or business use.",
    githubLink: "https://github.com/ol1mowski/it-shop.de",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-a109e.appspot.com/o/images%2Fcourses.webp?alt=media&token=fb50713d-3806-4682-aaee-4e700d1455c7",
    liveLink: "https://ol1mowski.github.io/it-shop.de/",
    reverse: true,
    technologies: ["React", "SCSS"],
    title: "Course Shop",
  },
];
