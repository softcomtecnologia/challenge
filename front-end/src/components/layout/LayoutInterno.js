import React, { Component} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import MenuApp from '../menu/MenuApp';
import Content from './Content';
import FooterBar from './FooterBar';


class LayoutInterno extends Component{

    constructor(props) {
        super(props)
        this.state = {
            compra: {
                preco: 0
            }
        };
        this.exportProps = this.exportProps.bind(this)
    }
  

    exportProps(c){
        const compra = c
        this.setState({compra: compra})
    }
  
    render(){
        return( 
                <Switch>
                    <Route path='/home' exact={true}>
                    
                        <MenuApp compra={this.state.compra}/>
                        <Content export={this.exportProps}/>
                        <FooterBar/>
                    </Route>
                </Switch>
            )
    }
}

export default LayoutInterno;