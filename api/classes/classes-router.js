const router = require('express').Router()
const classes = require('./classes-model')
const { checkClassId } = require('../middleware')

router.get('/', (req, res, next) => {
  classes.getAllClasses()
    .then((classes) => {
      res.status(200).json(classes)
    })
    .catch((err) => next(err))
})

router.get('/:id', checkClassId, (req, res) => {
  res.json(req.item)
})

router.post('/', (req, res, next) => {
  classes.addItem(req.body)
    .then((item) => {
      res.status(201).json(item)
    })
    .catch((error) => {
      next(error)
    })
})

router.put('/:id', checkClassId, (req, res, next) => {
  classes.update(req.params.id, req.body)
    .then((item) => {
      res.status(200).json(item)
    })
    .catch((error) => {
      next(error)
    })
})

router.delete('/:id', checkClassId, (req, res, next) => {
  classes.removeItem(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'The class has been removed' })
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = router
