import { getCustomRepository } from 'typeorm';

import ItemsRepository from '../repositories/ItemsRepository';
import UsersRepository from '../repositories/UsersRepository';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  itemId: string;
}

interface Response {
  message: string
}

class ItemDeleteService {
  public async execute({ id, itemId }: Request): Promise<Response> {
    const itemsRepository = getCustomRepository(ItemsRepository);
    const usersRepository = getCustomRepository(UsersRepository);
    
    const findUserInSameId = await usersRepository.findById(id);
    if (!findUserInSameId) {
      throw new AppError('Only authenticated users can delete item', 401);
    }

    const findItem = await itemsRepository.findByItemId(id, itemId);
    if (!findItem) {
      throw new AppError('This item does not belong to you', 401);
    }
    
    const item = await itemsRepository.findByItemId(id, itemId);
    if (!item) {
      throw new AppError('This item does not exist', 401);
    }
   
    await itemsRepository.remove(item);

    return { message: 'item successfully deleted' };
  }
}

export default ItemDeleteService;