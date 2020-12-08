import React from 'react';

import axios from 'axios';

export class VendasProdutoService extends React.Component {
    baseUrl = process.env.REACT_APP_API_API_URL;
    async postVendasProdutos(body) {
        try {
            const res = await axios.post(`${this.baseUrl}/produto/carrinho`, {
                vendaId: body.vendaId,
                status: body.status,
                produtoId: body.produtoId,
            });
            console.log(res.data.venda.id);
            return res.data.venda.id;
        } catch (error) {
            throw error;
        }
    }
     
  
}

export default new VendasService();