export interface BenefitCardData {
  id: string;
  type: 'stat' | 'description';
  icon: 'clock' | 'shield';
  number?: string;
  label?: string;
  title?: string;
  description?: string;
}

export interface MainOfferData {
  badge: string;
  title: string;
  description: string;
  features: string[];
}

export interface BusinessImpactData {
  header: {
    title: string;
    subtitle: string;
  };
  mainOffer: MainOfferData;
  benefits: BenefitCardData[];
}

export interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  delay?: number;
}
