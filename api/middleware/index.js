const Users = require('../users/users-model.js')
const classes = require('../classes/classes-model')

const validateInput = (req, res, next) => {
  const { first_name, last_name, email, password } = req.body
  if (
    first_name === undefined || last_name === undefined ||
    email === undefined || password === undefined
  ) {
    res.status(400).json({ message: 'All fields are required' })
  } else {
    next()
  }
}

const userEmailExist = async (req, res, next) => {
  const allUsers = await Users.getAllUsers()
  const userExist = allUsers.find(user => user.email === req.body.email)
  if (userExist) {
    res.status(400).json({ message: 'Account with email address already exists' })
  } else {
    next()
  }
}

const checkUserId = async (req, res, next) => {
  const allUsers = await Users.getAllUsers()
  const userIdExist = allUsers.find(user => user.user_id == req.params.user_id)
  if (!userIdExist) {
    res.status(400).json({ message: 'Invalid user' })
  } else {
    next()
  }
}

async function checkClassId(req, res, next) {
  try {
    const { id } = req.params
    const possibleItem = await classes.findById(id)
    if (possibleItem) {
      req.item = possibleItem
      next()
    } else {
      res.status(400).json({ message: 'Invalid item' })
    }
  } catch (err) {
    next(err)
  }
}
module.exports = {
  validateInput,
  userEmailExist,
  checkClassId,
  checkUserId,
}
