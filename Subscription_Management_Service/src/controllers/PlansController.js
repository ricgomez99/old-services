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

    return res.status(200).json({ message: 'plan created successfully!' })
  }

  updatePlan = async (req, res) => {
    const { id } = req.params
    const data = req.body
    const updated = await this.plansModel.updatePlan({ id, data })

    if (!updated) {
      return res.status(500).json({ message: 'unable to update plan' })
    }

    return res.status(200).json({ message: 'plan updated successfully' })
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

    if (!plan) {
      return res.status(500).json({ message: 'failed finding plan' })
    }

    return res.status(200).json(plan)
  }
}
