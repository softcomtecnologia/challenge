import React from 'react';
import { Route, Switch } from 'react-router';
import Sugestions from './containers/Sugestions';
import Header from './containers/Header';
import Toys from './containers/Toys';
import BedsAndHouses from './containers/BedsAndHouses';
import Leaches from './containers/Leaches';
import Snacks from './containers/Snacks';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ Sugestions } />
        <Route path="/brinquedos" component={ Toys } />
        <Route path="/camas-e-casinhas" component={ BedsAndHouses } />
        <Route path="/coleiras" component={ Leaches } />
        <Route path="/ossos-e-petiscos" component={ Snacks } />
      </Switch>
    </div>
  );
}

export default App;
