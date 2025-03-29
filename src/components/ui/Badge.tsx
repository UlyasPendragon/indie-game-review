import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'pink' | 'purple';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref): JSX.Element => {
    const variantClasses = {
      default: 'bg-retro-neon-blue/20 text-retro-neon-blue border border-retro-neon-blue/30',
      success: 'bg-retro-neon-green/20 text-retro-neon-green border border-retro-neon-green/30',
      warning: 'bg-retro-neon-yellow/20 text-retro-neon-yellow border border-retro-neon-yellow/30',
      error: 'bg-retro-neon-pink/20 text-retro-neon-pink border border-retro-neon-pink/30',
      pink: 'bg-retro-neon-pink/20 text-retro-neon-pink border border-retro-neon-pink/30',
      purple: 'bg-retro-neon-purple/20 text-retro-neon-purple border border-retro-neon-purple/30',
    };

    const sizeClasses = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-terminal rounded-md',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
