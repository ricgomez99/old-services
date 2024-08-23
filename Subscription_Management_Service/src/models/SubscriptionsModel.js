import axios from 'axios'

/** Change it to API_TOKEN for real transactions **/
const token = process.env.API_TEST_TOKEN
const url = process.env.API_URL

const postOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Basic ${token}`,
  },
}
const getOptions = {
  headers: {
    Accept: 'application/json',
    Authorization: `Basic ${token}`,
  },
}

export class SubscriptionsModel {
  static async createSubscription(data) {
    if (!data) throw new Error('invalid data, unable to create subscription')
    try {
      const response = await axios.post(`${url}/subscriptions/create`, data, postOptions)
      return response
    } catch (error) {
      if (error && error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async updateSubscription(body) {
    if (!body) throw new Error('invalid data, unable to update subscription')
    try {
      const response = await axios.post(`${url}/subscriptions/update`, body, postOptions)
      return response
    } catch (error) {
      if (error && error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getSubscriptions() {
    try {
      const { data } = await axios.get(`${url}/subscriptions`, getOptions)
      return data
    } catch (error) {
      if (error && error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getSubscriptionById(body) {
    if (!body) throw new Error('invalid data')
    try {
      const { data } = await axios.post(`${url}/subscriptions/view`, body, postOptions)
      return data
    } catch (error) {
      if (error && error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getSubscriptionByUserEmail(email) {
    if (!email) throw new Error('invalid user email')
    try {
      const { data } = await axios.get(`${url}/subscriptions?email=${email}`, getOptions)
      return data
    } catch (error) {
      if (error && error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async subscriptionActions(body) {
    if (!body) throw new Error('invalid data, process failed')
    try {
      const response = await axios.post(`${url}/subscriptions/actions`, body, postOptions)
      return response
    } catch (error) {
      if (error && error instanceof Error) {
        console.log(error.message)
      }
    }
  }
}
