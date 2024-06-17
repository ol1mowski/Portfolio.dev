import { type StaticImageData } from "next/image";

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
