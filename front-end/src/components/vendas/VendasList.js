import React, {Component}  from 'react';
import FormListVendas from './FormListVendas';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';


class VendasList extends Component {
    render(){
        return   <>
        <div style={{marginTop: 0, marginLeft:250, marginBlockEnd: 30}}>
           
        <p style={{marginLeft: 13}}>Add</p>
        <Link to="/vendas/create">
        <IconButton style={{marginTop: -18}} color="primary" aria-label="add to shopping cart">
            <AddIcon  />
        </IconButton>
        </Link>
        <p style={{marginLeft: 40}}>Minhas Vendas</p>
        </div>
            
            <FormListVendas/>
            
                </>

    }

}

export default VendasList