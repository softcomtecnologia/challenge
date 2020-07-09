import React from 'react';

import { AuthUser } from './AuthContext';
import { ToastUser } from './ToastContext';

const AppUser: React.FC = ({ children }) => (
  <AuthUser>
    <ToastUser>
      { children }
    </ToastUser>
  </AuthUser>
);

export default AppUser;