import { type StaticImageData } from "next/image";

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

export type ProjectsType = {
  _id: {
    $oid: string;
  };
  projects: ProjectType[];
};

export type PostCardType = {
  id?: number;
  title: string;
  slug: string;
  description: string;
  postImage: StaticImageData;
  authorImage: StaticImageData;
  author: string;
  date: string;
};

export type PostContent = Array<{
  id: number;
  slug: string;
  image: StaticImageData;
  title: string;
  authorImage: StaticImageData;
  description: string;
  date: string;
  readTime: number;
  category: string;
  author: string;
  content: Array<{
    id: number;
    slug: string;
    title: string;
    description: string;
  }>;
}>;
