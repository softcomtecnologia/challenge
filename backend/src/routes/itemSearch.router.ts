import { Request, Response } from 'express';

import ItemSearchService from '../services/ItemSearchService';

async function itemSearchRouter(request: Request, response: Response) {
  const { id, itemId } = request.params;

  const itemSearch = new ItemSearchService();

  const item = await itemSearch.execute({ id, itemId });

  return response.json( item );
};

export default itemSearchRouter;