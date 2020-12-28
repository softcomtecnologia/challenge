import React from 'react';

import axios from 'axios';

export class VendasService extends React.Component {
    baseUrl = process.env.REACT_APP_API_API_URL;
    async postVendas(body) {
        try {
            const res = await axios.post(`${this.baseUrl}/vendas`, {
                address: body.address,
                name: body.name,
                email: body.email,
                fone: body.fone,
            });

            return res.data.venda.id;
        } catch (error) {
            throw error;
        }
    }

    async postFinalizarVendas(id,valor) {
        try {
            const res = await axios.post(`${this.baseUrl}/vendas/finalizar`, {
                id: id,
                valor: valor,
            });
            return res;
        } catch (error) {
            throw error;
        }
    }
    
     
    async getVendas() {
        try {
            const res = await axios.get(`${this.baseUrl}/vendas`);
            return await res.data.venda.data
            
        } catch (error) {
            throw error;
        }
    }

    async deleteVenda(id) {
        try {

            const res = await axios.delete(`${this.baseUrl}/vendas?id=${id}`);
            return await res
            
        } catch (error) {
            throw error;
        }
    }
  
}

export default new VendasService();