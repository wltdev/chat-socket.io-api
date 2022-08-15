import { PostgresUsersRepository } from '@/repositories/implementations/PostgresUsersRepository'
import { SignupUseCase } from './SignupUseCase'
import { User } from '@/entities/User'

describe('Creating user', () => {
  let signupUseCase: SignupUseCase
  let datetime: number

  beforeAll(() => {
    const postgresUsersRepository = new PostgresUsersRepository()
    signupUseCase = new SignupUseCase(
      postgresUsersRepository
    )

    datetime = new Date().getTime()
  })

  it('should be able to create a new  user', async () => {
    const userData = new User({
      name: `Testing ${datetime}`,
      email: `testing${datetime}@email.com`,
      password: '123456'
    })

    const data = await signupUseCase.execute(userData)

    expect(data).toHaveProperty('token')
  })

  it('should not be able to create an existing user', async () => {
    const userData = new User({
      name: `Testing ${datetime}`,
      email: `testing${datetime}@email.com`,
      password: '123456'
    })

    // await createUserUseCase.execute(userData)

    await expect(signupUseCase.execute(userData)).rejects.toEqual(
      new Error('User already exists')
    )
  })
})
