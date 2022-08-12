import 'module-alias/register'
import express from 'express'
import cors from 'cors'
import { router } from './routes'

import { errorMiddleware } from './middlewares/errorMiddleware'

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.use(errorMiddleware)

export { app }
