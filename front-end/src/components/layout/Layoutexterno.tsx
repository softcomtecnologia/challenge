import React, { Component} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";


class LayoutExterno extends Component{
    
    render(){
        return (
                <Switch>
                    <Route path='/' exact={true}>
                    </Route>
                </Switch>
                )
    }
}

export default LayoutExterno;