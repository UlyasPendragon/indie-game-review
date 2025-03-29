'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/Dialog';

interface DialogContextType {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
  showDialog: (options: DialogOptions) => void;
  hideDialog: () => void;
}

interface DialogOptions {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

interface DialogProviderProps {
  children: ReactNode;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function DialogProvider({ children }: DialogProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [confirmLabel, setConfirmLabel] = useState('Confirm');
  const [cancelLabel, setCancelLabel] = useState('Cancel');
  const [onConfirmCallback, setOnConfirmCallback] = useState<() => void>(() => {});
  const [onCancelCallback, setOnCancelCallback] = useState<() => void>(() => {});

  const showDialog = ({
    title,
    message,
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    onConfirm,
    onCancel = () => {},
  }: DialogOptions): void => {
    setTitle(title);
    setMessage(message);
    setConfirmLabel(confirmLabel);
    setCancelLabel(cancelLabel);
    setOnConfirmCallback(() => onConfirm);
    setOnCancelCallback(() => onCancel);
    setIsOpen(true);
  };

  const hideDialog = (): void => {
    setIsOpen(false);
  };

  const handleConfirm = (): void => {
    onConfirmCallback();
    hideDialog();
  };

  const handleCancel = (): void => {
    onCancelCallback();
    hideDialog();
  };

  return (
    <DialogContext.Provider
      value={{
        isOpen,
        title,
        message,
        confirmLabel,
        cancelLabel,
        onConfirm: handleConfirm,
        onCancel: handleCancel,
        showDialog,
        hideDialog,
      }}
    >
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-retro-dark-primary/90 border border-retro-neon-blue/20 p-6 shadow-neon-blue">
            <h2 className="mb-4 text-xl font-retro text-retro-neon-pink">{title}</h2>
            <p className="mb-6 font-terminal text-retro-neon-blue/90">{message}</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="rounded-md bg-retro-dark-primary/90 border border-retro-neon-blue/20 px-4 py-2 text-retro-neon-blue font-terminal hover:bg-retro-neon-blue/10"
              >
                {cancelLabel}
              </button>
              <button
                onClick={handleConfirm}
                className="rounded-md bg-retro-neon-pink px-4 py-2 text-white font-terminal hover:bg-retro-neon-pink/90 shadow-neon-pink"
              >
                {confirmLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </DialogContext.Provider>
  );
}

export function useDialog(): DialogContextType {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
}
