import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { IUsersRepository } from '@/repositories/IUsersRespository'
import { ISigninDTO } from './SigninDTO'

import { appConfig } from '@/config'

export class SigninUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ISigninDTO) {
    const user = await this.usersRepository.findByEmail(data.email)

    if (!user) {
      throw new Error('User not found')
    }

    const match = await bcrypt.compare(data.password, user.password)

    if (!match) {
      throw new Error('Invalid password')
    }

    const token = jwt.sign({ id: user.id }, String(appConfig.secrets.jwt), {
      expiresIn: appConfig.secrets.jwtExp
    })

    delete user.password

    return { user, token }
  }
}
