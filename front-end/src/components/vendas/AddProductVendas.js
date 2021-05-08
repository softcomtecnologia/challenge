import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, IconButton } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import { Remove } from '@material-ui/icons';

const subtracao = {
    color: "#B41C8B",
    marginTop: '0%',
    marginLeft: '43%'
};  
const adicao = {
    color: "#B41C8B",
    marginLeft: '52%',
    marginTop: '-7.5%'
};
const quantidade = {
    marginLeft: '50.5%',
    marginTop: '-6%',
    fontSize: 18
};
const button = {
    backgroundColor: "#B41C8B",
    marginLeft: '70%',
    marginTop: '-10%',
    width: 220
}
class AddProductVendas extends Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            compras: undefined,
            produto: undefined
    
        };
        this.soma = this.soma.bind(this);
        this.subtracao = this.subtracao.bind(this);
        this.adicionarProduto = this.adicionarProduto.bind(this);
    }

    soma(){
        if(this.state.count < 10){
            const soma = this.state.count + 1;
            this.setState({count: soma});
        }
        
    }
    
    subtracao(){
        if(this.state.count > 1){
            const subtracao = this.state.count - 1;
            this.setState({count: subtracao});
        }
        
    }

    adicionarProduto(){
        this.setState({produto: this.props.produto})
        const quantidade =this.state.count
        const valor =this.props.produto.produto.valor
        const preco = quantidade * valor 
        const compras = []
        compras.produtos = this.props.produto
        compras.quantidade = quantidade
        compras.preco = preco
        compras.valor = valor
        this.setState({compras: compras})
        
        this.props.export(compras)
    }


    render(){
        return (
            <>
            {console.log(this.state.compras)}
            <IconButton style={subtracao} onClick={this.subtracao}>
                <Remove/>
            </IconButton>
            <Typography style={quantidade} >{this.state.count}</Typography>
            <IconButton style={adicao}  onClick={this.soma}>
                <Add/>
            </IconButton>
            <Button variant="contained" color="secondary" style={button} onClick={() => this.adicionarProduto ()}>
                Adicionar<div style={{marginLeft: 70}}>{this.props.produto.produto.valor}</div>
            </Button>
            </>
        )
    }

}
export default AddProductVendas;