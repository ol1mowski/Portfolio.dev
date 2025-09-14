import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FormData, ServiceRecommendation } from '../types/ServiceConfigurator.types';
import { TOTAL_STEPS } from '../constants/ServiceConfigurator.constants';

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
  const t = useTranslations('configurator.steps');
  const tResult = useTranslations('configurator.result');

  const calculateRecommendation = (): ServiceRecommendation => {
    let basePrice = 900;
    let title = t('projectType.options.website.title');
    let features: string[] = [];

    // Cena bazowa na podstawie typu projektu
    switch (formData.projectType) {
      case 'website':
        basePrice = 900; // Strona na szablonie od 900zł
        title = t('projectType.options.website.title');
        features = [
          t('features.options.0'), // Responsywny design
          t('features.options.1'), // Optymalizacja SEO
          t('features.options.5'), // Formularz kontaktowy
        ];
        break;
      case 'ecommerce':
        basePrice = 2500; // Sklep od 2500zł
        title = t('projectType.options.ecommerce.title');
        features = [
          t('features.options.0'), // Responsywny design
          t('features.options.2'), // Integracja płatności
          t('features.options.3'), // Panel administratora
          t('features.options.1'), // Optymalizacja SEO
        ];
        break;
      case 'webapp':
        basePrice = 1500; // Aplikacje od 1500zł
        title = t('projectType.options.webapp.title');
        features = [
          t('features.options.3'), // Panel administratora
          t('features.additional.loginSystem'), // System logowania
          t('features.additional.api'), // API
          t('features.options.0'), // Responsywny design
        ];
        break;
      case 'blog':
        basePrice = 900; // Blog podobnie jak strona
        title = t('projectType.options.blog.title');
        features = [
          t('features.additional.cms'), // System CMS
          t('features.options.4'), // Blog/Aktualności
          t('features.options.0'), // Responsywny design
          t('features.options.1'), // Optymalizacja SEO
        ];
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
    const timelineMultipliers = {
      urgent: 1.5,
      standard: 1,
      flexible: 0.9,
    };
    const timelineMultiplier =
      timelineMultipliers[formData.timeline as keyof typeof timelineMultipliers] || 1;
    basePrice *= timelineMultiplier;

    // Zaokrąglenie do pełnych setek
    const finalPrice = Math.round(basePrice / 100) * 100;

    // Pobierz tłumaczenie timeline
    const timelineText = t(`timeline.options.${formData.timeline}`).split(' ')[0];

    return {
      title,
      description: `${tResult(`descriptions.${formData.solutionType}`)} ${title.toLowerCase()} ${tResult('descriptions.suffix')}`,
      price: `${finalPrice.toLocaleString()} ${tResult('currency')}`,
      timeline: timelineText || t('timeline.default'),
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
