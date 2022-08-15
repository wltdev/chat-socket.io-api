import { IMessagesRepository } from '@/repositories/IMessagesRepository'
import { IStoreMessageDTO } from './StoreMessageDTO'

export class StoreMessageUseCase {
  constructor(private messagesRepository: IMessagesRepository) {}

  async execute (data: IStoreMessageDTO) {
    const doc = await this.messagesRepository.save(data)
    return doc
  }
}
