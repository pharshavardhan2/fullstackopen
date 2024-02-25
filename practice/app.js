import config from './utils/config.js'
import express from 'express'
import notesRouter from './controllers/notes.js'
import logger from './utils/logger.js'
import middleware from './utils/middleware.js'
import mongoose from 'mongoose'

mongoose.set('strictQuery', false)

logger.info('connecting to mongodb')

mongoose.connect(config.MONGODB_URI)
  .then(() => logger.info('connected to mongodb'))
  .catch(error => logger.error('error connecting to mongodb:', error.message))

const app = express()
app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/notes', notesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

export default app