import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import {  ShoppingCart } from '@material-ui/icons';

const carrinho = {
    marginLeft: 10,
    fontSize: 20,
    marginTop: -15,
}
const value = {
    marginLeft: -150,
    marginTop: 30,
    color: '#B41C8B',
    fontWeight: 'bold'
  }

class CarrinhoProductVenda extends Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            valor: 0.0,
        };
    }


    render(){
        
        return (
            <>
            <ShoppingCart style={{width: 15, height: 15, marginTop: -15}}/>
            <Typography  style={carrinho}>
                {this.state.count} produtos no carrinho
            </Typography>
            <Typography  style={value}>
                R$ {this.props.compra.preco}
            </Typography> 
            </>
        )
    }

}
export default CarrinhoProductVenda;