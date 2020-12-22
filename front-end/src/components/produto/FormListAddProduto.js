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
import  VendasProdutoService  from '../vendas-produto/VendasProdutoService';
import { DeleteForever, Edit} from '@material-ui/icons';
import  VendaProdutoEditForm  from '../vendas-produto/VendaProdutoEditForm';



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
      error: null,
      status: 'INICIADA',
      vendaId: null,
      produtoId: null,
      amount: '',
      value: '',
      loading: false,
      edit: false,
      produtos: [],
      produto: {
        value: 0.0,
        amount: 1
      },
      produtosForm: []
    }
    this.editarProduto = this.editarProduto.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.atualizaQtd = this.atualizaQtd.bind(this)
    
}

submit = async (e) => {
  e.preventDefault();
  const body = { status: this.status, produtoId: this.produtoId, vendaId : this.vendaId, amount: this.amount, value: this.value} = this.state;
  
  try {
            const res = await VendasProdutoService.postVendasProdutos(body);
            if(res){
              const res = await VendasProdutoService.getVendasProdutos(this.props.id);
              console.log(res);
              var p = this.state.produtosForm;
              console.log(this.state.produto)
              p.push(this.state.produto);
              this.setState({produtosForm: p});
            }
            
  } catch (error) {
 
    this.setState({ error: 'Não foi possivel adicionar o produto'})
    throw error;
  }
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
 /*  this.setState({produto: this.state.defaultproduto}) */
}


deleteVendasProduto = (e, id) => {
 console.log(id, this.props.id);
  const vendaId = this.props.id;
  const res = VendasProdutoService.deleteVendasProdutos(id,vendaId);
  console.log(res);
 /*  const resp = VendasProdutoService.getVendasProdutos(this.state.vendaId); */
/*  this.atualizaProdutos(); */
}

atualizaPreco = (e) => {
   this.state.produto.value = parseInt(e.target.value);

}
reset (){
  this.setState({produto: null})
}
editarProduto(e, id){
    this.setState({edit: true})
    console.log(this.state.edit);
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
            return this.state.produtos
        })
    })
}


  render(){

  return (

    <div>
      <Card  style={{width : 1000, marginTop: 10 }}>
      

      <FormControl  style={{whidth: 50}}>
      {/* <input type="hidden" value="${value.id}" name="produto"></input> */}
      <TableRow style={{marginLeft: 300, width: 800, borderColor: 'white'}}>
            <StyledTableCell >
            <Autocomplete
            onClick={this.reset}
            id="combo-box-demo"
            placeholder="Selecione..."
            options={this.state.produtos}
            getOptionLabel={(produto) => produto.id +' - '+ produto.name}
            onChange={(event, newValue) => {  
            this.setState({produto : newValue})
           /*  this.state.produto.value = newValue.value; */
            console.log(this.state.produto.value)
            this.setState({value:  newValue.value, produtoId: newValue.id, amount: newValue.amount })
            this.setState({vendaId : this.props.id});
            }}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Selcione..." variant="outlined" />}
            />
            </StyledTableCell>
            <StyledTableCell  >
            <TextField
                style={{width: 150}}
                label="Qtd"
                type="number"
                defaultValue={1}
                InputLabelProps={{
                shrink: true,
                }}
                onBlur={this.atualizaQtd}
                variant="outlined"
                />
            </StyledTableCell>
            <StyledTableCell >
                <TextField
                label="Valor"
                placeholder={this.state.produto.value}
                style={{width: 150}}
                type="float"
                onClick={this.atualizaPreco}
                onChange={this.atualizaPreco}
                /* value={this.state.produto.value} */
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                />
            </StyledTableCell>
            <StyledTableCell align={"right"} >             
                <IconButton onClick={this.submit}  color="primary" aria-label="add produto">
                    <AddIcon  />
                </IconButton>
            </StyledTableCell>
        </TableRow>


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
            <StyledTableCell align="right">Editar</StyledTableCell>
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
         <td align="right" >
           {this.state.edit ?
           <VendaProdutoEditForm
           vendaId={this.state.vendaId} 
           produtoId={row.id}
           name={row.name}
           description={row.description}
           amount={row.amount}
           value={row.value}
           /> : null}
         <IconButton  color="primary" aria-label="Editar produto">
                    <Edit onClick={(e) => this.editarProduto(e, row.id)}/>
                    {/* onClick={(e) => this.deleteVendasProduto(e, row.id)}  */}
                </IconButton>
         </td>
         <td align="right" >
         <IconButton  color="primary" aria-label="delete produto">
                    <DeleteForever onClick={(e) => this.deleteVendasProduto(e, row.id)} />
                </IconButton>
         </td>
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