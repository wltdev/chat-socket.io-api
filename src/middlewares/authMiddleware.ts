import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { PostgresUsersRepository } from './../repositories/implementations/PostgresUsersRepository'
import { GetUserUseCase } from './../useCases/GetUser/GetUserUseCase'
import { appConfig } from '@/config'
import { User } from '@/entities/User'

export interface IUserRequest extends Request {
  user?: User
}

type TOKEN = {
  id?: string
}

export const authMiddleware = async (req: IUserRequest, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized', status: 401 })
  }

  const token = bearer.split('Bearer ')[1].trim()
  let payload: TOKEN

  try {
    payload = await verifyToken(token)
  } catch (e) {
    return res.status(401).json({ message: 'Unauthorized', status: 401 })
  }

  const postgresUsersRepository = new PostgresUsersRepository()
  const getUserUseCase = new GetUserUseCase(postgresUsersRepository)

  const user = await getUserUseCase.execute(payload.id)

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', status: 401 })
  }

  req.user = user
  next()
}

export const verifyToken = (token: string) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, appConfig.secrets.jwt, (err: any, payload: unknown) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })
