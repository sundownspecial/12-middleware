'use strict'

const server = require('../../lib/server')
require('jest')
require('dotenv').config({path: './../.test.env'})

// require('dotenv').config()

describe('POST /api/v1/note', function () {
  beforeAll(() => server.start(3000, (err) => console.log(`Listening on ${3000}`)))
  afterAll(() => server.stop())

  describe('Valid req/res', () => {

  })

  describe('Invalid req/res', () => {
    it('should return true', () => expect(true).toBeTruthy())
  })
})