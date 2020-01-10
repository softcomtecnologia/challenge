import Router from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'API Desafio Softcom' });
});

routes.post('/api/v1//users', UserController.store);
routes.post('/api/v1//sessions', SessionController.store);

routes.use(authMiddleware);

export default routes;
