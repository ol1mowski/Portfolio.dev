export interface ObjectionCardData {
  id: string;
  type: 'objection';
  icon: 'plus' | 'time' | 'chart';
  iconColor: 'red' | 'orange' | 'blue';
  title: string;
  subtitle?: string;
  benefits?: string[];
  position: 'left' | 'right';
}

export interface StatCardData {
  id: string;
  type: 'stat';
  number: string;
  label: string;
  description: string;
  color: 'blue' | 'orange' | 'green' | 'purple';
  icon?: string;
  position: 'left' | 'right';
}

export type ContentItem = ObjectionCardData | StatCardData;

export interface ProfitabilitySectionData {
  header: {
    title: string;
    subtitle: string;
  };
  content: ContentItem[];
}

export interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  delay?: number;
}
