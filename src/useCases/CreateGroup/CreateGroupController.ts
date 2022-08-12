import { Request, Response } from 'express'
import { CreateGroupUseCase } from './CreateGroupUseCase'

export class CreateGroupController {
  constructor(private createGroupUseCase: CreateGroupUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { title } = request.body
      const group = await this.createGroupUseCase.execute({
        title
      })

      return response.status(201).send(group)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}
