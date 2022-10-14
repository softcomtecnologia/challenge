import { authApi } from './config';

const login = async user => {
  try {
    return await authApi.post('auth/sign_in', user, {
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
    return await authApi.post('user', user, {
      headers: {
        'content-type': 'multipart/form-data',
        Accept: 'application/json',
      },
    });
  } catch (e) {
    const error = {
      errorMessage: 'Error when register user',
    };
    throw error;
  }
};

export default { login, register };