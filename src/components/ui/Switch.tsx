import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, error, ...props }, ref): JSX.Element => {
    return (
      <div className="flex flex-col">
        <label className="flex items-center">
          <div className="relative inline-block">
            <input
              type="checkbox"
              ref={ref}
              className="sr-only"
              {...props}
            />
            <div
              className={cn(
                'h-6 w-11 rounded-full bg-gray-200 transition-colors',
                'after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform',
                'peer-checked:bg-primary-600 peer-checked:after:translate-x-5',
                'peer-focus:ring-2 peer-focus:ring-primary-500 peer-focus:ring-offset-2',
                error && 'border-red-500',
                className
              )}
            />
          </div>
          {label && <span className="ml-3 text-sm text-gray-700">{label}</span>}
        </label>
        {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
