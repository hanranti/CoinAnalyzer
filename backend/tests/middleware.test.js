const mocks = require('node-mocks-http')
const sinon = require('sinon')

let requireToken, errorHandler
let mockReq, mockRes, mockNext

describe('requireToken tests', () => {
  beforeEach(() => {
    requireToken = require('../utils/middleware').requireToken
    mockRes = mocks.createResponse()
    mockNext = sinon.spy()
  })

  test('authentication is not passed without token', () => {
    mockReq = mocks.createRequest({
      method: 'GET',
      url: '/api/users'
    })
    requireToken(mockReq, mockRes, mockNext)
    expect(mockNext.called).toBe(false)
  })

  test('authentication is not passed with fake token', () => {
    mockReq = mocks.createRequest({
      method: 'GET',
      url: '/api/users',
      headers: {
        Authorization: 'Bearer beagleboys'
      }
    })
    requireToken(mockReq, mockRes, mockNext)
    expect(mockNext.called).toBe(false)
  })

  test('authentication is passed with real token', () => {
    mockReq = mocks.createRequest({
      method: 'GET',
      url: '/api/users',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJlYWxUZXN0VXNlciIsImlhdCI6MTY0MDY5MzM2Nn0.VW7mfdbplZZmal5fK0Pg0iwXwlqvMC5J3lY9Ytl-G9k'
      }
    })
    requireToken(mockReq, mockRes, mockNext)
    expect(mockNext.called).toBe(true)
  })
})

describe('errorHandler works', () => {
  beforeEach(() => {
    errorHandler = require('../utils/middleware').errorHandler
    mockRes = mocks.createResponse()
    mockNext = sinon.spy()
  })

  test('request with Casterror is not passed', () => {
    const mockError = {
      name: 'CastError'
    }
    errorHandler(mockError, mockReq, mockRes, mockNext)
    expect(mockNext.called).toBe(false)
  })

  test('request with JsonWebTokenError is not passed', () => {
    const mockError = {
      name: 'JsonWebTokenError'
    }
    errorHandler(mockError, mockReq, mockRes, mockNext)
    expect(mockNext.called).toBe(false)
  })

  test('request with no errors is passed', () => {
    const mockError = {
      name: null
    }
    errorHandler(mockError, mockReq, mockRes, mockNext)
    expect(mockNext.called).toBe(true)
  })
})