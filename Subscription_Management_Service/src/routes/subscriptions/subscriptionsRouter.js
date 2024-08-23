import { Router } from 'express'
import { SubscriptionsController } from '../../controllers/SubscriptionsController.js'

export const createSubsRouter = ({ subscriptionsModel }) => {
  const router = Router()
  const controller = new SubscriptionsController({ subscriptionsModel })

  router.get('/', controller.getSubscriptions)
  router.get('/user/:email', controller.getSubscriptionByUserEmail)
  router.post('/', controller.createSubscription)
  router.post('/:id', controller.getSubscriptionById)
  router.post('/update/:id', controller.updateSubscription)
  router.post('/actions/:action/:id', controller.subscriptionActions)

  return router
}
