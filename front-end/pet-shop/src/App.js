import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Sugestions from './containers/Sugestions';
import Header from './containers/Header';
import Toys from './containers/Toys';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/sugestions" component={ Sugestions } />
        <Route path="/toys" component={ Toys } />
      </Switch>
    </div>
  );
}

export default App;
