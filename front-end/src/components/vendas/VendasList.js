import React, {Component}  from 'react';
import FormListVendas from './FormListVendas';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class VendasList extends Component {
    render(){
        return   <>
        <div style={{marginTop: 0, marginLeft:250, marginBlockEnd: 30}}>
           
        <p style={{marginLeft: 13}}></p>
        <Link to="/vendas/create"
        style={{ textDecoration: 'none' }}
        >
        <IconButton style={{marginTop: -18}} color="primary" aria-label="add to shopping cart">
        <Button variant="outlined" style={{background: 'orange'}}>
        Nova Venda
        </Button>
        </IconButton>
        </Link>
        <p style={{marginLeft: 0, marginTop: 30 }}>Minhas Vendas</p>
        </div>
            
            <FormListVendas/>
            
                </>

    }

}

export default VendasList