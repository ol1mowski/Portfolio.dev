export interface CollaborationStepType {
  id: number;
  title: string;
  description: string;
  image: string;
  reverse: boolean;
}

export interface StepProps extends CollaborationStepType {
  className?: string;
}
