import { initApp } from './app.js'
import { PaymentsModel } from './models/PaymentsModel.js'
import { PlansModel } from './models/PlansModel.js'
import { SubscriptionsModel } from './models/SubscriptionsModel.js'

initApp({
  paymentsModel: PaymentsModel,
  plansModel: PlansModel,
  subscriptionsModel: SubscriptionsModel,
})
