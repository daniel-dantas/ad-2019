import { Router } from 'express'
import PersonController from '../controllers/PersonController'

import PersonMiddleware from '../middlewares/Person'

const routes = Router()

routes.get('/', PersonController.read)

routes.use(PersonMiddleware)
routes.post('/', PersonController.create)
routes.put('/', PersonController.update)
routes.delete('/', PersonController.delete)

export default routes
