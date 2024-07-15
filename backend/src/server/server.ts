import express from 'express'
import { router } from './routes'

const server = express()

server.disable('x-powered-by')

server.use(express.json())
server.use(router)

export { server }