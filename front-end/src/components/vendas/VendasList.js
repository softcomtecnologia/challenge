import React, {Component}  from 'react';
import FormListVendas from './FormListVendas';
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


class VendasList extends Component {
    render(){
        return   <>
        <div style={{marginTop: 0, marginLeft:250, marginBlockEnd: 30}}>
           

        <Link to="/vendas/create">
        <IconButton color="primary" aria-label="add to shopping cart">
            <AddIcon />
        </IconButton>
        </Link>
        <p style={{marginLeft: 40}}>Minhas Vendas</p>
        </div>
            
            <FormListVendas/>
            
                </>

    }

}

export default VendasList