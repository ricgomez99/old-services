import testServer from '../src/utils/testServer.js'
import request from 'supertest'
import nock from 'nock'
import {
  getPayment,
  getPaymentByEmail,
  createPayment,
  updatePaymentStatus,
  updatePaymentData,
} from './mocks/payments.js'

const app = testServer()
describe('[routes / billing]', () => {
  describe('[GET / billing]', () => {
    beforeEach(() => {
      nock('http://localhost:3000').get('/billing').reply(200)
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('status code should be 200', async () => {
      // Arrange
      const status = 200

      // Act
      const { statusCode } = await request(app)
        .get('/billing')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

      //Assert
      expect(statusCode).toBe(status)
    })

    test('should return all payments', async () => {
      // Arrange
      const status = 200

      // Act
      const { body, statusCode } = await request(app)
        .get('/billing')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

      //Assert
      expect(statusCode).toBe(status)
      expect(body).toBeDefined()
      expect(body).toHaveProperty('results')
    })
  })

  describe('[GET / billing /:id]', () => {
    beforeEach(() => {
      nock('http://localhost:3000').get('/billing/729749').reply(200, getPayment)
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('should return the payment by its id', async () => {
      // Arrange
      const paymentId = 729749
      const status = 200
      const response = getPayment

      // Act
      const { body, statusCode } = await request(app)
        .get(`/billing/${paymentId}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })

    test('should throw an error if id is invalid', async () => {
      // Arrange
      const paymentId = 123456
      const status = 500
      const response = { message: 'payment not found' }

      // Act
      const { body, statusCode } = await request(app)
        .get(`/billing/${paymentId}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })
  })

  describe('[GET / billing / user /:email]', () => {
    beforeEach(() => {
      nock('http://localhost:3000').get('/billing/user/andres@wibbux.com').reply(200, getPaymentByEmail)
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('should return payment by the user email', async () => {
      // Arrange
      const email = 'andres@wibbux.com'
      const status = 200
      const response = getPaymentByEmail

      // Act
      const { body, statusCode } = await request(app)
        .get(`/billing/user/${email}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })

    test('should throw an error if email is invalid', async () => {
      // Arrange
      const email = '123@test.com'
      const status = 500
      const response = { message: 'unable to find user payments' }

      // Act
      const { body, statusCode } = await request(app)
        .get(`/billing/user/${email}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })
  })

  describe('[GET / billing / payment_templates]', () => {
    beforeEach(() => {
      nock('http://localhost:3000').get('/billing/payment_templates').reply(200)
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('should throw an error if there is no templates', async () => {
      // Arrange
      const status = 500
      const response = { message: 'payment not found' }

      // Act
      const { body, statusCode } = await request(app)
        .get('/billing/payment_templates')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500)

      //Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })
  })

  describe('[POST / billing]', () => {
    beforeEach(() => {
      nock('http://localhost:3000')
        .post('/billing', createPayment)
        .reply(201, { message: 'payment processed successfully!' })
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('should be able to create a payment', async () => {
      // Arrange
      const status = 201
      const data = createPayment
      const response = { message: 'payment processed successfully!' }

      // Act
      const { body, statusCode } = await request(app)
        .post('/billing')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })

    test('should throw an error if there is no data', async () => {
      // Arrange
      const status = 500
      const data = {}
      const response = { message: 'failed to process payment' }

      // Act
      const { body, statusCode } = await request(app)
        .post('/billing')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })
  })

  describe('[Update / billing / update_payment_status]', () => {
    beforeEach(() => {
      nock('http://localhost:3000')
        .post('/billing', updatePaymentStatus)
        .reply(200, { message: 'payment status updated successfully!' })
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('should update payment status to approved', async () => {
      // Arrange
      const response = { message: 'payment status updated successfully!' }
      const status = 200
      const data = updatePaymentStatus

      // Act
      const { body, statusCode } = await request(app)
        .post('/billing/update_payment_status')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })

    test('should throw an error if no data is provided', async () => {
      // Arrange
      const response = { message: 'provide the required data for updating status' }
      const status = 400
      const data = {}

      // Act
      const { body, statusCode } = await request(app)
        .post('/billing/update_payment_status')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })
  })

  describe('[Update / billing / update_payment /:id]', () => {
    beforeEach(() => {
      nock('http://localhost:3000')
        .post('/billing/update_payment/882710', updatePaymentData)
        .reply(200, { message: 'payment updated successfully!' })
    })

    afterAll(() => {
      nock.cleanAll()
    })

    test('should update payment data', async () => {
      // Arrange
      const response = { message: 'payment updated successfully!' }
      const status = 200
      const paymentId = 882710
      const data = updatePaymentData

      // Act
      const { body, statusCode } = await request(app)
        .post(`/billing/update_payment/${paymentId}`)
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

      // Assert
      expect(statusCode).toBe(status)
      expect(body).toEqual(response)
    })

    test('should throw an error if id is invalid', async () => {
      // Arrange
      const response = { message: 'unable to update payment data' }
      const status = 500
      const paymentId = 123
      const data = updatePaymentData

      // Act
      const { body, statusCode } = await request(app)
        .post(`/billing/update_payment/${paymentId}`)
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
