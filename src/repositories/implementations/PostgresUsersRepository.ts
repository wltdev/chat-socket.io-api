import { PrismaClient } from '@prisma/client'
import { User } from '@/entities/User'
import { IUsersRepository } from '../IUsersRespository'

export class PostgresUsersRepository implements IUsersRepository {
  private prismaClient: PrismaClient

  constructor() {
    this.prismaClient = new PrismaClient()
  }

  async getList (): Promise<User[]> {
    const docs = await this.prismaClient.user.findMany()
    return docs
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prismaClient.user.findFirst({
      where: {
        email
      }
    })

    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.prismaClient.user.findFirst({
      where: {
        id
      }
    })

    return user
  }

  async save(payload: User): Promise<User> {
    const { name, email, password } = payload
    const doc = await this.prismaClient.user.create({
      data: {
        name,
        email,
        password
      }
    })

    return doc
  }

  async update(id: string, payload: User): Promise<User> {
    const doc = await this.prismaClient.user.update({
      where: { id },
      data: {
        ...payload
      }
    })

    return doc
  }
}
