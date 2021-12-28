const jwt = require('jsonwebtoken')
const config = require('./config')

const errorHandler = (error, req, res, next) => {
  switch (error.name) {
  case 'CastError':
    return res.status(400).send({
      errors: ['Id of item is malformed!']
    })
  case 'JsonWebTokenError':
    return res.status(401).json({
      errors: ['Token is not valid!']
    })
  default:
    next()
  }
}

const getToken = req => {
  const authorization = req.get('authorization')
  return authorization && authorization.toLowerCase().startsWith('bearer ')
    ? authorization.substring(7)
    : false
}

const requireToken = (req, res, next) => {
  const token = getToken(req)
  if(req.url.includes('/api')) {
    try{
      jwt.verify(token, config.secret)
        ? next()
        : res.status(401).json({ errors: ['Please log in!'] })
    } catch(error){
      res.status(401).json({ errors: ['Please log in!'] })
    }
  } else {
    next()
  }
}

module.exports = {
  errorHandler,
  requireToken
}