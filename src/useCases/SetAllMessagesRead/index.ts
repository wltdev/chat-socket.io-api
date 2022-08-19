import { SetAllMessagesReadController } from './SetAllMessagesReadController'
import { PostgresMessageRespository } from '@/repositories/implementations/PostgresMessageRespository'
import { SetAllMessagesReadUseCase } from './SetAllMessagesReadUseCase'

const postgresMessageRepository = new PostgresMessageRespository()

const setAllMessagesReadUseCase = new SetAllMessagesReadUseCase(postgresMessageRepository)

const setAllMessagesReadController = new SetAllMessagesReadController(setAllMessagesReadUseCase)

export { setAllMessagesReadController }
