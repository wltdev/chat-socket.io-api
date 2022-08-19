import { Response } from 'express'
import { SetAllMessagesReadUseCase } from './SetAllMessagesReadUseCase'
import { IUserRequest } from '@/middlewares/authMiddleware'

export class SetAllMessagesReadController {
  constructor(private setAllMessagesReadUseCase: SetAllMessagesReadUseCase) {}

  async handle(request: IUserRequest, response: Response): Promise<Response> {
    try {
      const { user } = request
      const { otherUser } = request.body
      const users = [String(otherUser), user.id]

      await this.setAllMessagesReadUseCase.execute({ users })

      return response.status(200).json()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}
