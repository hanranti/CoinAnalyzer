const jwt = require('jsonwebtoken')
const config = require('./config')

const getToken = req => {
  const authorization = req.get('authorization')
  console.log(authorization)
  return authorization && authorization.toLowerCase().startsWith('bearer ')
    ? authorization.substring(7)
    : null
}

const requireToken = (req, res, next) => {
  console.log('requireToken')
  const token = getToken(req)
  console.log(token)
  console.log(!token)
  console.log(config.secret)
  const decodedToken = token ? jwt.verify(token, config.secret) : false
  console.log(decodedToken)
  console.log(!decodedToken)
  if(req.url.includes('/api') && (!token || !decodedToken)) {
    res.status(401).json({ errors: ['Please log in!'] })
  } else {
    next()
  }
}

module.exports = {
  requireToken
}