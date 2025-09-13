export interface CollaborationStepType {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: string;
  reverse: boolean;
}

export interface StepProps extends CollaborationStepType {
  className?: string;
}
