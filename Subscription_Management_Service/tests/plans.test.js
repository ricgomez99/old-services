import testServer from '../src/utils/testServer.js'
import request from 'supertest'
import { getPlan, createPlan, updatePlan } from './mocks/plans.js'
import nock from 'nock'

const app = testServer()
describe('[ routes / plans ]', () => {
  describe('status code 200', () => {
    test('should return status code 200', async () => {
      const { statusCode } = await request(app).get('/plans').expect('Content-Type', /json/).expect(200)

      expect(statusCode).toEqual(200)
    })
  })

  describe('[ GET / plans]', () => {
    beforeEach(() => {
      nock('http://localhost:3000').get('/plans').reply(200)
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('should return all plans', async () => {
      // Arrange
      const status = 200

      // Act
      const { statusCode } = await request(app)
        .get('/plans')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

      // Assert
      expect(statusCode).toBe(status)
    })
  })

  describe('[GET / plans / id]', () => {
    beforeEach(() => {
      nock('http://localhost:3000').get('/plans/885219').reply(200, getPlan, { 'Content-Type': 'application/json' })
    })

    afterAll(() => {
      nock.cleanAll()
    })
    test('should get plan by id', async () => {
      // Arrange
      const response = getPlan
      const status = 200
      const planId = 885219

      // Act
      const { body, statusCode } = await request(app)
        .get(`/plans/${planId}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })

    test('should throw an error if id is invalid', async () => {
      // Arrange
      const status = 500
      const response = { message: 'failed finding plan' }
      const planId = 123456

      // Act
      const { body, statusCode } = await request(app)
        .get(`/plans/${planId}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })
  })

  describe('[POST / plans]', () => {
    beforeEach(() => {
      nock('http://localhost:3000')
        .post('/plans')
        .reply(201, { message: 'plan created successfully!' }, { 'Content-Type': 'application/json' })
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('should create a plans succesfully', async () => {
      // Arrange
      const status = 201
      const response = { message: 'plan created successfully!' }

      // Act
      const { body, statusCode } = await request(app)
        .post('/plans')
        .send(createPlan)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })

    test('should throw an error if there`s no data', async () => {
      // Arrange
      const status = 500
      const response = { message: 'unable to create plan' }

      // Act
      const { body, statusCode } = await request(app)
        .post('/plans')
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })
  })

  describe('[Update / plans / id]', () => {
    beforeEach(() => {
      nock('http://localhost:3000')
        .post('/plans/update/892078', updatePlan)
        .reply(200, { message: 'plan updated successfully!' }, { 'Content-Type': 'application/json' })
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('should update the plan data', async () => {
      // Arrange
      const planId = 892078
      const status = 200
      const data = updatePlan
      const response = { message: 'plan updated successfully!' }

      // Act
      const { body, statusCode } = await request(app)
        .post(`/plans/update/${planId}`)
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })

    test('should throw an error if data is invalid', async () => {
      // Arrange
      const data = {}
      const planId = 892078
      const status = 500
      const response = { message: 'unable to update plan' }

      // Act
      const { body, statusCode } = await request(app)
        .post(`/plans/update/${planId}`)
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })
  })
})
