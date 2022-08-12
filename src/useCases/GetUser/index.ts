import { GetUserContoller } from './GetUserController'
import { PostgresUsersRepository } from '@/repositories/implementations/PostgresUsersRepository'
import { GetUserUseCase } from './GetUserUseCase'

const postgresUsersRepository = new PostgresUsersRepository()

const getUserUseCase = new GetUserUseCase(postgresUsersRepository)

const getUserContoller = new GetUserContoller(getUserUseCase)

export { getUserContoller }
