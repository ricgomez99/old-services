import { Router } from 'express'
import { PlansController } from '../../controllers/PlansController.js'

export const createPlansRouter = ({ plansModel }) => {
  const router = Router()
  const controller = new PlansController({ plansModel })

  router.get('/', controller.getPlans)
  router.get('/:id', controller.getPlansById)
  router.post('/', controller.createPlan)
  router.post('/update/:id', controller.updatePlan)

  return router
}
