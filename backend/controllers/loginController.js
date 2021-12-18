const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../models')
const { Op } = require('sequelize')
const user = db.user

const login = async ({ username, password }) => {
  const foundUser = await user.findOne({
    attributes: ['username', 'passwordHash'],
    where: {
      username: username
    }
  })

  const passwordCorrect = !foundUser
    ? false
    : await bcrypt.compare(password, foundUser.passwordHash)

  const error = !(foundUser && passwordCorrect)
    ?  { errors: ['Invalid username or password!'] }
    : false

  const userForToken = {
    username: username
  }

  return error
    ? error
    : jwt.sign(userForToken, process.env.SECRET)
}

const createUser = async ({ username, password, name }) => {
  const error = (await user.findAll({
    where: {
      username: {
        [Op.eq]: username
      }
    }
  })).length > 0
    ? { errors: ['Username already in use!'] }
    : username.length < 4
      ? { errors: ['Username must be at least 4 letters long!'] }
      : username.length >= 32
        ? { errors: ['Username should be 32 letters long or shorter'] }
        : { errors: [] }
  !password
    ? error.errors.push('Password must not be empty!')
    :password.length<8
      ? error.errors.push('Password must be at least 8 letters long!')
      : password.length >=64
        ? error.errors.push ('Password must be 64 letters long or shorter!')
        : false

  if(error.errors.length > 0) {
    return error
  } else {
    const passwordHash = await bcrypt.hash(password, 15)

    const newUser = new user({
      username: username,
      name: name,
      passwordHash
    })
    await newUser.save()
  }
}

module.exports = {
  login,
  createUser
}