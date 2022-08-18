import { Response } from 'express'
import { GetMessagesUseCase } from './GetMessagesUseCase'
import { IUserRequest } from '@/middlewares/authMiddleware'

export class GetMessagesController {
  constructor (private getMessageUseCase: GetMessagesUseCase) {}

  async handle (request: IUserRequest, response: Response) {
    const { otherUser } = request.query
    const { user } = request

    const users = [String(otherUser), user.id]

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
