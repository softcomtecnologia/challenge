import { getCustomRepository } from 'typeorm';

import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  cnpj:string;
  password: string;
}

class RegisterNewUserService {
  public async execute({ name, email, cnpj, password }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const findUserInSameEmail = await usersRepository.findByEmail(email);
    if (findUserInSameEmail) {
      throw new AppError('This email already exists', );
    }

    const findUserInSameCnpj = await usersRepository.findByCnpj(cnpj);
    if (findUserInSameCnpj) {
      throw new AppError('This cnpj already exists');
    }

    const user = usersRepository.create({ 
      name, 
      email, 
      cnpj, 
      password
    });

    await usersRepository.save(user);

    return user;
  }
}

export default RegisterNewUserService;