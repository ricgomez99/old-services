import { initApp } from './app.js'
import { PaymentsModel } from './models/PaymentsModel.js'
import { PlansModel } from './models/PlansModel.js'

initApp({ paymentsModel: PaymentsModel, plansModel: PlansModel })
