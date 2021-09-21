const router = require('express').Router()
const Users = require('./users-model.js')

router.get('/', async (req, res) => {
  res.json(await Users.getAllUsers())
})

module.exports = router
