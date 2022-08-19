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

  async update(id: string, payload: Message): Promise<Message> {
    const doc = await this.prismaClient.message.update({
      where: { id },
      data: {
        ...payload
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
        createdAt: 'asc'
      }
    })

    return docs
  }

  async setReadMessages(users: string[]): Promise<void> {
    await this.prismaClient.message.updateMany({
      where: {
        users: {
          hasEvery: users
        }
      },
      data: {
        read: true
      }
    })
  }
}
