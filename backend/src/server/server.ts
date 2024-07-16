import express from 'express'
import { router } from './routes'
import bodyParser from 'body-parser'
import cors from 'cors'

const server = express()

server.disable('x-powered-by')

server.use(cors({origin: '*', methods: ['POST', 'GET', 'DELETE', 'PUT']}))

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true, limit: '1024Kb' }))
server.use(router)

export { server }
