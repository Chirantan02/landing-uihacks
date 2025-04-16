import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value?: number | string;
  trend?: number;
  breakdown?: Record<string, number>;
  className?: string;
}

export const MetricCard = ({ 
  title, 
  value = '-', 
  trend, 
  breakdown,
  className 
}: MetricCardProps) => {
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardContent className="pt-6">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <p className="text-2xl font-semibold">{value}</p>
          {trend !== undefined && (
            <span className={cn(
              "ml-2 text-sm font-medium",
              trend >= 0 ? "text-success" : "text-destructive"
            )}>
              {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </span>
          )}
        </div>
        {breakdown && (
          <div className="mt-4 space-y-1">
            {Object.entries(breakdown).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}; 