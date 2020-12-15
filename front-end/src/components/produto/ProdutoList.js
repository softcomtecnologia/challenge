import React, {Component}  from 'react';
import FormListProduto from './FormListProduto';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';


class ProdutoList extends Component {
    render(){
        return   <>
        <div style={{marginTop: 0, marginLeft:250, marginBlockEnd: 30}}>
            
        <p style={{marginLeft: 13}}>Add</p>
        <Link to="/produtos/create">
         
        <IconButton style={{marginTop: -18}} color="primary" aria-label="add to shopping cart">
            <AddIcon  />
        </IconButton>
        </Link>
        <p >Meus Produtos</p>
        </div>
            
            <FormListProduto/>
            
                </>

    }

}

export default ProdutoList