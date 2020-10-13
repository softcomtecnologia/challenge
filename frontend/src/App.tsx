import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

import AppUser from './hooks';

const App: React.FC = () => (
  <>
    <AppUser>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppUser>

    <GlobalStyle />
  </>
);

export default App;
