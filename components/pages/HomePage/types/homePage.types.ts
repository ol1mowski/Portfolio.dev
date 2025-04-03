import { ReactNode } from 'react';

export interface WrapperProps {
  children: ReactNode;
}

export interface HomePageImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  quality: number;
} 