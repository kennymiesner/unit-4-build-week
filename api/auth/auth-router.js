const bcrypt = require('bcryptjs')
const router = require('express').Router()
const { userEmailExist } = require('../middleware')
const Users = require('../users/users-model.js')
const tokenBuilder = require('./token-builder')

router.post('/register', userEmailExist, (req, res, next) => {
  let user = req.body

  const rounds = process.env.BCRYPT_ROUNDS || 8
  const hash = bcrypt.hashSync(user.password, rounds)

  user.password = hash

  Users.insertUser(user)
    .then(() => {
      res.status(201).json({
        message: `Registration successful`
      })
    })
    .catch(next)
})

router.post('/login', (req, res, next) => {
  let { email, password } = req.body
  Users.findBy({ email })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenBuilder(user)
        res.status(200).json({
          message: `Login successful`,
          user_id: user.user_id,
          token,
        })
      } else {
        res.status(401).json({ message: 'Invalid email or password' })
      }
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
