'use client';

import React from 'react';
import s from './ServiceConfigurator.page.module.scss';

// Hook
import { useServiceConfigurator } from './hooks/useServiceConfigurator';

// Components
import ProgressBar from './components/ProgressBar/ProgressBar.component';
import Navigation from './components/Navigation/Navigation.component';
import ResultCard from './components/ResultCard/ResultCard.component';

// Step Components
import ProjectTypeStep from './components/Steps/ProjectTypeStep.component';
import SolutionTypeStep from './components/Steps/SolutionTypeStep.component';
import FeaturesStep from './components/Steps/FeaturesStep.component';
import TimelineStep from './components/Steps/TimelineStep.component';
import BudgetStep from './components/Steps/BudgetStep.component';

const ServiceConfigurator: React.FC = () => {
  const {
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
  } = useServiceConfigurator();

  // Jeśli mamy rekomendację, pokaż rezultat
  if (recommendation) {
    return <ResultCard recommendation={recommendation} onReset={resetConfigurator} />;
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProjectTypeStep selectedType={formData.projectType} onSelect={handleProjectTypeSelect} />
        );
      case 2:
        return (
          <SolutionTypeStep
            selectedType={formData.solutionType}
            onSelect={handleSolutionTypeSelect}
          />
        );
      case 3:
        return <FeaturesStep selectedFeatures={formData.features} onToggle={handleFeatureToggle} />;
      case 4:
        return (
          <TimelineStep selectedTimeline={formData.timeline} onSelect={handleTimelineSelect} />
        );
      case 5:
        return <BudgetStep selectedBudget={formData.budget} onSelect={handleBudgetSelect} />;
      default:
        return null;
    }
  };

  return (
    <div className={s.container}>
      <div className={s.wizard}>
        <ProgressBar currentStep={currentStep} />

        <div className={s.step}>{renderCurrentStep()}</div>

        <Navigation
          currentStep={currentStep}
          isStepValid={isStepValid()}
          onPrevStep={prevStep}
          onNextStep={nextStep}
        />
      </div>
    </div>
  );
};

export default ServiceConfigurator;
