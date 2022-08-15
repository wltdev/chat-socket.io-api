import 'module-alias/register'
import express from 'express'
import cors from 'cors'
import { router } from './routes'

import { errorMiddleware } from './middlewares/errorMiddleware'
import { authMiddleware } from './middlewares/authMiddleware'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', authMiddleware)
app.use(errorMiddleware)
app.use(router)

export { app }
