exports.seed = async function (knex) {
  await knex('classes').del()
  await knex('classes').insert([
    {
      name: 'Power Yoga 1',
      type: 'Yoga',
      date: '09/25/2021',
      start_time: '9:00am',
      duration: 60,
      intensity: 'Medium',
      location: 'Town Square',
      enrolled: 0,
      max_capacity: 30,
      instructor_id: 1,
    },
    {
      name: 'Power Yoga 1.5',
      type: 'Yoga',
      date: '09/25/2021',
      start_time: '10:00am',
      duration: 60,
      intensity: 'Medium',
      location: 'Terrace Park',
      enrolled: 5,
      max_capacity: 25,
      instructor_id: 1,
    },
    {
      name: 'Zumba',
      type: 'Zumba',
      date: '09/26/2021',
      start_time: '12:00pm',
      duration: 60,
      intensity: 'High',
      location: 'Central Park',
      enrolled: 29,
      max_capacity: 45,
      instructor_id: 2,
    },
    {
      name: 'HIIT',
      type: 'HIIT',
      date: '09/26/2021',
      start_time: '3:00pm',
      duration: 45,
      intensity: 'High',
      location: 'Sculpture Park',
      enrolled: 5,
      max_capacity: 15,
      instructor_id: 2,
    },
    {
      name: 'Power Barre Express',
      type: 'Yoga',
      date: '09/27/2021',
      start_time: '9:00am',
      duration: 45,
      intensity: 'Medium',
      location: 'Twin Lake',
      enrolled: 26,
      max_capacity: 30,
      instructor_id: 2,
    },
  ])
}
