import React, {Component} from 'react';
import {withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { Card, CardContent } from '@material-ui/core';
import  ProdutoService  from './ProdutoService';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import {Table,TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



class FormListAddProduto extends Component {
  constructor(props){
    super(props);
    this.state = {
      produtos: [],
      produto: null,
      produtosForm: []
    }
    this.handleChange = this.handleChange.bind(this)
    
}

handleChange(e) {
  this.setState({option: this.props.produtos[e.target.value].id})
}
finalizar = (e) => {
  console.log(this.state.produtosForm);
}
adicionarProduto = (e) => {
  var p = this.state.produtosForm;
  p.push(this.state.produto);
  this.setState({produtosForm: p});
}

apagarProduto = (e) => {
  console.log(e.target.dataset.value);
  this.state.produtosForm.map((produto, index) => {
    console.log(produto);
      if (produto.id == e.target.dataset.value) {
       var newProdutosForm = this.state.produtosForm;
       newProdutosForm.pop(index)
       this.setState({produtosForm: newProdutosForm});
      }
  });
}

componentDidMount() {
    ProdutoService.getProdutos().then(produtos => {
        produtos.map(produto => {
            const mapping = produto;
            const arr = this.state.produtos.slice();
            arr.push(mapping);
            this.setState({ produtos: arr });
        })
    })
}


  render(){

  return (

    <div>
      <Card  style={{width : 1000, marginTop: 10 }}>

      <FormControl  style={{whidth: 50}}>
      <input type="hidden" value="${value.id}" name="produto"></input>
      <Autocomplete
      id="combo-box-demo"
      placeholder="Selecione..."
      options={this.state.produtos}
      getOptionLabel={(produto) => produto.id +' - '+ produto.name}
      onChange={(event, newValue) => {
        this.state.produto = newValue;
      }}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="produto" variant="outlined" />}
    />
      <button 
      onClick={this.adicionarProduto}
      >+</button>
      {/* <Select
      options={options} /> */}
      </FormControl>
      <CardContent>
      <TableContainer >
          <Table >
            <TableHead>
            <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">Descrição</StyledTableCell>
            <StyledTableCell align="right">Quantidade</StyledTableCell>
            <StyledTableCell align="right">Valor</StyledTableCell>
            <StyledTableCell align="right">cod</StyledTableCell>
            <StyledTableCell align="right">Apagar</StyledTableCell>
          </TableRow>
            </TableHead>
            <TableBody>
      {this.state.produtosForm.map((row) => (
         <StyledTableRow key={row.id}>
        <StyledTableCell component="th" scope="row">
           {row.name}
         </StyledTableCell>
         <td align="right">{row.description}</td>
         <td align="right">{row.amount}</td>
         <td align="right">{row.value}</td>
         <td align="right">{row.id}</td>
         <td align="right" ><button onClick={this.apagarProduto} data-value={row.id}>Apagar</button></td>
       </StyledTableRow>
      ))}
       </TableBody>
       </Table>
       </TableContainer>
      </CardContent>
        
      
      <button 
      onClick={this.finalizar}
      >Finalizar</button>
      </Card>
    </div>
  )
  }
}

export default FormListAddProduto;