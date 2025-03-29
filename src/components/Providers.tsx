'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@/context/ThemeContext';
import { ToastProvider } from '@/components/providers/ToastProvider';
import { DialogProvider } from '@/components/providers/DialogProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SessionProvider>
        <DialogProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </DialogProvider>
      </SessionProvider>
    </ThemeProvider>
  );
} 