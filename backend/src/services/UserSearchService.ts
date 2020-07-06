import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

import User from '../models/User';
import Item from '../models/Item';
import authConfig from '../config/auth';
import UsersRepository from '../repositories/UsersRepository';
import ItemsRepository from '../repositories/ItemsRepository';
import AppError from '../errors/AppError';

interface Request {
  id: string;
}

interface Response {
  user: User;
  items: Item[];
  token: string;
}

class UserSearchService {
  public async execute({ id }: Request): Promise<Response> {
    const usersRepository = getCustomRepository(UsersRepository);
    const itemsRepository = getCustomRepository(ItemsRepository);

    const findUserInSameId = await usersRepository.findById(id);
    if (!findUserInSameId) {
      throw new AppError('This ID does not exist', 401);
    }

    const items = await itemsRepository.findByItemsId(id);

    const { secret, expiresIn } = authConfig.jwt;
  
    const token = sign({ }, secret, {
      subject: findUserInSameId.id,
      expiresIn,
    });

    delete findUserInSameId.password;

    return {
      user: findUserInSameId,
      items,
      token,
    };
  }
}

export default UserSearchService;