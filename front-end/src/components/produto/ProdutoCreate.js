import React, {Component} from 'react';
import { Button, TextField, Card, CardContent,Typography,createMuiTheme,ThemeProvider, CardActions} from '@material-ui/core';
import ProdutoService from './ProdutoService';

const theme = createMuiTheme({
    overrides: {
        MuiTypography:{
            colorPrimary:{
                color: '#0073FC'
            }
        },
        MuiInputBase:{
            input:{
                backgroundColor: 'FFFFFF',
                border: '1px solid #CCCCCC',
                borderRadius: '4px',
            },
            root:{
                marginBottom: '16px',
                fontFamily: 'Wonder Unit Sans',
                width: '100%'
            }
        },
        MuiFormControl:{
            root:{  
                alignItems: 'center',
                width: '50%'
            }
        }
    }

})



class ProdutoCreate extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
        name: '',   
        description : '',
        amount : '',
        value : '',
        loading: false,
        error: '',
        }
    }
    submit = async (e) => {
      e.preventDefault();
      const body = { name: this.name, description: this.description, amount: this.amount, value: this.value} = this.state;
      this.setState({ loading: true });
      try {
        

              /* const body = { name: name, description: description, amount: amount, value: value} = this.state; */
               
              const res = await ProdutoService.postProdutos(body);
      
              if(res === true){
                  this.setState({ loading: false });
                  return window.location.href = '/modal/produto'
                  /* return window.location.reload(); */
              }else{
                
                  this.setState({ error: 'Produto não valido: rever atributos'})
                  this.setState({ loading: false });
                  return false;
              }
          
      } catch (error) {
          this.setState({ error: 'Produto não valido: rever atributos'})
          this.setState({ loading: false });
          throw error;
      }
  }

  changeName = (e) => {
      const value = e.target.value;
      this.setState({ name: value });
  }
  changeDescription = (e) => {
    const value = e.target.value;
    this.setState({ description: value });
  }
  changeAmount = (e) => {
    const value = e.target.value;
    this.setState({ amount: value });
  }
  changeValue = (e) => {
    const value = e.target.value;
    this.setState({ value: value });
  }


    render(){
        const { name, description, amount, value } = this.state;
        return (
            <Card  style={{width:  1000, marginLeft : 285}}>
      <CardContent>
      <ThemeProvider theme={theme} >
      <Typography  color="textSecondary" gutterBottom>
          Cadastro de Produtos
        </Typography>
            <div >
               <form onSubmit={this.submit}>
                                    <div className='centerForm'>
                                        <TextField
                                            required={true}
                                            variant="outlined"
                                            size='small'
                                            placeholder="Nome Produto"
                                            onChange={this.changeName}
                                            value={name}
                                            onSubmit={this.submit}
                                        />
                                        
                                        <TextField
                                            required={true}
                                            variant="outlined"
                                            size='small'
                                            placeholder="Descrição"
                                            onChange={this.changeDescription}
                                            value={description}
                                            onSubmit={this.submit}
                                        />

                                        <TextField
                                            required={true}
                                            variant="outlined"
                                            size='small'
                                            placeholder="Quantidade Produto"
                                            onChange={this.changeAmount}
                                            value={amount}
                                            onSubmit={this.submit}
                                        />
                                        <TextField
                                            required={true}
                                            variant="outlined"
                                            size='small'
                                            placeholder="Valor Produto"
                                            onChange={this.changeValue}
                                            value={value}
                                            onSubmit={this.submit}
                                        />
                                    </div>
                                    <div className='checkbox'>
                                        {this.state.error}
                                        <Button
                                            disabled={false}
                                            type='submit'
                                            variant='contained'
                                            color='primary'
                                            className='btn-login'
                                        >
                                            Cadastrar
                                        </Button>
                                    </div>
                            
                                </form>

            </div>
            </ThemeProvider>
      </CardContent>
      <CardActions>
{/*         <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
            
        )
    }
}

export default ProdutoCreate;