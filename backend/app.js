const express = require('express')
require('express-async-errors')

const morgan = require('morgan')

const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

const middleware = require('./utils/middleware')
app.use(middleware.requireToken)

morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan('tiny'))
app.use(morgan(':body'))

app.use('/', require('./routers/loginRouter'))
app.use('/api/users', require('./routers/usersRouter'))

app.use(express.static('build'))

app.use((req, res) => res.status(404).send({ errors: ['Nothing here!'] }))
app.use(middleware.errorHandler)

module.exports = app