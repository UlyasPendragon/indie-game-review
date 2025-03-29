import { forwardRef, HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default:
          'border-secondary-200 bg-white text-secondary-900 dark:border-secondary-700 dark:bg-secondary-800 dark:text-secondary-100',
        destructive:
          'destructive group border-error-200 bg-error-50 text-error-900 dark:border-error-800 dark:bg-error-900/50 dark:text-error-100',
        success:
          'success group border-success-200 bg-success-50 text-success-900 dark:border-success-800 dark:bg-success-900/50 dark:text-success-100',
        warning:
          'warning group border-warning-200 bg-warning-50 text-warning-900 dark:border-warning-800 dark:bg-warning-900/50 dark:text-warning-100',
        info: 'info group border-primary-200 bg-primary-50 text-primary-900 dark:border-primary-800 dark:bg-primary-900/50 dark:text-primary-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Toast = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <div ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />;
});

Toast.displayName = 'Toast';

const ToastTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('text-sm font-semibold', className)} {...props} />
  )
);

ToastTitle.displayName = 'ToastTitle';

const ToastDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm opacity-90', className)} {...props} />
  )
);

ToastDescription.displayName = 'ToastDescription';

const ToastAction = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-error-100/40 group-[.destructive]:hover:border-error-500/30 group-[.destructive]:hover:bg-error-500 group-[.destructive]:hover:text-error-50 group-[.destructive]:focus:ring-error-500 group-[.success]:border-success-100/40 group-[.success]:hover:border-success-500/30 group-[.success]:hover:bg-success-500 group-[.success]:hover:text-success-50 group-[.success]:focus:ring-success-500 group-[.warning]:border-warning-100/40 group-[.warning]:hover:border-warning-500/30 group-[.warning]:hover:bg-warning-500 group-[.warning]:hover:text-warning-50 group-[.warning]:focus:ring-warning-500 group-[.info]:border-primary-100/40 group-[.info]:hover:border-primary-500/30 group-[.info]:hover:bg-primary-500 group-[.info]:hover:text-primary-50 group-[.info]:focus:ring-primary-500 dark:ring-offset-secondary-900 dark:hover:bg-secondary-800 dark:focus:ring-secondary-800 dark:group-[.destructive]:border-error-800/40 dark:group-[.destructive]:hover:border-error-800/30 dark:group-[.destructive]:hover:bg-error-900 dark:group-[.destructive]:hover:text-error-50 dark:group-[.destructive]:focus:ring-error-900 dark:group-[.success]:border-success-800/40 dark:group-[.success]:hover:border-success-800/30 dark:group-[.success]:hover:bg-success-900 dark:group-[.success]:hover:text-success-50 dark:group-[.success]:focus:ring-success-900 dark:group-[.warning]:border-warning-800/40 dark:group-[.warning]:hover:border-warning-800/30 dark:group-[.warning]:hover:bg-warning-900 dark:group-[.warning]:hover:text-warning-50 dark:group-[.warning]:focus:ring-warning-900 dark:group-[.info]:border-primary-800/40 dark:group-[.info]:hover:border-primary-800/30 dark:group-[.info]:hover:bg-primary-900 dark:group-[.info]:hover:text-primary-50 dark:group-[.info]:focus:ring-primary-900',
        className
      )}
      {...props}
    />
  )
);

ToastAction.displayName = 'ToastAction';

const ToastClose = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'absolute right-2 top-2 rounded-md p-1 text-secondary-500 opacity-0 transition-opacity hover:text-secondary-900 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-error-500 group-[.destructive]:hover:text-error-50 group-[.destructive]:focus:ring-error-500 group-[.destructive]:focus:ring-offset-error-500 group-[.success]:text-success-500 group-[.success]:hover:text-success-50 group-[.success]:focus:ring-success-500 group-[.success]:focus:ring-offset-success-500 group-[.warning]:text-warning-500 group-[.warning]:hover:text-warning-50 group-[.warning]:focus:ring-warning-500 group-[.warning]:focus:ring-offset-warning-500 group-[.info]:text-primary-500 group-[.info]:hover:text-primary-50 group-[.info]:focus:ring-primary-500 group-[.info]:focus:ring-offset-primary-500 dark:text-secondary-400 dark:hover:text-secondary-50',
        className
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  )
);

ToastClose.displayName = 'ToastClose';

export { Toast, ToastTitle, ToastDescription, ToastAction, ToastClose };
