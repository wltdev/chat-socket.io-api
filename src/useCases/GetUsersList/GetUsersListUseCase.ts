import { setSortUsers } from '@/helpers/users'
import { IUsersRepository } from '@/repositories/IUsersRespository'

export class GetUsersListUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userId: string) {
    const docs = await this.usersRepository.getList(userId)

    const sortedDocs = setSortUsers(docs)

    return sortedDocs
  }
}
