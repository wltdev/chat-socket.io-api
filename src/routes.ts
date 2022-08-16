import { Router } from 'express'
import { signupContoller } from './useCases/Signup'
import { getUserContoller } from './useCases/GetUser'
import { getUsersListContoller } from './useCases/GetUsersList'
import { updateUserContoller } from './useCases/UpdateUser'
import { singinController } from './useCases/Signin'
import { storeMessageController } from './useCases/StoreMessage'
import { getMessagesController } from './useCases/GetMessages'

const router = Router()

router.post('/signin', (request, response) => {
  return singinController.handle(request, response)
})

router.post('/signup', (request, response) => {
  return signupContoller.handle(request, response)
})

router.get('/api/users', (request, response) => {
  return getUsersListContoller.handle(request, response)
})

router.get('/api/users/:id', (request, response) => {
  return getUserContoller.handle(request, response)
})

router.put('/api/users/:id', (request, response) => {
  return updateUserContoller.handle(request, response)
})

router.post('/api/messages', (request, response) => {
  return storeMessageController.handle(request, response)
})

router.get('/api/messages', (request, response) => {
  return getMessagesController.handle(request, response)
})

export { router }
