const db = require('../../backend/models')
const sequelize = db.sequelize

const UserJSON = require('../development/User.json')
const init = async () => {
  await sequelize.query('DROP TABLE IF EXISTS "user"')
  await sequelize.query('CREATE TABLE "user" ("username" TEXT PRIMARY KEY, "passwordHash" TEXT, "name" TEXT, "createdAt" DATE, "updatedAt" DATE)')
  for (const e of UserJSON) {
    await db.User.create({
      'username': e['username'],
      'passwordHash': e['passwordHash'],
      'name': e['name']
    })
  }
}

init()