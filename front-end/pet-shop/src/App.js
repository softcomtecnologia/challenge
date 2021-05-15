import React from 'react';
import { Route, Switch } from 'react-router';
import Sugestions from './containers/Sugestions';
import Header from './containers/Header';
import Toys from './containers/Toys';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/sugestoes" component={ Sugestions } />
        <Route path="/brinquedos" component={ Toys } />
      </Switch>
    </div>
  );
}

export default App;
