const router = require('express').Router()

const loginController = require('../controllers/loginController')

router.post('/login', async (req, res) => {
  const result = await loginController.login(req.body)
  result.errors
    ? res.status(401).send(result)
    : res.status(200).json({ token: result[0], username: result[1], name: result[2] })
})

router.post('/signup', async (req, res) => {
  const error = await loginController.createUser(req.body)
  error
    ? res.status(400).send(error)
    : res.status(201).json({ created: true })
})

module.exports = router