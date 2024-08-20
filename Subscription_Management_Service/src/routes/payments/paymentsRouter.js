import { PaymentsController } from '../../controllers/PaymentsController.js'
import { Router } from 'express'

export const createPaymentsRouter = ({ paymentsModel }) => {
  const router = Router()
  const controller = new PaymentsController({ paymentsModel })

  router.get('/', controller.getPayments)

  return router
}
