import { Request, Response } from 'express'
import { GetUsersListUseCase } from './GetUsersListUseCase'

export class GetUsersListContoller {
  constructor(private getUsersListUseCase: GetUsersListUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const docs = await this.getUsersListUseCase.execute()

      return response.status(201).send(docs)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
