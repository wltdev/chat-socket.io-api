import { Message } from '@/entities/Message'

export interface IMessagesRepository {
  getMessages(users: string[]): Promise<Message[]>
  setReadMessages(users: string[], senderId: string): Promise<void>
  save(payload: Message): Promise<Message>
  update(id: string, payload: Message): Promise<Message>
}
