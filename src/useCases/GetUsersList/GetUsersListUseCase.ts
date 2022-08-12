import { IUsersRepository } from '@/repositories/IUsersRespository'

export class GetUsersListUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute() {
    const docs = await this.usersRepository.getList()
    return docs
  }
}
