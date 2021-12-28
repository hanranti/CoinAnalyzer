const mocks = require('node-mocks-http')
const sinon = require('sinon')

let requireToken
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
})