import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './views/Login';
import Register from './views/RegisterUser';
import HomePage from './views/HomePage';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
const getAccessToken = () => localStorage.getItem('access_token');
const isAuthenticated = () => !!getAccessToken();
const Index = () => (
    
    <BrowserRouter>
        <Switch>
            <Route path="/"  exact component={isAuthenticated() ? HomePage : Login}/>
            <Route path="/register"  exact component={Register}/>
            <Route path="/home"  exact component={isAuthenticated() ? HomePage : Login}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('root'));
