import React, { Component } from 'react';
import  ProductService  from '../../services/ProductService';
import CardProductComponent from '../produtos/CardProductComponent';
import Grid from '@material-ui/core/Grid';


class CamaCasinha extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        produtos: [],

    };
}

getOption(option){
  console.log(option)
}
  componentDidMount(){
    const res = ProductService.getProdutos().then(produtos => { 
        console.log(res)
      this.setState({produtos: produtos.data})
    });
  }
    render(){
  return (
    <div style={{marginLeft: 100, marginTop: 50}}>
        Cama e Casinha
      <Grid container spacing={24}>
        {this.state.produtos.map((produto) => (
          <Grid>
            {produto.categoria === 'camaecasa' ?
             <CardProductComponent produto={produto} export={this.props.export}/>: null}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
}
export default CamaCasinha;
