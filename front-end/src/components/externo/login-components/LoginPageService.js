import {Component} from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_API_URL;

export class LoginPageService extends Component{
    async attemptLogin(body) {
        try {
            const res = await axios.post(`${baseUrl}/auth/sign_in`, {
                email: body.email,
                password: body.password,
            });

            console.log(res.data);
            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Nome', res.data.nome);
            localStorage.setItem('Email', res.data.email);
            localStorage.setItem('Cnpj', res.data.cnpj);
            

            return true;
        } catch (error) {
            throw error;
        }
    }
}

export default new LoginPageService();