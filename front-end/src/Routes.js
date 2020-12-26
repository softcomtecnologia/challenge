import React from 'react';
import {Switch, BrowserRouter as Router,Route,} from 'react-router-dom';
import LayoutInterno from './components/interno/LayoutInterno';
import LayoutExterno from './components/externo/LayoutExterno'
import ModalCreateProduto from './components/modals/ModalCreateProduto';
import ModalCreateVendas from './components/modals/ModalCreateVenda';
import VendaProdutoEditForm from './components/vendas-produto/VendaProdutoEditForm';
import FormDesconto from './components/vendas/FormDesconto';

const Routes = () => (
    <Router>
        <Switch>
        {/* Teste de componentes */}
        <Route path="/test" exact={true} component={FormDesconto}/>

            {/* Rotas externas da aplicação */}
          <Route exact path="/login" component={LayoutExterno}/>
          <Route exact path="/" component={LayoutExterno}/>

              {/* Rotas interna da aplicação */}

                {/* Home */}
              <Route path="/home" exact={true} component={LayoutInterno}/>

                {/* Produtos*/}
              <Route path="/produtos" exact={true} component={LayoutInterno}/>
              <Route path="/produtos/create" exact={true} component={LayoutInterno}/>

                {/* Vendas*/}
              <Route path="/vendas" exact={true} component={LayoutInterno}/>
              <Route path="/vendas/create" exact={true} component={LayoutInterno}/>
              <Route path="/vendas/produto" exact={true} component={LayoutInterno}/>

                {/* Modais */}
              <Route path="/modal/vendas" exact={true} component={ModalCreateVendas}/>
              <Route path="/modal/produto" exact={true} component={ModalCreateProduto}/>

        </Switch>
    </Router>
);

export default Routes;