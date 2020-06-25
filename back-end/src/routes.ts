import { Router } from 'express'

import ApiRoutes from './apiRoutes'

const routes = Router()

routes.use('/api', ApiRoutes)

export default routes
