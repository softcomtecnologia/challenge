import { Request, Response } from 'express';

import ItemUpdateService from '../services/ItemUpdateService';

async function itemUpdateRouter(request: Request, response: Response) {
  const { name, description, price } = request.body; 
  const { id, itemId } = request.params;

  const itemUpdate = new ItemUpdateService();

  const item = await itemUpdate.execute({ id, itemId, name, description, price});

  return response.json({ item });
}

export default itemUpdateRouter;