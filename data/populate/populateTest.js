const db = require('../../backend/models')
const sequelize = db.sequelize

const init = async () => {
  const JSONDATA = require('./test/User.json')
  await sequelize.query('DROP TABLE IF EXISTS "user"')
  await sequelize.query('CREATE TABLE "user" ("username" TEXT PRIMARY KEY, "passwordHash" TEXT, "name" TEXT, "createdAt" DATE, "updatedAt" DATE)')
  for (const e of JSONDATA) {
    await db.user.create({
      'username': e['username'],
      'passwordHash': e['passwordHash'],
      'name': e['name']
    })
  }
}

init()