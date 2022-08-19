import { UpdateMessageController } from './UpdateMessageController'
import { PostgresMessageRespository } from '@/repositories/implementations/PostgresMessageRespository'
import { UpdateMessageUseCase } from './UpdateMessageUseCase'

const postgresMessagesRepository = new PostgresMessageRespository()

const updateMessageUseCase = new UpdateMessageUseCase(postgresMessagesRepository)

const updateMessageController = new UpdateMessageController(updateMessageUseCase)

export { updateMessageController }
