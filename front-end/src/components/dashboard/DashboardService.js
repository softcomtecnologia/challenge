import React from 'react';

import axios from 'axios';

export class DashboardService extends React.Component {
    baseUrl = process.env.REACT_APP_API_API_URL;
  
    async getVendasFinalizadas() {
        try {
            const res = await axios.get(`${this.baseUrl}/carrinho/${id}`);
            return await res.data
        } catch (error) {
            throw error;
        }
    }
  
}

export default new DashboardService();