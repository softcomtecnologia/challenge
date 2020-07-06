import { Request, Response } from 'express';

import ItemRegistrationService from '../services/ItemRegistrationService';

async function itemRegistrationRouter(request:Request, response: Response) {
  const { name, description, price } = request.body;
  const { id } = request.params;

  const userSearch = new ItemRegistrationService();

  const item = await userSearch.execute({
    user_id: id,
    name,
    description,
    price,
  });

  return response.json({ item })
};

export default itemRegistrationRouter;