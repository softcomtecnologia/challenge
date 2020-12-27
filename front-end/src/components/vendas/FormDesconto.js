import React, {Component} from 'react';
import { Button, TextField, Card, CardContent,Typography,createMuiTheme,ThemeProvider} from '@material-ui/core';
import VendasService from './VendasService';
import  VendasProdutoService  from '../vendas-produto/VendasProdutoService';

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
            vendaId: undefined,
            soma: undefined,
            valorLiquido: undefined,
        }

    }
    getValue(){
        this.setState({vendaId: this.props.vendaId})
    }
    finalizarVenda = async () => {
        if(!this.state.valorLiquido){
            await this.setState({valorLiquido: this.state.soma})
        }
        const res = await VendasService.postFinalizarVendas(this.props.vendaId,this.state.valorLiquido)
        if(res){
            window.location.href = '/vendas'
        }

    }
    aplicadesconto = async( e ) =>{
        const id = this.props.vendaId
        const desconto = parseInt(e.target.value);
        const res = await VendasProdutoService.getDescontoProdutos(id,desconto);
        if(res){
            this.setState({valorLiquido: res.data})
        }
    }
    render(){
        return (
            
      <Card style={{marginTop: 10}}>         
      <CardContent>
      <ThemeProvider theme={theme} >
      <Typography  color="textSecondary" gutterBottom>
          Total
        </Typography>
            <div >
               <form onSubmit={this.submit}>
                                    <div className='centerForm'>
                                        <TextField
                                            label={'Valor Bruto'}
                                            disabled
                                            variant="outlined"
                                            size='small'
                                            placeholder="Valor Bruto"
                                            value={this.props.soma}
                                            InputLabelProps={{
                                                shrink: true,
                                                }}
                                      
                                        />
                                        
                                        <TextField
                                            label={'Desconto (%)'}
                                            variant="outlined"
                                            size='small'
                                            placeholder="Desconto em Porcentagem"
                                            onBlur={this.aplicadesconto}
                                            InputLabelProps={{
                                                shrink: true,
                                                }}
                                         
                                        />

                                        <TextField
                                            label={'Valor Liquido'}
                                           disabled
                                            variant="outlined"
                                            size='small'
                                            placeholder="Valor liquido"
                                            value={this.state.valorLiquido}
                                            InputLabelProps={{
                                                shrink: true,
                                                }}
                                   
                                        />
                                    </div>

                                    <div className='checkbox'>
                                       
                                        <Button
                                            onClick={this.finalizarVenda}
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