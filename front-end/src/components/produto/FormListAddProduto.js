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
import FormDesconto from '../vendas/FormDesconto';



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
      soma: undefined,
      error: null,
      status: 'INICIADA',
      vendaId: null,
      produtoId: 'mudi',
      amount: '',
      value: '',
      loading: false,
      edit: false,
      produtos: [],
      produto: {
        value: 0.0,
        amount: 1
      },
      editvendaId: undefined,
      editprodutoId: undefined,
      editname: undefined,
      editdescription: undefined,
      editamount: undefined,
      editvalue: undefined,
      produtosForm: []
    }
    this.editarProduto = this.editarProduto.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.atualizaQtd = this.atualizaQtd.bind(this)
    this.resetAutoComplete = this.resetAutoComplete(this)
    
}

submit = async (e) => {
  e.preventDefault();
  const body = { status: this.status, produtoId: this.produtoId, vendaId : this.vendaId, amount: this.amount, value: this.value} = this.state;
  
  try {
            const res = await VendasProdutoService.postVendasProdutos(body);
            if(res){
              const res = await VendasProdutoService.getVendasProdutos(this.props.id);
              this.setState({produtosForm: res.produtos});
              this.somaProdutos();
            }
            
  } catch (error) {
 
    this.setState({ error: 'Não foi possivel adicionar o produto'})
    throw error;
  }
}
handleChange(e) {
  this.setState({option: this.props.produtos[e.target.value].id})
}

adicionarProduto = (e) => {
  var p = this.state.produtosForm;
  p.push(this.state.produto);
  this.setState({produtosForm: p});
}


deleteVendasProduto = async (e, id) => {
  const vendaId = this.props.id;
  const res = await VendasProdutoService.deleteVendasProdutos(id,vendaId);

  if (res) {
    const resp = await VendasProdutoService.getVendasProdutos(this.props.id);
    this.setState({produtosForm: resp.produtos});
    this.somaProdutos();
  }

}

atualizaPreco = async (e) => {
  this.setState({value: parseInt(e.target.value)})
    /* this.state.value = parseInt(e.target.value); */
}
reset (){
  this.setState({produto: null})
}

editarProduto(e,row){
  console.log(row);
 
  this.setState({editvendaId: this.state.vendaId}); 
  this.setState({editprodutoId :row.id});
  this.setState({editname : row.name});
  this.setState({editdescription : row.description});
  this.setState({editamount :row.amount});
  this.setState({editvalue: row.value});

    this.setState({edit: true})
      
    
}
finalizaredicao = async () =>{
  this.setState({edit: false});
  if(this.state.edit === false){
    const resp = await VendasProdutoService.getVendasProdutos(this.props.id);
    this.setState({produtosForm: resp.produtos});
    this.somaProdutos();
  }

    
}
somaProdutos = async () =>{
  const res = await VendasProdutoService.getSomaProdutos(this.state.vendaId);
  this.setState({soma: res.data});
}

atualizaQtd = async (e, v) =>{
  this.setState({amount: parseInt(e.target.value)})
  /* this.state.amount = parseInt(e.target.value); */
}
resetAutoComplete(){
  this.setState({amount : 1, value : 0});
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
      <TableRow style={{marginLeft: 630, width: 800, borderColor: 'white'}}>
            <StyledTableCell >
            <Autocomplete
            onClick={this.reset}
            id="combo-box-demo"
            placeholder="Selecione..."
            options={this.state.produtos}
            getOptionLabel={(produto) => produto.id +' - '+ produto.name}
            onChange={(event, newValue) => {
            if(!newValue){

            }else{  
            newValue.amount = this.state.produto.amount
            this.setState({produto : newValue})
            this.setState({value:  newValue.value, produtoId: newValue.id, amount: newValue.amount })
            this.setState({vendaId : this.props.id});
            }
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
                onClick={this.atualizaQtd}
                onBlur={this.atualizaQtd}
                variant="outlined"
                />
            </StyledTableCell>
            <StyledTableCell >
                <TextField
                label="Valor"
                placeholder={this.state.produto.value}
                value={this.state.produto.value}
                style={{width: 150}}
                type="float"
                onClick={this.atualizaPreco}
                onChange={this.atualizaPreco}
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
           finalizaredicao={this.finalizaredicao}
           edit={this.state.edit}
           vendaId={this.state.editvendaId} 
           produtoId={this.state.editprodutoId}
           name={this.state.editname}
           description={this.state.editdescription}
           amount={this.state.editamount}
           value={this.state.editvalue}
           /> : null}
         <IconButton  color="primary" aria-label="Editar produto">
                    <Edit onClick={(e) => this.editarProduto(e, row)}/>
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
        
      
      
      </Card >
      <FormDesconto
      soma={this.state.soma}
      vendaId={this.state.vendaId}/>
    </div>
  )
  }
}

export default FormListAddProduto;