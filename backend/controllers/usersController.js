const db = require('../models')
const user = db.user

const findAllUsers = async () => {
  try{
    const allUsers = await user.findAll({
      attributes: ['username']
    })
    return allUsers
  } catch(error) {
    return error
  }
}

module.exports = {
  findAllUsers
}