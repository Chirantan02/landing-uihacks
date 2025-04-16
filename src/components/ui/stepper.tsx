'use client';

import React, { useState } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface StepperProps {
  steps: {
    label: string;
    content: React.ReactNode;
  }[];
}

export function Stepper({ steps }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <div className="flex items-center">
              <div
                className={cn(
                  'h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium',
                  index === currentStep
                    ? 'bg-primary text-primary-foreground'
                    : index < currentStep
                    ? 'bg-primary/20 text-primary'
                    : 'bg-muted text-muted-foreground'
                )}
              >
                {index + 1}
              </div>
              <span
                className={cn(
                  'ml-2',
                  index === currentStep
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                )}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4 h-[2px] bg-muted" />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-8">{steps[currentStep].content}</div>

      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          onClick={goToPreviousStep}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
} 