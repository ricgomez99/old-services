export class PaymentsController {
  constructor({ paymentsModel }) {
    this.paymentsModel = paymentsModel
  }

  getPayments = async (req, res) => {
    const payments = await this.getPayments()
    if (!payments) {
      return res.status(400).json({ message: 'unable to get payments' })
    }

    return res.status(200).json(payments)
  }
}
