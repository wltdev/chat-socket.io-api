import { PrismaClient } from '@prisma/client'
import { Message } from '@/entities/Message'
import { IMessagesRepository } from '../IMessagesRepository'
import { prisma } from '@/config/prisma'

export class PostgresMessageRespository implements IMessagesRepository {
  private prismaClient: PrismaClient

  constructor() {
    this.prismaClient = prisma
  }

  async save(payload: Message): Promise<Message> {
    const { message, users, userId } = payload
    const doc = await this.prismaClient.message.create({
      data: {
        message,
        users,
        userId
      }
    })

    return doc
  }

  async getMessages(users: string[]): Promise<Message[]> {
    const docs = await this.prismaClient.message.findMany({
      where: {
        users: {
          hasEvery: users
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return docs
  }
}
