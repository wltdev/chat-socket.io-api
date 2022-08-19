import { Message } from '@/entities/Message'
import { PostgresMessageRespository } from '@/repositories/implementations/PostgresMessageRespository'
import { StoreMessageUseCase } from '../StoreMessage/StoreMessageUseCase'
import { UpdateMessageUseCase } from './UpdateMessageUseCase'

describe('Update Message', () => {
  let updateMessageUseCase: UpdateMessageUseCase
  let storeMessageUseCase: StoreMessageUseCase

  beforeAll(() => {
    const postgresMessageRepository = new PostgresMessageRespository()
    updateMessageUseCase = new UpdateMessageUseCase(postgresMessageRepository)
    storeMessageUseCase = new StoreMessageUseCase(postgresMessageRepository)
  })

  it('should be able to update a message data', async () => {
    const messageData = new Message({
      message: 'Testing Message',
      users: ['0f40e224-a10f-492b-ade0-293a8fe24ad2', '0df2e7d7-51c9-430b-827e-ae5af4032be1'],
      userId: '0f40e224-a10f-492b-ade0-293a8fe24ad2'
    })

    const data = await storeMessageUseCase.execute(messageData)

    const updated = await updateMessageUseCase.execute(data.id, {
      ...messageData,
      read: true
    })

    expect(updated.read).toBe(true)
  })
})
