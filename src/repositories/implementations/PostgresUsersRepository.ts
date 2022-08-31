import { PrismaClient } from '@prisma/client'
import { User } from '@/entities/User'
import { IUsersRepository } from '../IUsersRespository'
import { prisma } from '@/config/prisma'

export class PostgresUsersRepository implements IUsersRepository {
  private prismaClient: PrismaClient

  constructor() {
    this.prismaClient = prisma
  }

  async getList (userId: string): Promise<User[]> {
    const docs = await this.prismaClient.user.findMany({
      include: {
        Message: {
          where: {
            users: {
              has: userId
            }
          },
          orderBy: {
            createdAt: 'desc'
          },
          take: 1
        }
      }
    })
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
