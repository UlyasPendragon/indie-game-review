import { forwardRef, HTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';

interface TooltipBaseProps {
  content: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
}

type TooltipProps = TooltipBaseProps & Omit<HTMLAttributes<HTMLDivElement>, keyof TooltipBaseProps>;

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, content, position = 'top', delay = 200, className, ...props }, ref): JSX.Element => {
    const [isVisible, setIsVisible] = useState(false);
    let timeout: NodeJS.Timeout;

    const showTooltip = (): void => {
      timeout = setTimeout(() => setIsVisible(true), delay);
    };

    const hideTooltip = (): void => {
      clearTimeout(timeout);
      setIsVisible(false);
    };

    const positionClasses = {
      top: 'bottom-full left-1/2 -translate-x-1/2 -translate-y-2 mb-2',
      right: 'left-full top-1/2 -translate-y-1/2 translate-x-2 ml-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 translate-y-2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 -translate-x-2 mr-2',
    };

    return (
      <div
        ref={ref}
        className="relative inline-block"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        {...props}
      >
        {children}
        {isVisible && (
          <div
            className={cn(
              'absolute z-50 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-sm text-white',
              positionClasses[position],
              className
            )}
          >
            {content}
            <div
              className={cn(
                'absolute h-2 w-2 rotate-45 bg-gray-900',
                position === 'top' && 'bottom-[-4px] left-1/2 -translate-x-1/2',
                position === 'right' && 'left-[-4px] top-1/2 -translate-y-1/2',
                position === 'bottom' && 'top-[-4px] left-1/2 -translate-x-1/2',
                position === 'left' && 'right-[-4px] top-1/2 -translate-y-1/2'
              )}
            />
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
