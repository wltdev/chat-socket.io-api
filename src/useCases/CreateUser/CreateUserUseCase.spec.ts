import { PostgresUsersRepository } from '@/repositories/implementations/PostgresUsersRepository'
import { CreateUserUseCase } from './CreateUserUseCase'
import { User } from '@/entities/User'

describe('Creating user', () => {
  let createUserUseCase: CreateUserUseCase
  let datetime: number

  beforeAll(() => {
    const postgresUsersRepository = new PostgresUsersRepository()
    createUserUseCase = new CreateUserUseCase(
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

    const user = await createUserUseCase.execute(userData)

    expect(user).toHaveProperty('id')
  })

  it('should not be able to create an existing user', async () => {
    const userData = new User({
      name: `Testing ${datetime}`,
      email: `testing${datetime}@email.com`,
      password: '123456'
    })

    // await createUserUseCase.execute(userData)

    await expect(createUserUseCase.execute(userData)).rejects.toEqual(
      new Error('User already exists')
    )
  })
})
