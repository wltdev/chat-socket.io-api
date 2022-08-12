import { CreateGroupController } from './CreateGroupController'
import { PostgresGroupsRepository } from '@/repositories/implementations/PostgresGroupsRepository'
import { CreateGroupUseCase } from './CreateGroupUseCase'

const postgresGroupsRepository = new PostgresGroupsRepository()

const createGroupUseCase = new CreateGroupUseCase(postgresGroupsRepository)

const createGroupController = new CreateGroupController(createGroupUseCase)

export { createGroupController }
