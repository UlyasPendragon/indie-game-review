import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, ...props }, ref): JSX.Element => {
    return (
      <div className="flex flex-col">
        <label className="flex items-center">
          <input
            type="checkbox"
            ref={ref}
            className={cn(
              'h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500',
              error && 'border-red-500',
              className
            )}
            {...props}
          />
          {label && <span className="ml-2 text-sm text-gray-700">{label}</span>}
        </label>
        {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
