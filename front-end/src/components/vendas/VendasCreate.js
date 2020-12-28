import React, {Component} from 'react';
import { Button, TextField, Card, CardContent,Typography,createMuiTheme,ThemeProvider} from '@material-ui/core';
import VendasService from './VendasService';
import FormListAddProduto from '../produto/FormListAddProduto';

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



class VendasCreate extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
        id: null,
        name: 'CONSUMIDOR',   
        email : 'consumidor@consumidor.com.br',
        fone : '(99) 9 9999-9999',
        address : 'Rua Raul Henriques de Sá',
        loading: false,
        error: '',
        }
    }
    submit = async (e) => {
      e.preventDefault();
      const body = { name: this.name, email : this.email, fone: this.fone, address: this.address} = this.state;
      try {

              const res = await VendasService.postVendas(body);
              if(res){
                  this.setState({ loading: true });
                  this.setState({id : res});
       
              }else{
                
                  this.setState({ error: 'Venda não validada: rever atributos'})
                  this.setState({ loading: false });
                  return false;
              }
          
      } catch (error) {
          this.setState({ error: 'Venda não validada: rever atributos erro> 500'})
          this.setState({ loading: false });
          throw error;
      }
  }

  changeName = (e) => {
      const value = e.target.value;
      this.setState({ name: value });
  }
  changeEmail = (e) => {
    const value = e.target.value;
    this.setState({ email: value });
  }
  changeFone = (e) => {
    const value = e.target.value;
    this.setState({ fone: value });
  }
  changeAddress = (e) => {
    const value = e.target.value;
    this.setState({ address: value });
  }


    render(){
        const { name, email, fone, address } = this.state;
        return (
            <div style={{width:  1000, marginLeft : 285}}>
                Venda: {this.state.id}
            <Card >
               
      <CardContent>
      <ThemeProvider theme={theme} >
      <Typography  color="textSecondary" gutterBottom>
          Cliente Venda
        </Typography>
            <div >
               <form onSubmit={this.submit}>
                                    <div className='centerForm'>
                                        <TextField
                                            
                                            required={true}
                                            variant="outlined"
                                            size='small'
                                            placeholder="Nome do Cliente"
                                            onChange={this.changeName}
                                            value={name}
                                            onSubmit={this.submit}
                                            label="Nome do Cliente"
                                            InputLabelProps={{
                                                shrink: true,
                                                }}
                                        />
                                        
                                        <TextField
                                            required={true}
                                            variant="outlined"
                                            size='small'
                                            placeholder="Email"
                                            onChange={this.changeEmail}
                                            value={email}
                                            onSubmit={this.submit}
                                            label="Email"
                                            InputLabelProps={{
                                                shrink: true,
                                                }}
                                        />

                                        <TextField
                                            required={true}
                                            variant="outlined"
                                            size='small'
                                            placeholder="Telefone"
                                            onChange={this.changeFone}
                                            value={fone}
                                            onSubmit={this.submit}
                                            label="Telefone"
                                            InputLabelProps={{
                                                shrink: true,
                                                }}
                                        />
                                        <TextField
                                            variant="outlined"
                                            size='small'
                                            placeholder="Endereço"
                                            onChange={this.changeAddress}
                                            value={address}
                                            onSubmit={this.submit}
                                            label="Endereço (opicional)"
                                            InputLabelProps={{
                                                shrink: true,
                                                }}
                                        />
                                    </div>

                                    <div className='checkbox'>
                                        {this.state.error}
                                        {this.state.id ? 
                                        null : <Button
                                            disabled={false}
                                            type='submit'
                                            variant='contained'
                                            style={{background: 'orange'}}
                                        >
                                            Iniciar Venda
                                        </Button>}
                                       
                                    </div>              
                                </form>
            </div>
            </ThemeProvider>
      </CardContent>
    </Card>
    {this.state.loading ? <FormListAddProduto id={this.state.id}/> : 'Status: Venda não iniciada, nenhum dado salvo'}
    
    
    </div>
           
        )
    }
}

export default VendasCreate;