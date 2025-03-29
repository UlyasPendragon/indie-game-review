'use client';
import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', isLoading = false, children, ...props }, ref) => {
    const baseStyles =
      'font-terminal inline-flex items-center justify-center rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      default:
        'bg-retro-neon-pink text-white hover:bg-retro-neon-pink/90 focus:ring-retro-neon-pink shadow-neon-pink',
      outline:
        'border-2 border-retro-neon-blue text-retro-neon-blue hover:bg-retro-neon-blue/10 focus:ring-retro-neon-blue',
      ghost: 'text-retro-neon-blue hover:bg-retro-neon-blue/10 focus:ring-retro-neon-blue',
      link: 'text-retro-neon-blue underline-offset-4 hover:underline focus:ring-retro-neon-blue',
    };

    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Loading...</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
