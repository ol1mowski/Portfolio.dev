export interface StatItemType {
  id: string;
  prefix: string;
  count: number;
  description: string;
  link: string;
  isExternal: boolean;
}

export interface CounterAnimationProps {
  duration: number;
  target: number;
  'aria-label'?: string;
}
