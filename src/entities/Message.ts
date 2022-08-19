export class Message {
  public readonly id?: string

  public message: string
  public users: string[]
  public userId: string
  public read?: boolean

  constructor(props: Omit<Message, 'id'>) {
    Object.assign(this, props)
  }
}
