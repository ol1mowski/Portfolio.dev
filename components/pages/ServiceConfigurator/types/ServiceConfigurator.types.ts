export interface FormData {
  projectType: string;
  solutionType: string;
  features: string[];
  timeline: string;
}

export interface ServiceRecommendation {
  title: string;
  description: string;
  price: string;
  timeline: string;
  features: string[];
}

export interface ProjectType {
  id: string;
  title: string;
  desc: string;
}

export interface SolutionType {
  id: string;
  title: string;
  desc: string;
}

export interface Timeline {
  id: string;
  title: string;
  multiplier: number;
}

export interface Budget {
  id: string;
  title: string;
  range: [number, number];
}
