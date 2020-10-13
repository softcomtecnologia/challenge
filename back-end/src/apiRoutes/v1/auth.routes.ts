import { Router } from 'express'

import Controller from '../../controllers/AuthController'

const routes = Router()

routes.post('/sign_in', Controller.login)

export default routes
