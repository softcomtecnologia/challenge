import React, {Component} from 'react';
import {Card,CardActions, CardContent, Modal, Fade} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  VendasProdutoService  from './VendasProdutoService';



class VendaProdutoEditForm extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
        this.putProdutos = this.putProdutos.bind(this);
    }
    handleClose = () => {
        this.setState({open: false});
      };
      putProdutos (){
          console.log(this.props.produtoId)
        this.setState({ produtoId: this.props.produtoId, vendaId : this.props.vendaId, amount: this.props.amount, value: this.props.value});
        const body = ({ produtoId: this.produtoId, vendaId : this.vendaId, amount: this.amount, value: this.value});
        console.log(body);
        const res = VendasProdutoService.putVendasProdutos(body);
        console.log(res);
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
        <Typography  color="textSecondary" gutterBottom>
          COD : {this.props.id}
        </Typography>
        <Typography variant="h5" component="h2">
         {this.props.name}
        </Typography>
        <Typography  color="textSecondary">
          {this.props.description}
        </Typography>
         QUANTIDADE : <input defaultValue={this.props.amount}></input><br/>
         VALOR : <input defaultValue={this.props.value}></input>
      </CardContent>
      <CardActions>
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
