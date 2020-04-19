import { authApi } from './config';

const add = async item => {
  try {
    return await authApi.post('users/api/add/', item, {
      headers: {
        'content-type': 'multipart/form-data',
        Accept: 'application/json',
      },
    });
  } catch (e) {
    const error = {
      errorMessage: 'Username or password is invalid',
    };
    throw error;
  }
};

const update = async item => {
  try {
    return await authApi.post('users/api/register/', user, {
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
    return await authApi.post('users/api/register/', user, {
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

export default { add, update, deleteItem};