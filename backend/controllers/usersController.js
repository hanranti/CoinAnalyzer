const bcrypt = require('bcrypt')
const db = require('../models')
const { Op } = require('sequelize')
const User = db.User

const createUser = async ({ username, password, name }) => {
  const error = (await User.findAll({
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

    const newUser = new User({
      username: username,
      name: name,
      passwordHash
    })
    await newUser.save()
  }
}

module.exports = {
  createUser
}