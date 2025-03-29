/**
 * Providers Component
 * 
 * This component wraps the application with various context providers
 * to enable global state management and functionality across the app.
 * It uses the 'use client' directive to ensure client-side rendering.
 */

'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@/context/ThemeContext';
import { ToastProvider } from '@/components/providers/ToastProvider';
import { DialogProvider } from '@/components/providers/DialogProvider';

/**
 * Providers Component
 * 
 * A wrapper component that provides various context providers to the application.
 * The providers are nested in a specific order to ensure proper context availability.
 * 
 * Provider Order:
 * 1. ThemeProvider - Manages application theme (light/dark mode)
 * 2. SessionProvider - Handles authentication state
 * 3. DialogProvider - Manages modal dialogs
 * 4. ToastProvider - Handles toast notifications
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped
 * @returns {JSX.Element} Wrapped application with all providers
 */
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