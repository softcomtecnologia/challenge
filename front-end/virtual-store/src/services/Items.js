import { authApi, api } from './config';

const add = async item => {
  console.log('aki')
  const userId = JSON.parse(localStorage.getItem('user')).id;
  try {
    return await api.post(`/user/${userId}/item`, item, {
      headers: {
        'content-type': 'multipart/form-data',
        Accept: 'application/json',
      },
    });
  } catch (e) {
    const error = {
      errorMessage: 'Error when add item',
    };
    throw error;
  }
};

const showAll = async () => {
  const token = localStorage.getItem('access_token');
  try {
    return await api.get('/items', {
      headers: {
        'content-type': 'multipart/form-data',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    const error = {
      errorMessage: 'you not have items',
    };
    throw error;
  }
};

const update = async item => {
  try {
    return await authApi.post('users/api/register/', item, {
      headers: {
        'content-type': 'multipart/form-data',
        Accept: 'application/json',
      },
    });
  } catch (e) {
    const error = {
      errorMessage: 'Register error',
    };
    throw error;
  }
};

const deleteItem = async item => {
  try {
    return await authApi.post('users/api/register/', item, {
      headers: {
        'content-type': 'multipart/form-data',
        Accept: 'application/json',
      },
    });
  } catch (e) {
    const error = {
      errorMessage: 'Register error',
    };
    throw error;
  }
};

export default { add, update, deleteItem, showAll};