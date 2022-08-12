import { UpdateUserContoller } from './UpdateUserController'
import { PostgresUsersRepository } from '@/repositories/implementations/PostgresUsersRepository'
import { UpdateUserUseCase } from './UpdateUserUseCase'

const postgresUsersRepository = new PostgresUsersRepository()

const updateUserUseCase = new UpdateUserUseCase(
  postgresUsersRepository
)

const updateUserContoller = new UpdateUserContoller(updateUserUseCase)

export { updateUserContoller }
