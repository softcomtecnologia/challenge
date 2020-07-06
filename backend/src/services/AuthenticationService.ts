import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  email: string;
  cnpj: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticationService {
  public async execute({ email, cnpj, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const findByEmail = email !== ""
      ? await usersRepository.findOne({ where: { email } }) 
      : await usersRepository.findOne({ where: { cnpj } });
    
    if (!findByEmail) {
      throw new AppError('Incorret email/cnpj or password combination', 401);
    }
 
    const passwordMatched = await compare(password, findByEmail.password);

    if (!passwordMatched) {
      throw new AppError('Incorret password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
  
    const token = sign({ }, secret, {
      subject: findByEmail.id,
      expiresIn,
    });

    return {
      user: findByEmail,
      token,
    };
  }
}

export default AuthenticationService;