import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sugestions from './containers/Sugestions';
import Header from './containers/Header';
import Toys from './containers/Toys';
import BedsAndHouses from './containers/BedsAndHouses';
import Leaches from './containers/Leaches';
import Snacks from './containers/Snacks';
import MobileFooter from './components/MobileFooter';
import Footer from './containers/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ Sugestions } />
        <Route path="/brinquedos" component={ Toys } />
        <Route path="/camas-e-casinhas" component={ BedsAndHouses } />
        <Route path="/coleiras" component={ Leaches } />
        <Route path="/ossos-e-petiscos" component={ Snacks } />
      </Switch>
      <MobileFooter />
      <Footer />
    </>
  );
}

export default App;
