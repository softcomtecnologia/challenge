import api from './api'

const LoginService =api.post('verify',{login, senha})
    .then(response => this.setState({ data: response.data }))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });

export default LoginService;