import { PostgresUsersRepository } from '@/repositories/implementations/PostgresUsersRepository'
import { SigninUseCase } from './SigninUseCase'

describe('Signin User', () => {
  let signinUseCase: SigninUseCase
  let datetime: number

  beforeAll(() => {
    const postgresUsersRepository = new PostgresUsersRepository()
    signinUseCase = new SigninUseCase(postgresUsersRepository)
    datetime = new Date().getTime()
  })

  it('Should be able to Login', async () => {
    const email = 'user1@test.com'
    const password = '123456'

    const data = await signinUseCase.execute({ email, password })

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
    const email = 'user1@test.com'
    const password = 'invalidpassword'

    await expect(signinUseCase.execute({ email, password })).rejects.toEqual(
      new Error('Invalid password')
    )
  })
})
