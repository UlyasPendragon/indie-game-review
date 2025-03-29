'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
} from '@/components/ui/Toast';

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
  hideToast: () => void;
}

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: ToastProviderProps): JSX.Element {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [nextId, setNextId] = useState(1);

  const showToast = (message: string, type: ToastType = 'info'): void => {
    const id = nextId;
    setNextId(id + 1);

    const newToast: Toast = {
      id,
      message,
      type,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      hideToast(id);
    }, 5000);
  };

  const hideToast = (id?: number): void => {
    setToasts((prevToasts) =>
      id ? prevToasts.filter((toast) => toast.id !== id) : []
    );
  };

  const getToastClasses = (type: ToastType): string => {
    const baseClasses = 'rounded-md p-4 mb-4 flex justify-between items-center';
    switch (type) {
      case 'success':
        return `${baseClasses} bg-green-100 text-green-900`;
      case 'error':
        return `${baseClasses} bg-red-100 text-red-900`;
      case 'warning':
        return `${baseClasses} bg-yellow-100 text-yellow-900`;
      default:
        return `${baseClasses} bg-blue-100 text-blue-900`;
    }
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50">
        {toasts.map((toast) => (
          <div key={toast.id} className={getToastClasses(toast.type)}>
            <span>{toast.message}</span>
            <button
              onClick={() => hideToast(toast.id)}
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextType {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
