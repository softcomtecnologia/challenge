import { Router } from 'express'

import V1Routes from './v1'

const routes = Router()

routes.use('/v1', V1Routes)

export default routes
