import { SignupController } from './SignupController'
import { PostgresUsersRepository } from '@/repositories/implementations/PostgresUsersRepository'
import { SignupUseCase } from './SignupUseCase'

const postgresUsersRepository = new PostgresUsersRepository()

const signupUseCase = new SignupUseCase(
  postgresUsersRepository
)

const signupContoller = new SignupController(signupUseCase)

export { signupContoller }
