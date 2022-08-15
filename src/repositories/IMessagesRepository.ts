import { Message } from '@/entities/Message'

export interface IMessagesRepository {
  getMessages(users: string[]): Promise<Message[]>
  save(payload: Message): Promise<Message>
}
