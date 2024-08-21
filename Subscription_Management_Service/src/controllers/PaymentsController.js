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

    return res.status(200).json({ message: 'payment processed successfully!' })
  }

  updatePaymentStatus = async (req, res) => {
    const updateData = req.body
    const updated = await this.paymentsModel.updatePaymentStatus(updateData)

    if (!updated) {
      return res.status(500).json({ message: 'unable to update payment status' })
    }

    return res.status(200).json({ message: 'payment status updated successfully!' })
  }

  updatePaymentById = async (req, res) => {
    const { id } = req.params
    const updateData = req.body
    const paymentUpdated = await this.paymentsModel.updatePaymentById({ id, updateData })

    if (!paymentUpdated) {
      return res.status(500).json({ message: 'unable to update payment data' })
    }

    return res.status(200).json({ message: 'payment updated successfully!' })
  }

  getPaymentById = async (req, res) => {
    const { id } = req.params
    const payment = await this.paymentsModel.getPaymentById(id)

    if (!payment) {
      return res.status(500).json({ message: 'payment not found' })
    }

    return res.status(200).json(payment)
  }

  getPaymentsByUserEmail = async (req, res) => {
    const { email } = req.query
    const payments = await this.getPaymentsByUserEmail(email)

    if (!payments) {
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
      return res.status(400).json({ message: 'failed getting payment templates' })
    }

    return res.status(200).json(templates)
  }
}
