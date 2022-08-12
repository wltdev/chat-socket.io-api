import { IRepository } from './../IRepository'
import { PrismaClient } from '@prisma/client'
import { Group } from '@/entities/Group'

export class PostgresGroupsRepository implements IRepository<Group> {
  private prismaClient: PrismaClient

  constructor() {
    this.prismaClient = new PrismaClient()
  }

  async getList (): Promise<Group[]> {
    const docs = await this.prismaClient.group.findMany()
    return docs
  }

  async findById(id: string): Promise<Group> {
    const Group = await this.prismaClient.group.findFirst({
      where: {
        id
      }
    })

    return Group
  }

  async findByTitle(title: string): Promise<Group> {
    const group = await this.prismaClient.group.findFirst({
      where: {
        title
      }
    })

    return group
  }

  async save(payload: Group): Promise<Group> {
    const doc = await this.prismaClient.group.create({
      data: {
        ...payload
      }
    })

    return doc
  }

  async update(id: string, payload: Group): Promise<Group> {
    const doc = await this.prismaClient.group.update({
      where: { id },
      data: {
        ...payload
      }
    })

    return doc
  }

  async delete(id: string): Promise<Group> {
    const doc = await this.prismaClient.group.delete({
      where: {
        id
      }
    })

    return doc
  }
}