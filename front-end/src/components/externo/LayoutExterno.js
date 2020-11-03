import React, { Component} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import LoginPage from './login-components/LoginPage';


class LayoutInterno extends Component{
    
    render(){
        return <>
        <Switch>
            <Route path='/login'>
                <LoginPage />   
            </Route>
        <Route path='/'>
                <LoginPage />   
            </Route>
        </Switch>
        </>
    }
}

export default LayoutInterno;