import { Response } from 'express'
import { GetUserUseCase } from './GetUserUseCase'
import { IUserRequest } from '@/middlewares/authMiddleware'

export class GetUserContoller {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(request: IUserRequest, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const doc = await this.getUserUseCase.execute(id)

      return response.status(201).send(doc)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
