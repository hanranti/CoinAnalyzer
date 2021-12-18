const db = require('../../backend/models')
const sequelize = db.sequelize

const init = async () => {
  await sequelize.query('CREATE TABLE IF NOT EXISTS "user" ("username" TEXT PRIMARY KEY, "passwordHash" TEXT, "name" TEXT, "createdAt" DATE, "updatedAt" DATE)')
}

init()