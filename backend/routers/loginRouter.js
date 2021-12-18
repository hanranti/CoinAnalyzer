const router = require('express').Router()

const loginController = require('../controllers/loginController')

router.post('/login', async (req, res) => {
  const result = await loginController.login(req.body)
  result.errors
    ? res.status(401).json(result.errors)
    : res.status(200).json({ result, username: req.body.username })
})

router.post('/signup', async (req, res) => {
  const error = await loginController.createUser(req.body)
  console.log(error)
  error
    ? res.status(400).send(error)
    : res.status(200).json({ created: true })
})

module.exports = router