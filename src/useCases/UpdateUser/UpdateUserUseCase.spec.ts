import { PostgresUsersRepository } from '@/repositories/implementations/PostgresUsersRepository'
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase'
import { UpdateUserUseCase } from './UpdateUserUseCase'
import { User } from '@/entities/User'

describe('Creating user', () => {
  let updateUserUseCase: UpdateUserUseCase
  let createUserUseCase: CreateUserUseCase
  let datetime: number

  beforeAll(() => {
    const postgresUsersRepository = new PostgresUsersRepository()
    updateUserUseCase = new UpdateUserUseCase(
      postgresUsersRepository
    )
    createUserUseCase = new CreateUserUseCase(
      postgresUsersRepository
    )

    datetime = new Date().getTime()
  })

  it('should be able to update a user', async () => {
    const userData = new User({
      name: `Testing ${datetime}`,
      email: `testing${datetime}@email.com`,
      password: '123456'
    })

    const newUser = await createUserUseCase.execute(userData)

    const user = await updateUserUseCase.execute(newUser.id, userData)

    expect(user).toHaveProperty('id')
  })
})
