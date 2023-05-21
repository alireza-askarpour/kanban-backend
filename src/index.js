import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import createError from 'http-errors'
import swaggerUI from 'swagger-ui-express'

import connectDB from './config/database.js'
import { swaggerConfig } from './config/swagger.config.js'
import { isDevelopment, appListener, appErrorHandler, port } from './config/app.js'

import { morganMiddleware } from './middlewares/morgan.js'

import allRoutes from './routes/index.js'

// config
dotenv.config()
connectDB()

const app = express()

// middlewares
if (isDevelopment) app.use(morganMiddleware)
app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads'))

// Settings
app.use('/docs', swaggerUI.serve, swaggerConfig)

// routes
app.use(allRoutes)

// error hanler
app.use((req, res, next) => {
  next(createError.NotFound(`Can't find ${req.originalUrl} on the server!`))
})
app.use(appErrorHandler)

app.listen(port, appListener)
