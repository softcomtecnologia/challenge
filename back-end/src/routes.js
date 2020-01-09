import Router from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'API Desafio Softcom' });
});

routes.post('/users', UserController.store);

export default routes;
