import React, { Component } from 'react';
import  MenuService  from '../../services/MenuService';
import MenuAppComponent from './MenuAppComponent';

class MenuApp extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        empresa: [],
        carrinho: [],

    };
}
  componentDidMount(){
    const emp = MenuService.getEmpresa().then(data => { 
      const empresa = data
      console.log(emp)
      this.setState({empresa: empresa})
    });
    const carr = MenuService.getCarrinho().then(data => { 
      const carrinho = data
      console.log(carr)
      this.setState({carrinho: carrinho})
    });
  }
  
    render(){
  return (
    <div >
      <MenuAppComponent empresa={this.state.empresa} compra={this.props.compra} />
    </div>
  );
}
}
export default MenuApp;
