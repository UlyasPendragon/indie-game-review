import { forwardRef, HTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';

interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode;
  items: Array<{
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
    disabled?: boolean;
    danger?: boolean;
  }>;
  align?: 'left' | 'right';
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ className, trigger, items, align = 'right', ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div ref={ref} className={cn('relative inline-block text-left', className)} {...props}>
        <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <div
              className={cn(
                'absolute z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-secondary-800',
                align === 'right' ? 'right-0' : 'left-0'
              )}
            >
              <div className="py-1" role="menu">
                {items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      item.onClick();
                      setIsOpen(false);
                    }}
                    disabled={item.disabled}
                    className={cn(
                      'flex w-full items-center px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 dark:text-secondary-200 dark:hover:bg-secondary-700',
                      item.disabled && 'opacity-50 cursor-not-allowed',
                      item.danger &&
                        'text-error-600 hover:text-error-700 dark:text-error-400 dark:hover:text-error-300'
                    )}
                    role="menuitem"
                  >
                    {item.icon && <span className="mr-2 h-4 w-4">{item.icon}</span>}
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
);

DropdownMenu.displayName = 'DropdownMenu';
