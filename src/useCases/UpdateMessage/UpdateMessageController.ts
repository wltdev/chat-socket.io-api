import { Request, Response } from 'express'
import { UpdateMessageUseCase } from './UpdateMessageUseCase'

export class UpdateMessageController {
  constructor(private updateMessageUseCase: UpdateMessageUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const { message, receiverId, senderId, read } = request.body
      const doc = await this.updateMessageUseCase.execute(id, {
        message,
        receiverId,
        senderId,
        read
      })

      return response.status(201).send(doc)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}
