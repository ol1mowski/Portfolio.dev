import { useState } from 'react';
import { FormData, ServiceRecommendation } from '../types/ServiceConfigurator.types';
import { TOTAL_STEPS, timelines } from '../constants/ServiceConfigurator.constants';

const initialFormData: FormData = {
  projectType: '',
  solutionType: '',
  features: [],
  timeline: '',
  budget: '',
};

export const useServiceConfigurator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [recommendation, setRecommendation] = useState<ServiceRecommendation | null>(null);

  const calculateRecommendation = (): ServiceRecommendation => {
    let basePrice = 900;
    let title = 'Strona internetowa';
    let features: string[] = [];

    // Cena bazowa na podstawie typu projektu
    switch (formData.projectType) {
      case 'website':
        basePrice = 900; // Strona na szablonie od 900zł
        title = 'Strona internetowa';
        features = ['Responsywny design', 'Optymalizacja SEO', 'Formularz kontaktowy'];
        break;
      case 'ecommerce':
        basePrice = 2500; // Sklep od 2500zł
        title = 'Sklep internetowy';
        features = [
          'Responsywny design',
          'Integracja płatności',
          'Panel administratora',
          'Optymalizacja SEO',
        ];
        break;
      case 'webapp':
        basePrice = 1500; // Aplikacje od 1500zł
        title = 'Aplikacja webowa';
        features = ['Panel administratora', 'System logowania', 'API', 'Responsywny design'];
        break;
      case 'blog':
        basePrice = 900; // Blog podobnie jak strona
        title = 'Blog/Portal';
        features = ['System CMS', 'Blog/Aktualności', 'Responsywny design', 'Optymalizacja SEO'];
        break;
    }

    // Mnożnik na podstawie typu rozwiązania
    switch (formData.solutionType) {
      case 'template':
        basePrice *= 1.0; // Szablon - cena bazowa (900zł dla strony)
        break;
      case 'semi-custom':
        basePrice *= 1.4; // Częściowo custom - około 1300zł dla strony
        break;
      case 'custom':
        basePrice *= 2.2; // W pełni custom - znacznie więcej
        break;
    }

    // Dodatkowe funkcjonalności - mniejsza opłata za dodatkowe features
    basePrice += formData.features.length * 300;
    features = [...features, ...formData.features];

    // Mnożnik czasowy
    const timelineMultiplier = timelines.find(t => t.id === formData.timeline)?.multiplier || 1;
    basePrice *= timelineMultiplier;

    // Zaokrąglenie do pełnych setek
    const finalPrice = Math.round(basePrice / 100) * 100;

    return {
      title,
      description: `${formData.solutionType === 'custom' ? 'Unikalny' : 'Profesjonalny'} ${title.toLowerCase()} dopasowany do Twoich potrzeb`,
      price: `${finalPrice.toLocaleString()} zł`,
      timeline:
        timelines.find(t => t.id === formData.timeline)?.title.split(' ')[0] || 'Standardowo',
      features: [...new Set(features)], // Usunięcie duplikatów
    };
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      // Ostatni krok - generuj rekomendację
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

  const handleBudgetSelect = (budget: string) => {
    setFormData({ ...formData, budget });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType !== '';
      case 2:
        return formData.solutionType !== '';
      case 3:
        return true; // Funkcjonalności są opcjonalne
      case 4:
        return formData.timeline !== '';
      case 5:
        return formData.budget !== '';
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
    handleBudgetSelect,
    isStepValid,
  };
};
