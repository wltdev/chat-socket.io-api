import { Request, Response } from 'express'
import { GetUserUseCase } from './GetUserUseCase'

export class GetUserContoller {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const doc = await this.getUserUseCase.execute(id)

      return response.status(201).send(doc)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
