import { Request, Response } from 'express'
import { SigninUseCase } from './SigninUseCase'

export class SigninContoller {
  constructor(private signinUseCase: SigninUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body
      const { user, token } = await this.signinUseCase.execute({
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
