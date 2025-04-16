import { cn } from "@/lib/utils";

interface LoadingDotsProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export function LoadingDots({ 
  size = 'md', 
  color = 'currentColor',
  className 
}: LoadingDotsProps) {
  const sizeClasses = {
    sm: 'h-1 w-1',
    md: 'h-2 w-2',
    lg: 'h-3 w-3',
  };

  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <span
        className={cn(
          sizeClasses[size],
          "rounded-full animate-[loading_0.8s_ease-in-out_infinite]"
        )}
        style={{ 
          backgroundColor: color,
          animationDelay: '0s' 
        }}
      />
      <span
        className={cn(
          sizeClasses[size],
          "rounded-full animate-[loading_0.8s_ease-in-out_infinite]"
        )}
        style={{ 
          backgroundColor: color,
          animationDelay: '0.2s' 
        }}
      />
      <span
        className={cn(
          sizeClasses[size],
          "rounded-full animate-[loading_0.8s_ease-in-out_infinite]"
        )}
        style={{ 
          backgroundColor: color,
          animationDelay: '0.4s' 
        }}
      />
    </span>
  );
}

// Add this to your global CSS or Tailwind config
// @keyframes loading {
//   0%, 100% {
//     opacity: 0.2;
//     transform: scale(0.8);
//   }
//   50% {
//     opacity: 1;
//     transform: scale(1);
//   }
// } 