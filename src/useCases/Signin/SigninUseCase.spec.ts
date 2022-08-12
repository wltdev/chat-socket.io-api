import { PostgresUsersRepository } from '@/repositories/implementations/PostgresUsersRepository'
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase'
import { SigninUseCase } from './SigninUseCase'
import { User } from '@/entities/User'

describe('Signin User', () => {
  let signinUseCase: SigninUseCase
  let createUserUseCase: CreateUserUseCase
  let datetime: number

  beforeAll(() => {
    const postgresUsersRepository = new PostgresUsersRepository()
    signinUseCase = new SigninUseCase(postgresUsersRepository)
    createUserUseCase = new CreateUserUseCase(postgresUsersRepository)
    datetime = new Date().getTime()
  })

  it('Should be able to Login', async () => {
    const userData = new User({
      name: `Testing ${datetime}`,
      email: `testing${datetime}@email.com`,
      password: '123456'
    })
    await createUserUseCase.execute(userData)
    const data = await signinUseCase.execute({ email: userData.email, password: '123456' })

    expect(data).toHaveProperty('token')
  })

  it('Should not be able to login with invalid user', async () => {
    const email = `fake${datetime}@email.com`
    const password = '123456'

    await expect(signinUseCase.execute({ email, password })).rejects.toEqual(
      new Error('User not found')
    )
  })

  it('Should not be able to login with invalid password', async () => {
    const email = `testing${datetime}@email.com`
    const password = 'invalidpassword'

    await expect(signinUseCase.execute({ email, password })).rejects.toEqual(
      new Error('Invalid password')
    )
  })
})
