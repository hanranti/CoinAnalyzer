const jwt = require('jsonwebtoken')
const config = require('./config')

const getToken = req => {
  const authorization = req.get('authorization')
  return authorization && authorization.toLowerCase().startsWith('bearer ')
    ? authorization.substring(7)
    : null
}

const requireToken = (req, res, next) => {
  const token = getToken(req)
  req.url.includes('/api')
    ? !token || jwt.verify(token, config.secret)
      ? res.status(401).json({ errors: ['Please log in!'] })
      : next()
    : next()
}

module.exports = {
  requireToken
}