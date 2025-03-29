import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const Dialog = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm',
        className
      )}
      {...props}
    />
  )
);

Dialog.displayName = 'Dialog';

const DialogContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative w-full max-w-lg rounded-lg border bg-white p-6 shadow-lg dark:border-secondary-700 dark:bg-secondary-800',
        className
      )}
      {...props}
    />
  )
);

DialogContent.displayName = 'DialogContent';

const DialogHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
      {...props}
    />
  )
);

DialogHeader.displayName = 'DialogHeader';

const DialogFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...props}
    />
  )
);

DialogFooter.displayName = 'DialogFooter';

const DialogTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);

DialogTitle.displayName = 'DialogTitle';

const DialogDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-secondary-500 dark:text-secondary-400', className)}
      {...props}
    />
  )
);

DialogDescription.displayName = 'DialogDescription';

export { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription };
