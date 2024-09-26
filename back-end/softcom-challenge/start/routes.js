'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/api/v1/user', 'UserController.create')
Route.get('/api/v1/user/:id', 'UserController.show')
Route.post('/api/v1/auth/sign_in', 'SessionController.create')

Route.post('/api/v1/user/:id/item', 'ItemController.store').middleware('auth')
Route.get('/api/v1/user/:id/:itemId', 'ItemController.show').middleware('auth')
Route.put('/api/v1/user/:id/item/:itemId', 'ItemController.update').middleware('auth')
Route.delete('/api/v1/user/:id/item/:itemId', 'ItemController.destroy').middleware('auth') 
Route.get('/api/v1/items','ItemController.index').middleware('auth')