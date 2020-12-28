import React, {Component} from 'react';
import {Card,CardActions, CardContent, Modal, Fade, TextField} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  VendasProdutoService  from './VendasProdutoService';



class VendaProdutoEditForm extends Component {
    constructor(props){
        super(props);
        this.state={
            produtoId: null,
            vendaId: null,
            name: null,
            amount: null,
            value: null,
            open: true,
            description: null,
        }
        this.putProdutos = this.putProdutos.bind(this);
        this.changeQtd = this.changeQtd.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    handleClose = () => {
        this.setState({open: false});
      };
      handleChange = () => {
        this.setState({description: this.props.description, name: this.props.name,produtoId: this.props.produtoId, vendaId : this.props.vendaId, amount: this.props.amount, value: this.props.value});
      };
      putProdutos = async () => {
        const body = ({ produtoId: this.state.produtoId, vendaId : this.state.vendaId, amount: this.state.amount, value: this.state.value});
        const res = await VendasProdutoService.putVendasProdutos(body);
        console.log(res);
        this.setState({open: false});
        this.props.finalizaredicao();
      }    
      changeQtd(e){
        this.setState({amount: parseInt(e.target.value)});
      }
      changeValue(e){
        this.setState({value: parseInt(e.target.value)});
      }
      
      

      componentDidMount() {    
        this.handleChange();
    }
  
render(){
  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    closeAfterTransition
    open={this.state.open}
    onClose={this.handleClose}
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={this.state.open} style={{margin: 200}}>
      <div style={{width: 400, marginLeft: 500}} >
      <Card  variant="outlined" >
      <CardContent>
        <Typography  color="textSecondary" gutterBottom style={{marginBlockEnd: 50}}>
        {this.state.produtoId} - {this.state.name}
        </Typography>
        <Typography>
         <TextField 
         label="Quantidade"
         type="number"
         size="small"
         InputLabelProps={{
           shrink: true,
         }}
         variant="outlined"
        defaultValue={this.props.amount} onBlur={this.changeQtd}/>
        </Typography>
        <TextField 
        label="Valor"
        type="number"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        defaultValue={this.props.value} onBlur={this.changeValue}/>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={this.handleClose}>Sair</Button>
        <Button size="small" onClick={this.putProdutos}>Salvar</Button>
      </CardActions>
    </Card>
      </div>
    </Fade>
  </Modal>
  );
}
}

export default VendaProdutoEditForm
