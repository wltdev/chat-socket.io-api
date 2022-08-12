import { CreateUserContoller } from './CreateUserController'
import { PostgresUsersRepository } from '@/repositories/implementations/PostgresUsersRepository'
import { CreateUserUseCase } from './CreateUserUseCase'

const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository
)

const createUserContoller = new CreateUserContoller(createUserUseCase)

export { createUserUseCase, createUserContoller }
