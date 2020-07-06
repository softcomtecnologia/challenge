import { Request, Response} from 'express';

import AuthenticationService from '../services/AuthenticationService';

async function authenticationRouter(request: Request, response: Response) {
  const { email, cnpj, password } = request.body;

  const authenticateUser = new AuthenticationService();

  const { user, token } = await authenticateUser.execute({
    email, 
    cnpj, 
    password
  });

  delete user.password;

  return response.json({ user, token });
};

export default authenticationRouter;