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
                width: '30%'
            }
        }
    }

})



class FormDesconto extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            vendaId: undefined
        }

    }
    getValue(){
        this.setState({vendaId: this.props.vendaId})
        console.log(this.state.vendaId)
    }
    render(){
        return (
            
      <Card style={{marginTop: 10}}>         
      <CardContent>
      <ThemeProvider theme={theme} >
      <Typography  color="textSecondary" gutterBottom>
          Desconto
        </Typography>
            <div >
               <form onSubmit={this.submit}>
                                    <div className='centerForm'>
                                        <TextField
                                            required={true}
                                            variant="outlined"
                                            size='small'
                                            placeholder="Valor Bruto"
                                            /* onChange={this.changeName}
                                            value={name}
                                            onSubmit={this.submit} */
                                        />
                                        
                                        <TextField
                                            required={true}
                                            variant="outlined"
                                            size='small'
                                            placeholder="Desconto em Porcentagem"
                                            /* onChange={this.changeEmail}
                                            value={email}
                                            onSubmit={this.submit} */
                                        />

                                        <TextField
                                            required={true}
                                            variant="outlined"
                                            size='small'
                                            placeholder="Valor liquido"
                                            /* onChange={this.changeFone}
                                            value={fone}
                                            onSubmit={this.submit }*/
                                        />
                                    </div>

                                    <div className='checkbox'>
                                       
                                        <Button
                                            onClick={this.getValue}
                                            disabled={false}
                                            type='submit'
                                            variant='contained'
                                            color='primary'
                                            className='btn-login'
                                        >
                                            Finalizar Venda
                                        </Button>
                                       
                                    </div>              
                                </form>
            </div>
            </ThemeProvider>
      </CardContent>
    </Card>
   
    
    
  
           
        )
    }
}

export default FormDesconto;