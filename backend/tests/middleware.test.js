const mocks = require('node-mocks-http')
const sinon = require('sinon')
const config = require('../utils/config')
const jwt = require('jsonwebtoken')

let requireToken, errorHandler
let mockReq, mockRes, mockNext

const createValidToken = (username) => {
  return 'Bearer ' + jwt.sign({
    username: username
  }, config.secret)
}

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
    const token = createValidToken('realTokenGuy')
    mockReq = mocks.createRequest({
      method: 'GET',
      url: '/api/users',
      headers: {
        Authorization: token
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