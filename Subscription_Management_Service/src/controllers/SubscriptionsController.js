import actionConfirmed from '../utils/actionConfirmed.js'
export class SubscriptionsController {
  constructor({ subscriptionsModel }) {
    this.subscriptionsModel = subscriptionsModel
  }

  createSubscription = async (req, res) => {
    const subData = req.body
    const created = await this.subscriptionsModel.createSubscription(subData)

    if (!created) {
      return res.status(500).json({ message: 'unable to create subscription' })
    }

    return res.status(200).json({ message: 'subscription created successfully!' })
  }

  updateSubscription = async (req, res) => {
    const updateData = req.body
    const { id } = req.params
    const body = { ...updateData, subscription_id: id }

    const updated = await this.subscriptionsModel.updateSubscription(body)
    if (!updated) {
      return res.status(500).json({ message: 'failed updating data' })
    }

    return res.status(200).json({ message: 'subscription updated successfully!' })
  }

  getSubscriptionById = async (req, res) => {
    const { id } = req.params
    const body = { subscription_id: id }
    const subscription = await this.subscriptionsModel.getSubscriptionById(body)

    if (!subscription) {
      return res.status(500).json({ message: 'failed getting subscription' })
    }

    return res.status(200).json(subscription)
  }

  getSubscriptionByUserEmail = async (req, res) => {
    const { email } = req.params
    const subscription = await this.subscriptionsModel.getSubscriptionByUserEmail(email)

    if (!subscription) {
      return res.status(500).json({ message: 'unable to find subscription' })
    }

    return res.status(200).json(subscription)
  }

  getSubscriptions = async (req, res) => {
    const subs = await this.subscriptionsModel.getSubscriptions()
    if (!subs) {
      return res.status(500).json({ message: 'failed getting subscriptions' })
    }

    return res.status(200).json(subs)
  }

  subscriptionActions = async (req, res) => {
    const { action, id } = req.params
    if (action !== 'activate' && action !== 'cancel') {
      return res.status(401).json({ message: 'Invalid action value, it must be `activate` or `cancel`' })
    }

    const body = { subscription_id: id, action: action }
    const response = await this.subscriptionsModel.subscriptionActions(body)
    const actionMessage = actionConfirmed(action)

    if (!response) {
      return res.status(500).json({ message: 'unable to process action' })
    }

    return res.status(200).json({ message: actionMessage })
  }
}
