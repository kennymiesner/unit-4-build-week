const bcryptjs = require('bcryptjs')

exports.seed = async function (knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      first_name: 'Super',
      last_name: 'Admin',
      email: 'superadmin@gmail.com',
      password: bcryptjs.hashSync('test', 8),
      role: 1,
    },
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@gmail.com',
      password: bcryptjs.hashSync('test', 8),
      role: 1,
    },
    {
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'janedoe@gmail.com',
      password: bcryptjs.hashSync('test', 8),
      role: 0,
    },
    {
      first_name: 'Bob',
      last_name: 'Brown',
      email: 'bobbrown@gmail.com',
      password: bcryptjs.hashSync('test', 8),
      role: 0,
    },
    {
      first_name: 'Ann',
      last_name: 'Smith',
      email: 'annsmith@gmail.com',
      password: bcryptjs.hashSync('test', 8),
      role: 0,
    },
  ])
}
