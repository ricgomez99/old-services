import axios from 'axios'

/** Change it to API_TOKEN for real transactions **/
const token = process.env.API_TEST_TOKEN
const url = process.env.API_URL
export class PaymentsModel {
  static async createPayment(data) {
    try {
      if (!data) {
        throw new Error('Payment details are required')
      }
      const payment = await axios.post(`${url}/payments/create`, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Basic ${token}`,
        },
      })
      return payment
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }
  static async updatePaymentStatus(updateData) {
    if (!updateData) {
      throw new Error('update data is required')
    }

    try {
      const update = await axios.post(`${url}/payments/update-status`, updateData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Basic ${token}`,
        },
      })

      return update
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }
  static async updatePaymentById({ id, data }) {
    if (!id && !data) {
      throw new Error('not valid data for updating')
    }

    try {
      const { results } = await this.getPaymentById(id)
      const { status } = results[0]
      if (status !== 'Pendiente') return null

      const updated = await axios.post(`${url}/payments/update`, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Basic ${token}`,
        },
      })
      return updated
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getPaymentById(id) {
    if (!id) {
      throw new Error('Id is required')
    }

    try {
      const { data } = await axios.get(`${url}/payments/list?payment_id=${id}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${token}`,
        },
      })
      return data
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getPaymentsByUserEmail(email) {
    if (!email) throw new Error('email is required')
    try {
      const { data } = await axios.get(`${url}/payments/list?email=${email}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${token}`,
        },
      })
      return data
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getPayments() {
    try {
      const { data } = await axios.get(`${url}/payments/list`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${token}`,
        },
      })
      return data
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getPaymentTemplates() {
    try {
      const { data } = await axios.get(`${url}/payments/templates`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${token}`,
        },
      })

      return data
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }
}
