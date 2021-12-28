const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const apiUrl = '/api/users'

describe('usersRouter tests', () => {
  test('users are not returned without token', async () => {
    await api.get(apiUrl).expect(401)
  })

  test('users are returned with token', async () => {
    await api.get(apiUrl)
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJlYWxUZXN0VXNlciIsImlhdCI6MTY0MDY5MzM2Nn0.VW7mfdbplZZmal5fK0Pg0iwXwlqvMC5J3lY9Ytl-G9k')
      .expect(200)
  })

  afterAll(() => mongoose.connection.close())
})