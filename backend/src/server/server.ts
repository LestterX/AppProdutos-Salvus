import express from 'express'
import { router } from './routes'
import bodyParser from 'body-parser'

const server = express()

server.disable('x-powered-by')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true, limit: '1024Kb' }))
server.use(router)

export { server }