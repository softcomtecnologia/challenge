import { authApi } from './config';

const login = async user => {
  try {
    return await authApi.post('users/api/login/', user, {
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

const register = async user => {
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

export default { login, register };