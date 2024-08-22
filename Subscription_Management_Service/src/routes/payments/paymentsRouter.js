import { PaymentsController } from '../../controllers/PaymentsController.js'
import { Router } from 'express'

export const createPaymentsRouter = ({ paymentsModel }) => {
  const router = Router()
  const controller = new PaymentsController({ paymentsModel })

  router.get('/', controller.getPayments)
  router.get('/:id', controller.getPaymentById)
  router.get('/?email', controller.getPaymentsByUserEmail)
  router.get('/payment_templates', controller.getPaymentTemplates)
  router.post('/', controller.createPayment)
  router.post('/update_payment_status', controller.updatePaymentStatus)
  router.post('/update_payment/:id', controller.updatePaymentById)

  return router
}
