import { PostgresMessageRespository } from '@/repositories/implementations/PostgresMessageRespository'
import { StoreMessageUseCase } from './StoreMessageUseCase'
import { Message } from '@/entities/Message'

describe('Store message', () => {
  let storeMessageUseCase: StoreMessageUseCase

  beforeAll(() => {
    const postgresMessageRepository = new PostgresMessageRespository()
    storeMessageUseCase = new StoreMessageUseCase(postgresMessageRepository)
  })

  it('should be able to create new message', async () => {
    const messageData = new Message({
      message: 'Hi User Two, how is it going?',
      users: ['0f40e224-a10f-492b-ade0-293a8fe24ad2', '0df2e7d7-51c9-430b-827e-ae5af4032be1'],
      userId: '0f40e224-a10f-492b-ade0-293a8fe24ad2'
    })

    const data = await storeMessageUseCase.execute(messageData)

    expect(data).toHaveProperty('id')
  })
})
