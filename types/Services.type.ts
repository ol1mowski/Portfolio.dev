import type { ReactNode } from 'react';

export interface ServiceType {
  id?: string;
  type: string;
  des: ReactNode;
  number: number;
  reverse: boolean;
  ifFirst: boolean;
}

export interface ServicesWrapperProps {
  children: ReactNode;
  reverse: boolean;
}

export interface NumberOfServiceProps {
  number: number;
}

export interface ServicesHeaderProps {
  typArr: string[];
}

export interface LabelProps {
  ifFirst: boolean;
} 