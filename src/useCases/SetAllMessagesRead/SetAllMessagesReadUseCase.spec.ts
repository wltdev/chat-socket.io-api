import { PostgresMessageRespository } from '@/repositories/implementations/PostgresMessageRespository'
import { SetAllMessagesReadUseCase } from './SetAllMessagesReadUseCase'
describe('Set All messages as read', () => {
  let setAllMessagesReadUseCase: SetAllMessagesReadUseCase

  beforeAll(() => {
    const postgresMessageRespository = new PostgresMessageRespository()
    setAllMessagesReadUseCase = new SetAllMessagesReadUseCase(postgresMessageRespository)
  })

  it('should be able to set all messages as read', async () => {
    const users = ['0f40e224-a10f-492b-ade0-293a8fe24ad2', '0df2e7d7-51c9-430b-827e-ae5af4032be1']

    expect(await setAllMessagesReadUseCase.execute({ users })).toBeUndefined()
  })
})
