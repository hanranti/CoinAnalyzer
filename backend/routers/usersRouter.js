const router = require('express').Router()

const usersController = require('../controllers/usersController')

router.get('/', async (req, res) => {
  const allUsers = await usersController.findAllUsers()
  res.status(200).json(allUsers)
})

router.get('/info', async (req, res) => res.status(200).json('This is an api for users'))

module.exports = router