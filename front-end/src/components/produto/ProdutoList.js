import React, {Component}  from 'react';
import FormListProduto from './FormListProduto';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4),
    },
  },
}));


class ProdutoList extends Component {
    render(){
        return   <>
        <div style={{marginTop: 0, marginLeft:250, marginBlockEnd: 30}}>
            <p >Meus Produtos</p>

        <Link to="/produtos/create">
        <IconButton color="primary" aria-label="add to shopping cart">
            <AddIcon />
        </IconButton>
        </Link>
        </div>
            
            <FormListProduto/>
            
                </>

    }

}

export default ProdutoList