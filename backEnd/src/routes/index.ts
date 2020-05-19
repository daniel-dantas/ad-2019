import DrawController from '../controllers/DrawController'

import { Router } from 'express'
import PersonRouter from './PersonRouter'

const routes = Router()

routes.use('/person', PersonRouter)
routes.get('/draw', DrawController.create)

export default routes