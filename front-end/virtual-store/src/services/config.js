import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://mpos.stopplay.io/',
  timeout: 50000,
});

const token = localStorage.getItem('access_token');

const api = axios.create({
  baseURL: 'https://mpos.stopplay.io/',
  timeout: 50000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;