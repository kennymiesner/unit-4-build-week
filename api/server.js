const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router')
const classesRouter = require('./classes/classes-router')
const usersRouter = require('./users/users-router')

const server = express()
server.use(cors())
server.use(helmet())
server.use(express.json())

server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)
server.use('/api/classes', classesRouter)

server.get("/", (req, res) => {
  res.json({ api: "up and running" })
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server
