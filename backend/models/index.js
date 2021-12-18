const config = require('../utils/config')
const Sequelize = require('sequelize')

const sequelize = config.staging
  ? (() => {
    const stagingSequelize = new Sequelize(process.env.DATABASE_URL, {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    })

    stagingSequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.')
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err)
      })
    return stagingSequelize
  })()
  : new Sequelize(
    config.db_name,
    config.db_user,
    config.postgres_password,
    {
      host: config.db_host,
      dialect: config.dialect,
      operatorsAliases: 0,
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
      }
    }
  )

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  user: require('./user')(sequelize, Sequelize)
}

module.exports = db