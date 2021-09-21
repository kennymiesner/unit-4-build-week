const db = require('../../data/db-config')

function getAllClasses() {
  return db('classes')
}

function findById(id) {
  return db('classes').where({ class_id: id }).first()
}

async function addItem(workout) {
  const [newWorkout] = await db('classes').insert(workout, [
    'name',
    'type',
    'date',
    'start_time',
    'duration',
    'intensity',
    'location',
    'enrolled',
    'max_capacity',
    'instructor_id',
  ])
  return newWorkout
}

function removeClass(id) {
  return db('classes').where({ class_id: id }).del()
}

function update(id, changes) {
  return db('classes')
    .where({ item_id: id })
    .update(changes, [
      'name',
      'type',
      'date',
      'start_time',
      'duration',
      'intensity',
      'location',
      'enrolled',
      'max_capacity',
      'instructor_id',
    ])
}

function findClassByListingUserId(user_id) {
  return db('classes')
    .leftJoin('users', 'classes.user_id', 'users.user_id')
    .select(
      'classes.name',
      'classes.type',
      'classes.date',
      'classes.start_time',
      'classes.duration',
      'classes.intensity',
      'classes.location',
      'classes.enrolled',
      'classes.max_capacity',
      'classes.instructor_id',
    )
    .where({ 'users.user_id': user_id })
}

module.exports = {
  getAllClasses,
  addItem,
  findById,
  removeClass,
  update,
  findClassByListingUserId,
}
