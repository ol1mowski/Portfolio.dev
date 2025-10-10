import { useState } from 'react';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';
import { FormData, ServiceRecommendation } from '../types/ServiceConfigurator.types';
import { TOTAL_STEPS } from '../constants/ServiceConfigurator.constants';

const initialFormData: FormData = {
  projectType: '',
  solutionType: '',
  features: [],
  timeline: '',
};

export const useServiceConfigurator = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [recommendation, setRecommendation] = useState<ServiceRecommendation | null>(null);
  const t = useOptimizedTranslations('configurator.steps');
  const tResult = useOptimizedTranslations('configurator.result');

  const calculateRecommendation = (): ServiceRecommendation => {
    let basePrice = 999;
    let title = t('projectType.options.website.title');
    let features: string[] = [];

    switch (formData.projectType) {
      case 'website':
        basePrice = 999;
        title = t('projectType.options.website.title');
        break;
      case 'ecommerce':
        basePrice = 2499;
        title = t('projectType.options.ecommerce.title');
        break;
      case 'webapp':
        basePrice = 1499;
        title = t('projectType.options.webapp.title');
        break;
      case 'uiux':
        basePrice = 990;
        title = t('projectType.options.uiux.title');
        break;
    }

    switch (formData.solutionType) {
      case 'template':
        basePrice *= 1.0;
        break;
      case 'semi-custom':
        basePrice *= 1.4;
        break;
      case 'custom':
        basePrice *= 2.2;
        break;
    }

    basePrice += formData.features.length * 300;
    features = [...formData.features];

    const finalPrice = Math.round(basePrice / 100) * 100;

    const solutionKey = formData.solutionType || 'template';
    return {
      title,
      description: `${tResult(`descriptions.${solutionKey}`)} ${title.toLowerCase()} ${tResult('descriptions.suffix')}`,
      price: `${finalPrice.toLocaleString()} ${tResult('currency')}`,
      timeline: '',
      features: [...new Set(features)],
    };
  };

  const nextStep = () => {
    if (formData.projectType === 'uiux' && currentStep === 1) {
      setCurrentStep(3);
      return;
    }

    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      const rec = calculateRecommendation();
      setRecommendation(rec);
    }
  };

  const prevStep = () => {
    if (formData.projectType === 'uiux' && currentStep === 3) {
      setCurrentStep(1);
      return;
    }
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetConfigurator = () => {
    setRecommendation(null);
    setCurrentStep(1);
    setFormData(initialFormData);
  };

  const handleProjectTypeSelect = (type: string) => {
    setFormData({ ...formData, projectType: type });
  };

  const handleSolutionTypeSelect = (type: string) => {
    setFormData({ ...formData, solutionType: type });
  };

  const handleFeatureToggle = (feature: string) => {
    const features = formData.features.includes(feature)
      ? formData.features.filter(f => f !== feature)
      : [...formData.features, feature];
    setFormData({ ...formData, features });
  };

  const handleTimelineSelect = (timeline: string) => {
    setFormData({ ...formData, timeline });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType !== '';
      case 2:
        return formData.projectType === 'uiux' ? true : formData.solutionType !== '';
      case 3:
        return true;
      case 4:
        return true;
      default:
        return false;
    }
  };

  return {
    currentStep,
    formData,
    recommendation,
    nextStep,
    prevStep,
    resetConfigurator,
    handleProjectTypeSelect,
    handleSolutionTypeSelect,
    handleFeatureToggle,
    handleTimelineSelect,
    isStepValid,
  };
};
