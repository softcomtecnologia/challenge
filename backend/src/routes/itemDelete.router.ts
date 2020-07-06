import { Request, Response } from 'express';

import ItemDeleteService from '../services/ItemDeleteService';

async function itemDeleteRouter(request: Request, response: Response) {
  const { id, itemId } = request.params;

  const itemDelete = new ItemDeleteService();

  const item = await itemDelete.execute({ id, itemId });

  return response.json({ item });
}

export default itemDeleteRouter;