import { PostgresMessageRespository } from '@/repositories/implementations/PostgresMessageRespository'
import { GetMessagesController } from './GetMessagesController'
import { GetMessagesUseCase } from './GetMessagesUseCase'

const postgresMessageRespository = new PostgresMessageRespository()

const getMessagesUseCase = new GetMessagesUseCase(postgresMessageRespository)

const getMessagesController = new GetMessagesController(getMessagesUseCase)

export { getMessagesController }
