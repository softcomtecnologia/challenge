import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';

import Toast from '../components/ToastContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string; 
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastUser: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({ type, title, description  }: Omit<ToastMessage, 'id'>) => {
    const id = uuid();

    const toast = {
      id,
      type,
      title,
      description,
    };

    setMessages([ ...messages, toast ])
  }, [messages]);

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={ messages }/>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextData{
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastUser');
  }

  return context;
}