import { GetUsersListContoller } from './GetUsersListController'
import { PostgresUsersRepository } from '@/repositories/implementations/PostgresUsersRepository'
import { GetUsersListUseCase } from './GetUsersListUseCase'

const postgresUsersRepository = new PostgresUsersRepository()

const getUsersListUseCase = new GetUsersListUseCase(postgresUsersRepository)

const getUsersListContoller = new GetUsersListContoller(getUsersListUseCase)

export { getUsersListContoller }
