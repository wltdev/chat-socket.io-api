export class Message {
  public readonly id?: string

  public message: string
  public users: string[]
  public userId: string

  constructor(props: Omit<Message, 'id'>) {
    Object.assign(this, props)
  }
}
