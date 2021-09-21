const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('./config')

module.exports = function (user) {
  const payload = {
    subject: user.user_id,
    email: user.email,
    role: user.role,
  }
  const options = {
    expiresIn: '1d',
  }

  const token = jwt.sign(payload, JWT_SECRET, options)

  return token
}
