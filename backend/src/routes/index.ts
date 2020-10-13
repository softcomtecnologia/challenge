import { Router } from 'express';

import registerNewUser from './registerNewUser.router';
import userSearchRouter from './userSearch.router';
import authenticationRouter from './authentication.router';
import itemRegistrationRouter from './itemRegistration.router';
import itemSearchRouter from './itemSearch.router';
import itemUpdateRouter from './itemUpdate.router';
import itemDeleteRouter from './itemDelete.router';

import logRequests from '../middlewares/logRequests.middleware';
import ensureAuthenticated from '../middlewares/ensureAuthenticated.middleware';

const routes = Router();

routes.use(logRequests)

/* Cadastrar um novo usuário */ 
routes.post('/api/v1/user', registerNewUser);

/* Busca de usuário */ 
routes.get('/api/v1/user/:id', ensureAuthenticated, userSearchRouter);

/* Autenticação */ 
routes.post('/api/v1/auth/sign_in', authenticationRouter);

/* Cadastro de um novo item */
routes.post('/api/v1/user/:id/item', ensureAuthenticated, itemRegistrationRouter);

/* Busca um item do usuário pelo id */
routes.get('/api/v1/user/:id/item/:itemId', ensureAuthenticated, itemSearchRouter);

/* Atualiza um item do usuário pelo id */
routes.put('/api/v1/user/:id/item/:itemId', ensureAuthenticated, itemUpdateRouter);

/* Deleta um item do usuário pelo id */
routes.delete('/api/v1/user/:id/item/:itemId', ensureAuthenticated, itemDeleteRouter);

export default routes;