import { IMessagesRepository } from '@/repositories/IMessagesRepository'
import { ISetAllMessagesReadDTO } from './SetAllMessagesReadDTO'

export class SetAllMessagesReadUseCase {
  constructor(private messagesRepository: IMessagesRepository) {}

  execute (data: ISetAllMessagesReadDTO) {
    return this.messagesRepository.setReadMessages(data.users, data.userId)
  }
}
