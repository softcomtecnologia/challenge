import { getCustomRepository } from 'typeorm';

import Item from '../models/Item';
import ItemsRepository from '../repositories/ItemsRepository';
import UsersRepository from '../repositories/UsersRepository';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  itemId: string;
  name: string;
  description: string;
  price: number;
}

class ItemUpdateService {
  public async execute({ id, itemId, name, description, price }: Request): Promise<Item> {
    const itemsRepository = getCustomRepository(ItemsRepository);
    const usersRepository = getCustomRepository(UsersRepository);
    
    const findUserInSameId = await usersRepository.findById(id);
    if (!findUserInSameId) {
      throw new AppError('Only authenticated users can update item', 401);
    }
    
    const findItem = await itemsRepository.findByItemId(id, itemId);
    if (!findItem) {
      throw new AppError('This item does not belong to you', 401);
    }

    const items = await itemsRepository.findByItemsId(id);
    if (!items) {
      throw new AppError('This item does not exist', 401);
    }


    const item = itemsRepository.create({
      id: itemId,
      user_id: id,
      name,
      description,
      price
    })

    await itemsRepository.save(item);
  
    return item;
  }
}

export default ItemUpdateService;