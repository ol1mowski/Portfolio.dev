import { useState } from 'react';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('configurator.steps');
  const tResult = useTranslations('configurator.result');

  const calculateRecommendation = (): ServiceRecommendation => {
    let basePrice = 900;
    let title = t('projectType.options.website.title');
    let features: string[] = [];

    switch (formData.projectType) {
      case 'website':
        basePrice = 900;
        title = t('projectType.options.website.title');
        break;
      case 'ecommerce':
        basePrice = 2500;
        title = t('projectType.options.ecommerce.title');
        break;
      case 'webapp':
        basePrice = 1500;
        title = t('projectType.options.webapp.title');
        break;
      case 'blog':
        basePrice = 900;
        title = t('projectType.options.blog.title');
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

    return {
      title,
      description: `${tResult(`descriptions.${formData.solutionType}`)} ${title.toLowerCase()} ${tResult('descriptions.suffix')}`,
      price: `${finalPrice.toLocaleString()} ${tResult('currency')}`,
      timeline: '',
      features: [...new Set(features)],
    };
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      const rec = calculateRecommendation();
      setRecommendation(rec);
    }
  };

  const prevStep = () => {
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
        return formData.solutionType !== '';
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
