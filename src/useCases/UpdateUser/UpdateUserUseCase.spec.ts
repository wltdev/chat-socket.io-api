import { PostgresUsersRepository } from '@/repositories/implementations/PostgresUsersRepository'
import { UpdateUserUseCase } from './UpdateUserUseCase'
import { User } from '@/entities/User'

describe('Creating user', () => {
  let updateUserUseCase: UpdateUserUseCase
  let datetime: number

  beforeAll(() => {
    const postgresUsersRepository = new PostgresUsersRepository()
    updateUserUseCase = new UpdateUserUseCase(
      postgresUsersRepository
    )

    datetime = new Date().getTime()
  })

  it('should be able to update a user', async () => {
    const userData = new User({
      name: `User One ${datetime}`,
      email: 'user1@test.com'
    })

    const userId = '0f40e224-a10f-492b-ade0-293a8fe24ad2'

    const user = await updateUserUseCase.execute(userId, userData)

    expect(user).toHaveProperty('id')
  })
})
