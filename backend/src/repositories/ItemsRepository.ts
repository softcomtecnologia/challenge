import { EntityRepository, Repository, getConnection, UpdateResult } from 'typeorm';

import Item from '../models/Item';

@EntityRepository(Item)
class ItemsRepository extends Repository<Item> {

  public async findByItemsId(id: string): Promise<Item[]> {
    const findItems = await this.find({
      where: { user_id: id },
    });

    return findItems;
  }

  public async findByItemId(id: string, itemId: string): Promise<Item | undefined> {
    const findItem = await this.findOne({ 
      where: { 
        id: itemId, 
        user_id: id 
      } 
    });

    return findItem;
  }

  public async deleteByItemId(): Promise<void> {

  }
}

export default ItemsRepository;