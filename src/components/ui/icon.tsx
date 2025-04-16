import { cn } from '@/lib/utils';
import { LucideIcon, LucideProps } from 'lucide-react';
import * as icons from 'lucide-react';

interface IconProps extends LucideProps {
  name: keyof typeof icons;
  fallback?: React.ReactNode;
}

export function Icon({ name, className, fallback = null, ...props }: IconProps) {
  const IconComponent = icons[name] as LucideIcon;
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return fallback as JSX.Element | null;
  }
  
  return <IconComponent className={cn('h-4 w-4', className)} {...props} />;
} 