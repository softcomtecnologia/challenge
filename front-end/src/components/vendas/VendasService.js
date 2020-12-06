import React from 'react';

import axios from 'axios';

export class VendasService extends React.Component {
    baseUrl = process.env.REACT_APP_API_API_URL;
    async postVendas(body) {
        try {
            const res = await axios.post(`${this.baseUrl}/vendas`, {
                name: body.name,
                email: body.email,
                fone: body.fone,
            });
            console.log(res.data.venda.id);
            return res.data.venda.id;
        } catch (error) {
            throw error;
        }
    }
     
  
}

export default new VendasService();