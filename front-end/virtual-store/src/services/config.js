import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'http://localhost:3333/api/v1/',
  timeout: 5000,
});

const token = localStorage.getItem('access_token');

export const api = axios.create({
  baseURL: 'http://localhost:3333/api/v1/',
  timeout: 50000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
