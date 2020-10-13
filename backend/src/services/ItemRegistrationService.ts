import { getCustomRepository } from 'typeorm';

import Item from '../models/Item';
import ItemsRepository from '../repositories/ItemsRepository';
import UsersRepository from '../repositories/UsersRepository';
import AppError from '../errors/AppError';


interface Request {
  user_id: string;
  name: string;
  description: string;
  price: number;
}

class ItemRegistrationService {
  public async execute({ user_id, name, description, price }: Request): Promise<Item> {
    const itemsRepository = getCustomRepository(ItemsRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    const findUserInSameId = await usersRepository.findById(user_id);
    if (!findUserInSameId) {
      throw new AppError('This ID does not exist', 401);
    }

    const item = itemsRepository.create({ 
      user_id,
      name,
      description,
      price,
    });

    await itemsRepository.save(item);

    return item;
  }
}

export default ItemRegistrationService;