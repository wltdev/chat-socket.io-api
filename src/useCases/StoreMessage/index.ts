import { PostgresMessageRespository } from '@/repositories/implementations/PostgresMessageRespository'
import { StoreMessageController } from './StoreMessageController'
import { StoreMessageUseCase } from './StoreMessageUseCase'

const postgresMessagesRepository = new PostgresMessageRespository()

const storeMessageUseCase = new StoreMessageUseCase(postgresMessagesRepository)

const storeMessageController = new StoreMessageController(storeMessageUseCase)

export { storeMessageController }
