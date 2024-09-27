import axios from 'axios';

const BASE_URL_PRODUCTS = 'http://localhost:3004/products';

export const searchAllProducts = async () => {
  const response = await axios.get(BASE_URL_PRODUCTS);
  return response.data;
};
