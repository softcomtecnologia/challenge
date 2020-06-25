import { Router } from 'express'

import Controller from '../../controllers/UserController'
import * as AuthMiddleware from '../../middlewares/AuthMiddleware'
const routes = Router()

// user cadastro
routes.post('/', Controller.create)
// get user data
routes.get('/:id?', AuthMiddleware.handleUserAuth, Controller.get)
// update user
// routes.put('/', AuthMiddleware.handleUserAuth, Controller.update)

// get user item
routes.get('/item/all', AuthMiddleware.handleUserAuth, Controller.getAllItem)
routes.get('/item/:id?', AuthMiddleware.handleUserAuth, Controller.getItem)
// create user item
routes.post('/item', AuthMiddleware.handleUserAuth, Controller.createItem)
// update user item
routes.put('/item/:id?', AuthMiddleware.handleUserAuth, Controller.updateItem)
// update user item
routes.delete('/item/:id?', AuthMiddleware.handleUserAuth, Controller.removeItem)
routes.delete('/items/:ids?', AuthMiddleware.handleUserAuth, Controller.removeItems)

export default routes
