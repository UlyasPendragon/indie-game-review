import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  animation?: 'pulse' | 'wave' | 'none';
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'text', animation = 'pulse', ...props }, ref) => {
    const variantClasses = {
      text: 'h-4 w-full rounded',
      circular: 'h-12 w-12 rounded-full',
      rectangular: 'h-24 w-full rounded',
    };

    const animationClasses = {
      pulse: 'animate-pulse',
      wave: 'animate-shimmer bg-gradient-to-r from-secondary-200 via-secondary-100 to-secondary-200 dark:from-secondary-700 dark:via-secondary-600 dark:to-secondary-700 bg-[length:200%_100%]',
      none: '',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'bg-secondary-200 dark:bg-secondary-700',
          variantClasses[variant],
          animationClasses[animation],
          className
        )}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
