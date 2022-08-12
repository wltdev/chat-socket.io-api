import { IUsersRepository } from '@/repositories/IUsersRespository'
import { IUpdateUserRequestDTO } from './UpdateUserDTO'

export class UpdateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string, data: IUpdateUserRequestDTO) {
    const user = await this.usersRepository.update(id, data)

    return user
  }
}
