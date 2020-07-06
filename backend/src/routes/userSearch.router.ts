import { Request, Response } from 'express';

import UserSearchService from '../services/UserSearchService';

async function userSearchRouter(request: Request, response: Response) {
  const { id } = request.params;

  const userSearch = new UserSearchService();

  const user = await userSearch.execute({ id });

  return response.json(user);
};

export default userSearchRouter;