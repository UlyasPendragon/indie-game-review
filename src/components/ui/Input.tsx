import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md bg-retro-dark-secondary border border-retro-neon-blue/30 px-3 py-2 text-sm font-terminal text-retro-neon-blue/90 placeholder:text-retro-neon-blue/50 focus:border-retro-neon-blue focus:outline-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-terminal disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };
