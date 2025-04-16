"use client"

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

interface SelectItemProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

const SelectItem = React.forwardRef<HTMLOptionElement, SelectItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <option
        ref={ref}
        className={cn(
          "relative flex w-full cursor-default select-none py-1.5 pl-2 pr-2 text-sm outline-none",
          className
        )}
        {...props}
      >
        {children}
      </option>
    );
  }
);
SelectItem.displayName = "SelectItem";

export {
  Select,
  SelectItem,
};