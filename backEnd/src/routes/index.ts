import { Router } from 'express'
import PersonRouter from './PersonRouter'

const routes = Router()

routes.use('/person', PersonRouter)

export default routes