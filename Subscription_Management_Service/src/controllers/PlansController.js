export class PlansController {
  constructor({ plansModel }) {
    this.plansModel = plansModel
  }

  createPlan = async (req, res) => {
    const planData = req.body
    const created = await this.plansModel.createPlan(planData)

    if (!created) {
      return res.status(500).json({ message: 'unable to create plan' })
    }

    return res.status(201).json({ message: 'plan created successfully!' })
  }

  updatePlan = async (req, res) => {
    const { id } = req.params
    const data = req.body
    const body = { subs_plan: { ...data }, id: id, subscription_plan_id: 0 }
    const updated = await this.plansModel.updatePlan(body)

    if (!updated) {
      return res.status(500).json({ message: 'unable to update plan' })
    }

    return res.status(200).json({ message: 'plan updated successfully!' })
  }

  getPlans = async (req, res) => {
    const plans = await this.plansModel.getPlans()
    if (!plans) {
      return res.status(500).json({ message: 'unable to find plans' })
    }

    return res.status(200).json(plans)
  }

  getPlansById = async (req, res) => {
    const { id } = req.params
    const plan = await this.plansModel.getPlansById(id)

    if (!plan || plan.message === 'No se encontraron productos') {
      return res.status(500).json({ message: 'failed finding plan' })
    }

    return res.status(200).json(plan)
  }
}
