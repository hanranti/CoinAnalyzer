const router = require('express').Router()

const usersController = require('../controllers/usersController')

router.post('/', async (req, res) => {
  const error = await usersController.createUser(req.body)
  console.log(error)
  error
    ?res.status(400).send(error)
    :res.status(200).json({ created: true })
})

module.exports = router