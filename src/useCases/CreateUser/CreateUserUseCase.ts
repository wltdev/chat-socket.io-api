import bcrypt from 'bcrypt'

import { User } from '@/entities/User'
import { IUsersRepository } from '@/repositories/IUsersRespository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    data.password = bcrypt.hashSync(data.password, 10)

    const user = new User(data)

    const doc = await this.usersRepository.save(user)

    return doc
  }
}
