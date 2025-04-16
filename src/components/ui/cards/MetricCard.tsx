import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend?: number;
  className?: string;
}

export function MetricCard({ title, value, icon: Icon, trend, className }: MetricCardProps) {
  const trendColor = trend 
    ? trend > 0 
      ? 'text-green-500' 
      : 'text-red-500'
    : 'text-gray-500';

  return (
    <div className={cn(
      "p-6 bg-white rounded-lg shadow-sm border border-gray-100",
      className
    )}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <Icon className="w-5 h-5 text-gray-400" />
      </div>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {trend !== undefined && (
          <span className={cn("ml-2 text-sm font-medium", trendColor)}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
    </div>
  );
} 