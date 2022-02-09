import React from 'react';
import axios from 'axios';

const url = 'http://localhost:3000';

export class MenuService extends React.Component {
  
    async getEmpresa() {  
        try {
            const res = await axios.get(url+'/empresa/1');
            return await res.data       
        } catch (error) {
            throw error;
        }
    }

    async getCarrinho() {
        try {
            const res = await axios.get(url+'/carrinho');
            return await res.data
            
        } catch (error) {
            throw error;
        }
    }

}
export default new MenuService();