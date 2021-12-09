require('dotenv').config()

const PORT = process.env.BACKEND_PORT || '1234'
const db_host = process.env.DB_HOST
const db_name = process.env.DB_NAME
const db_user = process.env.DB_USERNAME
const postgres_password = process.env.POSTGRES_PASSWORD

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
  dialect,
  pool
}