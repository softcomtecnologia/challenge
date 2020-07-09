import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface DeleteCredentials {
  id: string;
  itemId: string;
  token: string;
}

interface LogonCredentials {
  email: string;
  cnpj: string;
  password: string;
}

interface AuthContextData {
  user: object;
  logon(credentials: LogonCredentials): Promise<void>; 
  logout(): void;
  delItem(credentials: DeleteCredentials): Promise<object>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthUser: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@VirtualStore:token');
    const user = localStorage.getItem('@VirtualStore:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const logon = useCallback(async ({ email, cnpj, password }) => {
    const response = await api.post('/api/v1/auth/sign_in', {
      email,
      cnpj,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@VirtualStore:token', token);
    localStorage.setItem('@VirtualStore:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@VirtualStore:token');
    localStorage.removeItem('@VirtualStore:user');
    localStorage.removeItem('@VirtualStore:itemId');

    setData({} as AuthState);
  }, []);

  const delItem = useCallback(async ({ id, itemId, token }) => {
    const response = await api.delete(`/api/v1/user/${id}/item/${itemId}`, { 
      headers: { Authorization: `Bearer ${token}` }
    });
    
    return response.data;
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user: data.user, 
      logon, 
      logout, 
      delItem,
    }}>
      { children }
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}