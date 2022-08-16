import { Request, Response } from 'express'
import { GetMessagesUseCase } from './GetMessagesUseCase'

export class GetMessagesController {
  constructor (private getMessageUseCase: GetMessagesUseCase) {}

  async handle (request: Request, response: Response) {
    const { users } = request.body

    try {
      const docs = await this.getMessageUseCase.execute({ users })
      return response.status(200).send(docs)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}
