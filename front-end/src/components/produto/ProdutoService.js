import React from 'react';

import axios from 'axios';

export class ProdutoService extends React.Component {
    baseUrl = process.env.REACT_APP_API_API_URL;
    async postProdutos(body) {
        try {
            const res = await axios.post(`${this.baseUrl}/produto`, {
                name: body.name,
                description: body.description,
                amount: body.amount,
                value : body.value
            });
            console.log(res.data);
            return true;
        } catch (error) {
            throw error;
        }
    }

     async getProdutos() {
        try {
            const res = await axios.get(`${this.baseUrl}/produto`);
            return await res.data[1]
        } catch (error) {
            throw error;
        }
    }
     
  
}

export default new ProdutoService();