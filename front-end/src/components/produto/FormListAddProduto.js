import React, {Component} from 'react';
import {withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { Card, CardContent } from '@material-ui/core';
import  ProdutoService  from './ProdutoService';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
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
      produto: {
        value: 0.0,
        amount: 1
      },
      defaultproduto: {
        value: 0.0,
        amount: 1
      },
      produtosForm: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.atualizaQtd = this.atualizaQtd.bind(this)
    
}

handleChange(e) {
  this.setState({option: this.props.produtos[e.target.value].id})
}
finalizar = (e) => {
  console.log(this.state.produtosForm);
}
adicionarProduto = (e) => {
  var p = this.state.produtosForm;
  console.log(this.state.produto)
  p.push(this.state.produto);
  this.setState({produtosForm: p});
  this.setState({produto: this.state.defaultproduto})
}


apagarProduto = (e) => {
  this.state.produtosForm.map((produto, index) => {
      if (produto.id == e.target.dataset.value) {
       var newProdutosForm = this.state.produtosForm;
       newProdutosForm.pop(index);
       console.log(newProdutosForm);
       this.setState({produtosForm: newProdutosForm});
      }
  });
}

atualizaPreco = (e) => {
  
   this.state.produto.value = parseInt(e.target.value);
}
reset (){
  this.setState({produto: null})
}
 

atualizaQtd (e, v){
  this.state.produto.amount = parseInt(e.target.value);
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
      onClick={this.reset}
      id="combo-box-demo"
      placeholder="Selecione..."
      options={this.state.produtos}
      getOptionLabel={(produto) => produto.id +' - '+ produto.name}
      onChange={(event, newValue) => {
        /* this.state.produto = newValue; */
        this.setState({produto : newValue})
        this.state.produto.value = newValue.value;
        console.log(this.state.produto.value)
      }}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Selcione..." variant="outlined" />}
    />

<TextField
          id="outlined-number"
          label="Qtd"
          type="number"
          defaultValue={1}
          InputLabelProps={{
            shrink: true,
          }}
          onBlur={this.atualizaQtd}
          variant="outlined"
        />

      <TextField
          id="outlined-number"
          label="Valor"
          placeholder={this.state.produto.value}
          type="float"
          size="small"
          width={10}
          onClick={this.atualizaPreco}
          onChange={this.atualizaPreco}
          /* value={this.state.produto.value} */
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

      <IconButton onClick={this.adicionarProduto}  color="primary" aria-label="add produto">
             <AddIcon  />
      </IconButton>


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
      <td align="right" >{row.value}</td>
         <td align="right">{row.id}</td>
         <td align="right" ><button onClick={this.apagarProduto} data-value={row.id}>Apagar</button></td>
       </StyledTableRow> 
       
      ))
      
      }
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