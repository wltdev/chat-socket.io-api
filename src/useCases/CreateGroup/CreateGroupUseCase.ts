import { Group } from '@/entities/Group'
import { IRepository } from '@/repositories/IRepository'
import { ICreateGroupDTO } from './CreateGroupDTO'

export class CreateGroupUseCase {
  constructor(
    private groupsRepository: IRepository<Group>
  ) {}

  async execute(data: ICreateGroupDTO) {
    const userAlreadyExists = await this.groupsRepository.findByTitle(data.title)

    if (userAlreadyExists) {
      throw new Error('Group already exists')
    }

    const group = new Group(data)

    await this.groupsRepository.save(group)

    return group
  }
}
