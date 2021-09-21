const db = require('../../data/db-config')

async function insertUser(user) {
  const [newUserObject] = await db('users').insert(user, [
    'first_name',
    'last_name',
    'email',
    'password',
    'role',
  ])
  return newUserObject
}

function getAllUsers() {
  return db('users').select('user_id', 'first_name', 'last_name', 'email', 'role')
}

function findBy(filter) {
  return db('users').where(filter)
}

module.exports = {
  insertUser,
  getAllUsers,
  findBy,
}
