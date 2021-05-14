import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Sugestions from './containers/Sugestions';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={ Sugestions } />
      </Switch>
    </div>
  );
}

export default App;
