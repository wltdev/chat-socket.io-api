import { Response } from 'express'
import { IUserRequest } from '@/middlewares/authMiddleware'
import { StoreMessageUseCase } from './StoreMessageUseCase'

export class StoreMessageController {
  constructor(private storeMessageUseCase: StoreMessageUseCase) {}

  async handle(request: IUserRequest, response: Response) {
    const { user } = request
    try {
      const { message, otherUser } = request.body
      const doc = await this.storeMessageUseCase.execute({
        message,
        senderId: user.id,
        receiverId: otherUser
      })

      return response.status(201).send(doc)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}
