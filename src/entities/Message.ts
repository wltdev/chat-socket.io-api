export class Message {
  public readonly id?: string

  public message: string
  public senderId: string
  public receiverId: string
  public read?: boolean
  public readonly createdAt?: Date
  public readonly updatedAt?: Date

  constructor(props: Omit<Message, 'id'>) {
    Object.assign(this, props)
  }
}
