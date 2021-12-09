const bcrypt = require('bcrypt')
const db = require('../models')
const User = db.User

const createUser = async ({ username, password, name }) => {
  const passwordHash = await bcrypt.hash(password, 15)

  const newUser = new User({
    username: username,
    name: name,
    passwordHash,
  })

  const savedUser = await newUser.save()

  return savedUser
}

module.exports = {
  createUser
}