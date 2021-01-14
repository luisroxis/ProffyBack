import { Router } from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionController from './controllers/ConnectionController'

const routes = Router()
const classesController = new ClassesController()
const connectionController = new ConnectionController()

routes.get('/', (request, response)=> {
  return response.json({msg: 'Proffy'})
})

routes.get('/classes', classesController.index )
routes.post('/classes', classesController.create )

routes.get('/connections', connectionController.index)
routes.post('/connections', connectionController.create)

export default routes
