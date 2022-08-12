import { uuid } from 'uuidv4'

export class Group {
  public readonly id: string

  public title: string

  constructor(props: Omit<Group, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuid()
    }
  }
}
