import React from 'react';
import axios from 'axios';

const url = 'http://localhost:3000';

export class ProductService extends React.Component {
     
    async getProdutos() {
        try {
            const res = await axios.get(url+'/produtos');
            console.log(res)
            return await res
              
        } catch (error) {
            throw error;
        }
    }
  
}

export default new ProductService();