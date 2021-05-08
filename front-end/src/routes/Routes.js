import React from 'react';
import {Switch, BrowserRouter as Router,Route,} from 'react-router-dom';
import LayoutInterno from '../components/layout/LayoutInterno';


const Routes = () => (
    <Router>
        <Switch>
            {/* Home */}
            <Route path="/home" exact={true} component={LayoutInterno}/>
        </Switch>
    </Router>
);

export default Routes;