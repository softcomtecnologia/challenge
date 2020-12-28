import React from 'react';

import axios from 'axios';

export class VendasProdutoService extends React.Component {
    baseUrl = process.env.REACT_APP_API_API_URL;
    async postVendasProdutos(body) {
        try {
            const res = await axios.post(`${this.baseUrl}/produto/add`, {
                venda_id: body.vendaId,
                status: body.status,
                amount: body.amount,
                value: body.value,
                produto_id: body.produtoId
            });
            console.log(res);
            return true;
        } catch (error) {
            throw error;
        }
    }
    
    async deleteVendasProdutos(id, vendaId) {
        try {
            const res = await axios.delete(`${this.baseUrl}/carrinho/${vendaId}?produto_id=${id}`);
            return await res.data.data
        } catch (error) {
            throw error;
        }
    }

    async getVendasProdutos(id) {
        try {
            const res = await axios.get(`${this.baseUrl}/carrinho/${id}`);
            return await res.data
        } catch (error) {
            throw error;
        }
    }

    async putVendasProdutos(body) {
        try {
            const res = await axios.put(`${this.baseUrl}/carrinho/${body.vendaId}`, {
                amount: body.amount,
                value: body.value,
                produto_id: body.produtoId
            });
            return res.data;
        } catch (error) {
            throw error;
        }
    }

    async getSomaProdutos(id){
        try {
            const res = await axios.get(`${this.baseUrl}/vendas/soma/${id}`);
            return res;
        } catch (error) {
            throw error;
        }
    }
    async getDescontoProdutos(id, desconto){
        try {
            const res = await axios.get(`${this.baseUrl}/vendas/${id}?desconto=${desconto}`);
            return res;
        } catch (error) {
            throw error;
        }
    }
  
}

export default new VendasProdutoService();