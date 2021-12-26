const config = require('../utils/config')

describe('config', () => {
  test('dialect is postgres', () => {
    const dialect = config.dialect

    expect(dialect).toBe('postgres')
  })

  test('pool is correct', () => {
    const pool = config.pool
    const expectedPool = {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }

    expect(pool).toStrictEqual(expectedPool)
  })

  test('staging is not enabled', () => {
    const staging = config.staging
    const expectedStaging = undefined

    expect(staging).toBe(expectedStaging)
  })

  test('PORT is 1234', () => {
    const PORT = config.PORT
    const expectedPORT = '1234'

    expect(PORT).toBe(expectedPORT)
  })
})