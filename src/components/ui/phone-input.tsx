"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";

interface PhoneInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const formatPhoneNumber = (value: string) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, error, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formattedValue = formatPhoneNumber(e.target.value);
      e.target.value = formattedValue;
      onChange?.(e);
    };

    return (
      <Input
        {...props}
        type="tel"
        ref={ref}
        onChange={handleChange}
        className={className}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput"; 