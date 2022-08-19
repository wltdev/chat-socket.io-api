import { IMessagesRepository } from '@/repositories/IMessagesRepository'
import { IUpdateMessageDTO } from './UpdateMessageDTO'

export class UpdateMessageUseCase {
  constructor(private messagesRepository: IMessagesRepository) {}

  execute (id: string, data: IUpdateMessageDTO) {
    return this.messagesRepository.update(id, data)
  }
}
