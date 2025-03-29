/**
 * Button Component
 * 
 * A reusable button component with retro-styled variants and loading state.
 * Built with accessibility in mind and follows the Game Boy-inspired design system.
 */

'use client';
import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

/**
 * ButtonProps interface extends the native HTML button attributes
 * with additional styling and functionality options.
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant of the button */
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  /** Size variant of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Loading state of the button */
  isLoading?: boolean;
}

/**
 * Button Component
 * 
 * A forwardRef component that renders a styled button with various options.
 * Features retro-styled variants, loading state, and responsive sizing.
 * 
 * @param {ButtonProps} props - Component props including variant, size, and loading state
 * @param {React.Ref<HTMLButtonElement>} ref - Forwarded ref for the button element
 * @returns {JSX.Element} Styled button component
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', isLoading = false, children, ...props }, ref) => {
    // Base styles applied to all button variants
    const baseStyles =
      'font-terminal inline-flex items-center justify-center rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    // Style variants with retro neon color scheme
    const variants = {
      default:
        'bg-retro-neon-pink text-white hover:bg-retro-neon-pink/90 focus:ring-retro-neon-pink shadow-neon-pink',
      outline:
        'border-2 border-retro-neon-blue text-retro-neon-blue hover:bg-retro-neon-blue/10 focus:ring-retro-neon-blue',
      ghost: 'text-retro-neon-blue hover:bg-retro-neon-blue/10 focus:ring-retro-neon-blue',
      link: 'text-retro-neon-blue underline-offset-4 hover:underline focus:ring-retro-neon-blue',
    };

    // Size variants with consistent spacing and typography
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
          // Loading state with animated spinner
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

// Set display name for better debugging
Button.displayName = 'Button';
