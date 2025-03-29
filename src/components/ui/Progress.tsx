import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'pink';
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      variant = 'default',
      size = 'md',
      showValue = false,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    const variantClasses = {
      default: 'bg-retro-neon-blue shadow-neon-blue',
      success: 'bg-retro-neon-green shadow-neon-green',
      warning: 'bg-retro-neon-yellow shadow-neon-yellow',
      error: 'bg-retro-neon-pink shadow-neon-pink',
      pink: 'bg-retro-neon-pink shadow-neon-pink',
    };

    const sizeClasses = {
      sm: 'h-1.5',
      md: 'h-2',
      lg: 'h-3',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full overflow-hidden rounded-full bg-retro-dark-secondary/50 border border-retro-neon-blue/20',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <div
          className={cn('h-full transition-all duration-300 ease-in-out', variantClasses[variant])}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center text-xs font-terminal text-retro-neon-blue">
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    );
  }
);

Progress.displayName = 'Progress';
