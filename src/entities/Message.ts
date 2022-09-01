export class Message {
  public readonly id?: string

  public message: string
  public senderId: string
  public receiverId: string
  public read?: boolean

  constructor(props: Omit<Message, 'id'>) {
    Object.assign(this, props)
  }
}
