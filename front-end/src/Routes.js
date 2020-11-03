import React from 'react';
import {Switch, BrowserRouter as Router,
    Route,} from 'react-router-dom';
import LayoutInterno from './components/interno/LayoutInterno';
import LayoutExterno from './components/externo/LayoutExterno'

const Routes = () => (
    <Router>
        <Switch>

             {/* Rotas externas da aplicação */}
          <Route exact path="/home" component={LayoutInterno}/>

            {/* Rotas externas da aplicação */}
          <Route exact path="/login" component={LayoutExterno}/>
          <Route exact path="/" component={LayoutExterno}/>

        </Switch>
    </Router>
);

export default Routes;