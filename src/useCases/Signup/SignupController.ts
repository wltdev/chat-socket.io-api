import { Request, Response } from 'express'
import { SignupUseCase } from './SignupUseCase'

export class SignupController {
  constructor(private createUserUseCase: SignupUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body
      const { user, token } = await this.createUserUseCase.execute({
        name,
        email,
        password
      })

      return response.status(201).send({ user, token })
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}
