import { Request, Response } from 'express';
import { hash } from 'bcryptjs';

import RegisterNewUserService from '../services/RegisterNewUserService';

async function registerNewUserRouter(request: Request, response: Response) {
  const { name, email, cnpj, password } = request.body;

  const registerUser = new RegisterNewUserService();
  
  const hashedPassword = await hash(password, 8);

  const user = await registerUser.execute({ 
    name, 
    email, 
    cnpj, 
    password: hashedPassword
  });

  delete user.password;

  return response.json(user);
};

export default registerNewUserRouter;