import { IMessagesRepository } from '@/repositories/IMessagesRepository'
import { IGetMessagesDTO } from './GetMessagesDTO'

export class GetMessagesUseCase {
  constructor (private messagesRepository: IMessagesRepository) {}

  async execute ({ users }: IGetMessagesDTO) {
    const docs = await this.messagesRepository.getMessages(users)
    return docs
  }
}
