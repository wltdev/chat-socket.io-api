import { Router } from 'express'
import { createGroupController } from './useCases/CreateGroup'
import { createUserContoller } from './useCases/CreateUser'
import { getUserContoller } from './useCases/GetUser'
import { getUsersListContoller } from './useCases/GetUsersList'
import { updateUserContoller } from './useCases/UpdateUser'

const router = Router()

router.get('/users', (request, response) => {
  return getUsersListContoller.handle(request, response)
})

router.post('/users', (request, response) => {
  return createUserContoller.handle(request, response)
})

router.get('/users/:id', (request, response) => {
  return getUserContoller.handle(request, response)
})

router.put('/users/:id', (request, response) => {
  return updateUserContoller.handle(request, response)
})

router.post('/groups', (request, response) => {
  return createGroupController.handle(request, response)
})

export { router }
