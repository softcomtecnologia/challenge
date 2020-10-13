import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Logon from '../pages/Logon';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Change from '../pages/Change';
import Add from '../pages/Add';

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Logon}/>
    <Route path="/register" component={Register}/>
    <Route path="/dashboard" component={Dashboard} isPrivate/>
    <Route path="/add" component={Add} isPrivate/>
    <Route path="/change" component={Change} isPrivate/>
  </Switch>
);

export default Routes;