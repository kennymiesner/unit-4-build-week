exports.up = function (knex) {
  return knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('first_name', 128).notNullable()
      users.string('last_name', 128).notNullable()
      users.string('email', 128).notNullable().unique()
      users.string('password', 128).notNullable()
      users.boolean('role').defaultTo(0)
    })
    .createTable('classes', (classes) => {
      classes.increments('class_id')
      classes.string('name', 128).notNullable()
      classes.string('type', 128).notNullable()
      classes.string('date', 128).notNullable()
      classes.string('start_time', 128).notNullable()
      classes.integer('duration', 128).notNullable()
      classes.string('intensity', 128).notNullable()
      classes.string('location', 128).notNullable()
      classes.integer('enrolled', 128).defaultTo(0)
      classes.integer('max_capacity', 128).notNullable()
      classes.integer('instructor_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('classes')
    .dropTableIfExists('users')
}
