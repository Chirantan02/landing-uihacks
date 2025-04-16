'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helpText?: string;
}

export function FormField({ label, error, helpText, className, ...props }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      {/* Label */}
      <div className="text-sm text-gray-600">
        {label}
      </div>

      {/* Input Container */}
      <div className="relative">
        <input
          {...props}
          className={cn(
            "w-full h-[42px] px-3 rounded-lg border border-gray-200 bg-white",
            "text-[15px] placeholder:text-gray-400",
            "transition-colors duration-200",
            "hover:border-gray-300",
            "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/30",
            className
          )}
        />

        {/* Help Icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Info className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Help Text */}
      <div className="text-xs text-gray-500">
        {helpText}
      </div>
    </div>
  );
} 