import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './views/Login';
import Register from './views/RegisterUser';
import HomePage from './views/HomePage';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
const Index = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/"  exact component={Login}/>
            <Route path="/register"  exact component={Register}/>
            <Route path="/home"  exact component={HomePage}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('root'));
