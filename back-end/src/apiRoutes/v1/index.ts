import { Router } from 'express'

import UserRoutes from './user.routes'
import AuthRoutes from './auth.routes'

const routes = Router()

routes.use('/user', UserRoutes)
routes.use('/auth', AuthRoutes)

export default routes
