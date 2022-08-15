import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { User } from '@/entities/User'
import { IUsersRepository } from '@/repositories/IUsersRespository'
import { ISignupRequestDTO } from './SignupDTO'
import { appConfig } from '@/config'

export class SignupUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ISignupRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    data.password = bcrypt.hashSync(data.password, 10)

    const user = new User(data)

    const doc = await this.usersRepository.save(user)

    const token = jwt.sign({ id: user.id }, String(appConfig.secrets.jwt), {
      expiresIn: appConfig.secrets.jwtExp
    })

    delete doc.password

    return { user: doc, token }
  }
}
