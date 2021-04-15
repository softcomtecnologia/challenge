import Router from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ItemController from './app/controllers/ItemController';
import ListProductController from './app/controllers/ListProductController';
import ProductForSalesController from './app/controllers/ProductForSalesController';
import BuyProductController from './app/controllers/BuyProductController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'API Desafio Softcom' });
});

routes.post('/user', UserController.store);
routes.get('/user/find/:id', UserController.show);

routes.post('/auth/sign_in', SessionController.store);

routes.use(authMiddleware);

routes.post('/user/item', ItemController.store);
routes.get('/user/item', ItemController.index);
routes.get('/user/item/:id', ItemController.show);
routes.put('/user/item/:id', ItemController.update);
routes.delete('/user/item/:id', ItemController.delete);

routes.get('/list-product/', ListProductController.index);

routes.get('/product-for-sales/user/:id', ProductForSalesController.index);
routes.get(
    '/product-for-sales/user/:id/item/:idItem',
    ProductForSalesController.show
);

routes.post(
    '/product-for-sales/user/:id/item/:idItem/buy',
    BuyProductController.store
);

export default routes;
