const router = require('express').Router()

const usersController = require('../controllers/usersController')

router.post('/', async (req, res) => {
  const newUser = await usersController.createUser(req.body)
  console.log('post')
  console.log(req.body)
  res.status(200).json(newUser)
})

module.exports = router