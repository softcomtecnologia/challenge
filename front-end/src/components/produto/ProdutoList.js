import React, {Component}  from 'react';
import FormListProduto from './FormListProduto';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class ProdutoList extends Component {
    render(){
        return   <>
        <div style={{marginTop: 0, marginLeft:250, marginBlockEnd: 30}}>
            
        <Link to="/produtos/create" 
        style={{ textDecoration: 'none' }}
        >
        <IconButton style={{marginTop: -18}} color="primary" aria-label="add to shopping cart">
        <Button variant="outlined" style={{background: 'orange'}}>
        Novo Produto
        </Button>
        </IconButton>
        </Link>
        <p style={{marginTop: 30}}>Meus Produtos</p>
        </div>
            
            <FormListProduto/>
            
                </>

    }

}

export default ProdutoList