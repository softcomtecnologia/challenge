import {Component} from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_API_URL;

export class LoginPageService extends Component{
    async attemptLogin(body) {
        try {
            const res = await axios.post(`${baseUrl}/verify`, {
                email: body.email,
                password: body.password,
            });

            console.log(res.data);
            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Nome', res.data.name);
            localStorage.setItem('Email', res.data.email);
            

            return true;
        } catch (error) {
            throw error;
        }
    }
}

export default new LoginPageService();