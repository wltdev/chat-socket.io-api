import { Group } from '@/entities/Group'

export interface IGroupsRespository {
  findByTitle(title: string): Promise<Group>
}
