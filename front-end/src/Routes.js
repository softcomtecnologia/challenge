import React from 'react';
import {Switch, BrowserRouter as Router,
    Route,} from 'react-router-dom';
import LayoutInterno from './components/interno/LayoutInterno';
import LayoutExterno from './components/externo/LayoutExterno'
import ModalCreateProduto from './components/modals/ModalCreateProduto';
import ModalCreateVendas from './components/modals/ModalCreateVenda';
import Dashboard from './components/dashboard/Dashboard';

const Routes = () => (
    <Router>
        <Switch>
        {/* Teste de componentes */}
        <Route exact path="/test" exact={true} component={Dashboard}/>

            {/* Rotas externas da aplicação */}
          <Route exact path="/login" component={LayoutExterno}/>
          <Route exact path="/" component={LayoutExterno}/>

              {/* Rotas interna da aplicação */}

                {/* Home */}
              <Route exact path="/home" exact={true} component={LayoutInterno}/>

                {/* Produtos*/}
              <Route exact path="/produtos" exact={true} component={LayoutInterno}/>
              <Route exact path="/produtos/create" exact={true} component={LayoutInterno}/>

                {/* Vendas*/}
              <Route exact path="/vendas" exact={true} component={LayoutInterno}/>
              <Route exact path="/vendas/create" exact={true} component={LayoutInterno}/>
              <Route exact path="/vendas/produto" exact={true} component={LayoutInterno}/>

                {/* Modais */}
              <Route exact path="/modal/vendas" exact={true} component={ModalCreateVendas}/>
              <Route exact path="/modal/produto" exact={true} component={ModalCreateProduto}/>

        </Switch>
    </Router>
);

export default Routes;