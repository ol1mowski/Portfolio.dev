import { ReactNode } from 'react';

export interface WrapperProps {
  children: ReactNode;
}

export interface EbookImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
} 