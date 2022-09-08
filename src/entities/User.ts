import { Message } from './Message'

export class User {
  public readonly id?: string

  public name: string
  public email: string
  public password?: string
  public readonly sentMessages?: Message[]
  public readonly recievedMessages?: Message[]

  constructor(props: Omit<User, 'id'>) {
    Object.assign(this, props)
  }
}
