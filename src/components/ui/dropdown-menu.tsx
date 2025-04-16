'use client';

import * as React from 'react';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DropdownMenuProps {
  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  return <div className="relative inline-block text-left">{children}</div>;
};

interface DropdownMenuTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children }) => {
  return <div className="inline-flex">{children}</div>;
};

interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end' | 'center';
  sideOffset?: number;
}

const DropdownMenuContent = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ className, align = 'center', sideOffset = 4, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
          className
        )}
        {...props}
      />
    );
  }
);
DropdownMenuContent.displayName = 'DropdownMenuContent';

interface DropdownMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inset?: boolean;
}

const DropdownMenuItem = React.forwardRef<HTMLButtonElement, DropdownMenuItemProps>(
  ({ className, inset, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
);
DropdownMenuItem.displayName = 'DropdownMenuItem';

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
};