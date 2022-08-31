import { IUserRequest } from '@/middlewares/authMiddleware'
import { Response } from 'express'
import { GetUsersListUseCase } from './GetUsersListUseCase'

export class GetUsersListContoller {
  constructor(private getUsersListUseCase: GetUsersListUseCase) {}

  async handle(request: IUserRequest, response: Response): Promise<Response> {
    try {
      const docs = await this.getUsersListUseCase.execute(request.user.id)

      return response.status(201).send(docs)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
