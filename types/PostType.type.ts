import { type StaticImageData } from "next/image";

export type ProjectType = {
  id: string;
  date: string;
  description: string;
  githubLink: string;
  image: string;
  liveLink: string;
  technologies: string[];
  title: string;
};

export type ProjectsType = {
  _id: {
    $oid: string;
  };
  projects: ProjectType[];
};

export type PostsType = {
  readTime: number;
  category: string;
  content: Array<{
    id: number;
    slug: string;
    title: string;
    description: string[];
  }>;
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  authorImage: string;
  author: string;
  date: string;
};

export type PostCardType = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: StaticImageData;
  authorImage: StaticImageData;
  author: string;
  date: string;
};
