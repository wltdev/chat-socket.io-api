import { IUsersRepository } from '@/repositories/IUsersRespository'

export class GetUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string) {
    const doc = await this.usersRepository.findById(id)

    if (!doc) {
      throw new Error('User not found')
    }

    delete doc.password

    return doc
  }
}
