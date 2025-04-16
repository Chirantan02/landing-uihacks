'use client';

import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  completed?: boolean;
}

interface StepsProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (index: number) => void;
}

export function Steps({ steps, currentStep, onStepClick }: StepsProps) {
  return (
    <div className="relative">
      <div
        className="absolute left-0 top-2 h-0.5 w-full bg-muted"
        aria-hidden="true"
      >
        <div
          className="h-full bg-primary transition-all duration-500 ease-in-out"
          style={{
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
        />
      </div>
      <ul className="relative flex justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li
              key={step.id}
              className="flex flex-col items-center gap-2"
              aria-current={currentStep === index ? 'step' : undefined}
            >
              <div
                className={cn(
                  'relative flex h-8 w-8 items-center justify-center rounded-full border transition-colors',
                  {
                    'border-primary bg-primary text-primary-foreground':
                      step.completed || currentStep >= index,
                    'border-muted-foreground bg-background':
                      !step.completed && currentStep < index,
                    'cursor-pointer hover:border-primary hover:bg-primary/10':
                      !!onStepClick && (step.completed || index === currentStep || index === currentStep + 1),
                  }
                )}
                onClick={() => onStepClick?.(index)}
                role={onStepClick ? 'button' : undefined}
                tabIndex={onStepClick ? 0 : undefined}
              >
                <Icon
                  className={cn('h-4 w-4', {
                    'text-primary-foreground': step.completed || currentStep >= index,
                    'text-muted-foreground': !step.completed && currentStep < index,
                  })}
                />
                {step.completed && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">
                    ✓
                  </span>
                )}
              </div>
              <div className="flex flex-col items-center gap-1">
                <span
                  className={cn('text-sm font-medium', {
                    'text-primary': currentStep >= index,
                    'text-muted-foreground': currentStep < index,
                  })}
                >
                  {step.title}
                </span>
                <span
                  className={cn('text-xs', {
                    'text-muted-foreground': currentStep >= index,
                    'text-muted': currentStep < index,
                  })}
                >
                  {step.description}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}