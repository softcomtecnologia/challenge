import React, { Component} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import MenuNav from './menu/MenuNav';


class LayoutInterno extends Component{
    
    render(){
        return <>
        <Switch>
            <Route path='/home'>
                <MenuNav></MenuNav>  
            </Route>
        </Switch>
        </>
    }
}

export default LayoutInterno;