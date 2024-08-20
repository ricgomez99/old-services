import treli from '@api/treli'

const { auth, getPaymentsList } = treli
const user = process.env.TEST_API_USERNAME
const password = process.env.TEST_API_PASSWORD
export class PaymentsModel {
  static async authenticate() {
    await auth(user, password)
  }
  static async createPayment() {}
  static async updatePaymentState() {}
  static async updatePayment() {}

  static async getPayments() {
    if (!this.authenticate()) return null
    try {
      const { data } = await getPaymentsList()
      return data
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getPaymentTemplates() {}
}
