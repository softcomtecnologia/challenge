import React, {Component} from 'react';
import { Button, TextField, Checkbox, FormControlLabel, Link, ThemeProvider, createMuiTheme} from '@material-ui/core';
import { Link as Lr } from 'react-router-dom';
import LoginPageService from './LoginPageService';
/* import './styles.css'; */

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
                width: '75%'
            }
        }
    }
})


class LoginPage extends Component {
    constructor(props){
        super(props);
        const email = localStorage.getItem('email');
        if(email !== null){
            this.state={
                email: email,
                password: '',
                loading: false,
                checked: true,
                error: '',
            }
        }else{
            this.state={
                email: '',
                password: '',
                loading: false,
                checked: false,
                error: '',
            }
        }
    }

    submit = async (e) => {
        e.preventDefault();
        const { email, password, checked } = this.state;
        this.setState({ loading: true });
        try {
            if( email !== '' && password !== ''){

                const body = { email: email, password: password}
    
                const res = await LoginPageService.attemptLogin(body);
                console.log(res);
                if(res === true){
                    if(checked){
                        localStorage.setItem('email', email);
                    }
                    this.setState({ loading: false });
                    return window.location.href = "home"
                }else{
                  
                    this.setState({ error: 'Credenciais Invalidas'})
                    this.setState({ loading: false });
                    return false;
                }
            }
        } catch (error) {
            this.setState({ error: 'Credenciais Invalidas'})
            this.setState({ loading: false });
            throw error;
        }
    }

    changeEmail = (e) => {
        const value = e.target.value;
        this.setState({ email: value });
    }

    changePassword = (e) => {
        const value = e.target.value;
        this.setState({ password: value });
    }

    checkboxChange = (e) => {
        const { checked } = this.state;
        if(!checked){
            localStorage.setItem('checked', true);
            this.setState({ checked: true });
        }else{
            localStorage.removeItem('email');
            localStorage.setItem('checked', false);
            this.setState({ checked: false });
        }
    }


    // .MuiTypography-colorPrimary
    render(){
        const { password, email, loading, checked } = this.state;

        return(
            <ThemeProvider theme={theme}>
                <div className="color-background">
                    <div className="box" >
                        <div style={{float : "left"}}>
                           {  <img className='img' src='https://image.freepik.com/free-vector/isometric-e-commerce-elements-background_52683-536.jpg' width={850} alt="img" /> }
                        </div>
                        <div style={{float : "left", marginLeft : 40}}>
                            <div style={{marginLeft : 10}} >
                                <div >
                                    { <img className=" logo-form__img text-center" src='http://areacontador.softcomsistemas.com.br//img/logo_softcomshop.png' width={400} style={{marginLeft : -10}} alt="img" /> }
                                    
                                </div>
                                <form onSubmit={this.submit}>
                                    <div className='centerForm'>
                                        <TextField
                                            required={true}
                                            variant="outlined"
                                            size='small'
                                            type='email'
                                            placeholder="exemplo@exemplo.com"
                                            onChange={this.changeEmail}
                                            value={email}
                                            onSubmit={this.submit}
                                        />
                                        <TextField
                                            required={true}
                                            variant="outlined"
                                            size='small'
                                            type='password'
                                            placeholder="Password"
                                            onChange={this.changePassword}
                                            value={password}
                                            onSubmit={this.submit}
                                        />
                                    </div>
                                    <div className='checkbox'>
                                        <FormControlLabel
                                            label='Lembrar-me'
                                            control={
                                                <Checkbox
                                                    color='primary'
                                                    name='remember'
                                                    value={checked}
                                                    checked={checked}
                                                    onChange={this.checkboxChange}
                                                />
                                            }
                                                
                                        />
                                        <Link component={Lr} className='link' to='/forgot'>
                                                Esqueci minha senha
                                        </Link>
                                    </div>
                                    <div className='centerForm'>
                                        <Button
                                            disabled={loading}
                                            type='submit'
                                            variant='contained'
                                            color='primary'
                                            className='btn-login'
                                        >
                                            Entrar
                                        </Button>
                                    </div>
                                    {/* {rt} */}
                                    {this.state.error}
                                </form>

                            </div>
                            <p style={{marginLeft : 20}}> © 2020. Todos os direitos reservados </p>
                        </div>
                    </div>    
                </div>     
            </ThemeProvider>            
        );
    }
}

export default LoginPage;