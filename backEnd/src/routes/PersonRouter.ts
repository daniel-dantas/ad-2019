import { Router } from 'express'
import PersonController from '../controllers/PersonController'

const routes = Router()

routes.post('/', PersonController.create)
routes.get('/', PersonController.read)
routes.put('/', PersonController.update)
routes.delete('/', PersonController.delete)

export default routes
