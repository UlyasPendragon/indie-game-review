import { forwardRef, HTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  tabs: Array<{
    label: string;
    content: React.ReactNode;
    disabled?: boolean;
  }>;
  defaultTab?: number;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, tabs, defaultTab = 0, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <div className="border-b border-secondary-200 dark:border-secondary-700">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => !tab.disabled && setActiveTab(index)}
                className={cn(
                  'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
                  activeTab === index
                    ? 'border-primary-500 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                    : 'border-transparent text-secondary-500 hover:border-secondary-300 hover:text-secondary-700 dark:text-secondary-400 dark:hover:border-secondary-600 dark:hover:text-secondary-300',
                  tab.disabled && 'cursor-not-allowed opacity-50'
                )}
                disabled={tab.disabled}
                role="tab"
                aria-selected={activeTab === index}
                aria-disabled={tab.disabled}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-4">{tabs[activeTab].content}</div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';
