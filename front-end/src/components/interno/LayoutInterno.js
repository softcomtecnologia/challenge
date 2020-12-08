import React, { Component} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import LayoutBasic from './menu/LayoutBasic';
import ProdutoCreate from '../produto/ProdutoCreate';
import ProdutoList from '../produto/ProdutoList';
import VendasCreate from '../vendas/VendasCreate'


class LayoutInterno extends Component{
    
    render(){
        return <>
        <Switch>
            <Route path='/home' exact={true}>
                  <LayoutBasic/>
            </Route>
            <Route path='/produtos' exact={true}>
                  <LayoutBasic/>
                  <ProdutoList/>
            </Route>
            <Route path='/produtos/create' exact={true}>
                  <LayoutBasic/>
                  <ProdutoCreate/>
            </Route>
            <Route path='/vendas/create' exact={true}>
                  <LayoutBasic/>
                  <VendasCreate/>
            </Route>
            <Route path='/vendas/produto' exact={true}>
                  <LayoutBasic/>
                  {<VendasCreate/>}
            </Route>
            <Route path='/vendas' exact={true}>
                  <LayoutBasic/>
               
            </Route>
        </Switch>
        </>
    }
}

export default LayoutInterno;