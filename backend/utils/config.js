require('dotenv').config()

const PORT = process.env.PORT
const db_host = process.env.DB_HOST
const db_name = process.env.DB_NAME
const db_user = process.env.DB_USERNAME
const postgres_password = process.env.POSTGRES_PASSWORD
const staging = process.env.STAGING
const secret = process.env.SECRET

const dialect = 'postgres'

const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
}

module.exports = {
  PORT,
  db_host,
  db_name,
  db_user,
  postgres_password,
  staging,
  secret,
  dialect,
  pool
}