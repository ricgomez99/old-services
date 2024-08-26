export const getPlan = {
  pagination: {
    page: 1,
    page_size: 1,
  },
  results: [
    {
      id: 885219,
      name: 'test plan 2',
      sku: '19990',
      description: 'A brand new plan!',
      status: 'active',
      type: 'recurring_product',
      plans: [
        {
          interval: 5,
          period: 'month',
          pricing_model: 'standard',
          price: 500,
          trial: 'null',
          sign_up_fee: 'null',
          commitment_period: 'null',
          multi_currency_prices: 'null',
          multi_currency_signup_fees: 'null',
        },
      ],
    },
  ],
  _links: {
    self: {
      href: 'https://treli.co/wp-json/api/plans/get?id=885219',
    },
  },
}

export const createPlan = {
  name: 'Integration Test',
  description: 'This is just a test plan',
  sku: 1138,
  trackqty: true,
  inventory: 10,
  stockstatus: 'instock',
  image_url: 'https://treli.co/wp-content/uploads/2022/10/demo_suscripcion_3-1-16-1.jpg',
  productstatus: 'active',
  product_type: 'subsproduct',
  subs_plans: [{ interval: 1, period: 'month', subsprice: 50000, length: 5 }],
}

export const updatePlan = { interval: 2, period: 'year', subsprice: 10000 }
