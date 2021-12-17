const router = require('express').Router()

const usersController = require('../controllers/usersController')

router.get('/', async (req, res) => {
  const allUsers = await usersController.findAllUsers()
  res.status(200).json(allUsers)
})

router.post('/', async (req, res) => {
  const error = await usersController.createUser(req.body)
  console.log(error)
  error
    ? res.status(400).send(error)
    : res.status(200).json({ created: true })
})

router.get('/info', async (req, res) => res.status(200).json('This is an api for users'))

module.exports = router