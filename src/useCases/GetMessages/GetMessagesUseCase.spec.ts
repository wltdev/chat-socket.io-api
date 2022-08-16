import { PostgresMessageRespository } from '@/repositories/implementations/PostgresMessageRespository'
import { GetMessagesUseCase } from './GetMessagesUseCase'

describe('Get messages', () => {
  let getMessageUseCase: GetMessagesUseCase

  beforeAll(() => {
    const postgresMessageRepository = new PostgresMessageRespository()
    getMessageUseCase = new GetMessagesUseCase(postgresMessageRepository)
  })

  it('should be able to get conversation messages', async () => {
    const users = ['0f40e224-a10f-492b-ade0-293a8fe24ad2', '0df2e7d7-51c9-430b-827e-ae5af4032be1']

    const docs = await getMessageUseCase.execute({ users })

    expect(docs.length).toBeGreaterThanOrEqual(1)
  })
})
