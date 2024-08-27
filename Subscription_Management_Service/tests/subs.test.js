import testServer from '../src/utils/testServer.js'
import request from 'supertest'
import nock from 'nock'
import { getSubByEmail, getSubById, createSub } from './mocks/subs.js'

const app = testServer()
const SECONDS = 1000

jest.setTimeout(70 * SECONDS)

describe('[routes / subscriptions]', () => {
  describe('[GET / subscriptions]', () => {
    beforeEach(() => {
      nock('http://localhost:3000').get('/subscriptions').reply(200)
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('should return status code 200', async () => {
      // Arrange
      const status = 200

      // Act
      const { statusCode } = await request(app)
        .get('/subscriptions')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

      // Assert
      expect(statusCode).toBe(status)
    })

    test('should return all subscriptions', async () => {
      // Arrange
      const status = 200

      // Act
      const { body, statusCode } = await request(app)
        .get('/subscriptions')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toBeDefined()
      expect(body).toHaveProperty('results')
    })
  })

  describe('[GET / user /:email]', () => {
    beforeEach(() => {
      nock('http://localhost:3000').get('/subscriptions/user/andres@wibbux.com').reply(200, getSubByEmail)
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('should return the sub by user email', async () => {
      // Arrange
      const status = 200
      const response = getSubByEmail
      const email = 'andres@wibbux.com'

      // Act
      const { body, statusCode } = await request(app)
        .get(`/subscriptions/user/${email}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })

    test('should throw an error if email is invalid', async () => {
      // Arrange
      const status = 500
      const response = { message: 'unable to find subscription' }
      const email = 'an@wibbux.com'

      // Act
      const { body, statusCode } = await request(app)
        .get(`/subscriptions/user/${email}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })
  })

  describe('[GET / subscriptions /:id]', () => {
    beforeEach(() => {
      nock('http://localhost:3000').get('/subscriptions/798735').reply(200, getSubById)
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('should return a sub by its id', async () => {
      // Arrange
      const status = 200
      const response = getSubById
      const subId = 798735

      // Act
      const { body, statusCode } = await request(app)
        .post(`/subscriptions/${subId}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })

    test('should throw an error if the id is invalid', async () => {
      // Arrange
      const status = 500
      const response = { message: 'failed getting subscription' }
      const subId = 123

      // Act
      const { body, statusCode } = await request(app)
        .post(`/subscriptions/${subId}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })
  })

  describe('[POST / subscriptions]', () => {
    beforeEach(() => {
      nock('http://localhost:3000')
        .post('/subscriptions', createSub)
        .reply(201, { message: 'subscription created successfully!' })
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('should be able to create a subscription', async () => {
      // Arrange
      const status = 201
      const response = { message: 'subscription created successfully!' }

      // Act
      const { body, statusCode } = await request(app)
        .post(`/subscriptions`)
        .send(createSub)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })

    test('should throw an error if no data is passed', async () => {
      // Arrange
      const status = 500
      const response = { message: 'unable to create subscription' }

      // Act
      const { body, statusCode } = await request(app)
        .post(`/subscriptions`)
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })
  })
})
