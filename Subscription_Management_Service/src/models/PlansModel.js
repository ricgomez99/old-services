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
export class PlansModel {
  static async createPlan(data) {
    if (!data) throw new Error('invalid data')
    try {
      const response = await axios.post(`${url}/plans/create`, data, postOptions)
      return response
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async updatePlan(body) {
    if (!body) throw new Error('invalid data')
    try {
      const response = await axios.post(`${url}/plans/update`, body, postOptions)
      return response
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getPlans() {
    try {
      const { data } = await axios.get(`${url}/plans/get`, getOptions)
      return data
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getPlansById(id) {
    if (!id) throw new Error('no id found, id is required')
    try {
      const { data } = await axios.get(`${url}/plans/get?id=${id}`, getOptions)
      return data
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }
}
