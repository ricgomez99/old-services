import _ from 'lodash'

export class PaymentsController {
  constructor({ paymentsModel }) {
    this.paymentsModel = paymentsModel
  }

  createPayment = async (req, res) => {
    const data = req.body
    const payed = await this.paymentsModel.createPayment(data)
    if (!payed) {
      return res.status(500).json({ message: 'failed to process payment' })
    }

    return res.status(201).json({ message: 'payment processed successfully!' })
  }

  updatePaymentStatus = async (req, res) => {
    const updateData = req.body

    if (_.isEmpty(updateData) || !updateData.payment_id) {
      return res.status(400).json({ message: 'provide the required data for updating status' })
    }

    const updated = await this.paymentsModel.updatePaymentStatus(updateData)

    if (!updated) {
      return res.status(500).json({ message: 'unable to update payment status' })
    }

    return res.status(200).json({ message: 'payment status updated successfully!' })
  }

  updatePaymentById = async (req, res) => {
    const { id } = req.params
    const updateData = req.body

    if (!id) {
      return res.status(400).json({ message: 'id is required' })
    }

    const body = { ...updateData, payment_id: id }
    const paymentUpdated = await this.paymentsModel.updatePaymentById({ body, id })

    if (!paymentUpdated) {
      return res.status(500).json({ message: 'unable to update payment data' })
    }

    return res.status(200).json({ message: 'payment updated successfully!' })
  }

  getPaymentById = async (req, res) => {
    const { id } = req.params
    const payment = await this.paymentsModel.getPaymentById(id)

    if (!payment || payment.code === 'no_payments') {
      return res.status(500).json({ message: 'payment not found' })
    }

    return res.status(200).json(payment)
  }

  getPaymentsByUserEmail = async (req, res) => {
    const { email } = req?.params
    const payments = await this.paymentsModel.getPaymentsByUserEmail(email)

    if (!payments || !payments.results?.length) {
      return res.status(500).json({ message: 'unable to find user payments' })
    }

    return res.status(200).json(payments)
  }

  getPayments = async (req, res) => {
    const payments = await this.paymentsModel.getPayments()
    if (!payments) {
      return res.status(400).json({ message: 'unable to get payments' })
    }

    return res.status(200).json(payments)
  }

  getPaymentTemplates = async (req, res) => {
    const templates = await this.paymentsModel.getPaymentTemplates()
    if (!templates) {
      return res.status(500).json({ message: 'failed getting payment templates' })
    }

    return res.status(200).json(templates)
  }
}
