import { SigninContoller } from './SigninController'
import { PostgresUsersRepository } from '@/repositories/implementations/PostgresUsersRepository'
import { SigninUseCase } from './SigninUseCase'

const postgresUsersRepository = new PostgresUsersRepository()

const signinUseCase = new SigninUseCase(postgresUsersRepository)

const singinController = new SigninContoller(signinUseCase)

export { singinController }
