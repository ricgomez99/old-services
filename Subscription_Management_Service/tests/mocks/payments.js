export const getPayment = {
  pagination: {
    page: 1,
    page_size: 1,
    has_more: false,
  },
  results: [
    {
      id: 729749,
      total: '$130,999',
      total_raw: '130999.00',
      fees: null,
      coupons: null,
      status: 'Pendiente',
      items: [
        {
          name: 'Premium Plan',
          quantity: 1,
          total: '130999',
        },
      ],
      customer: {
        first_name: 'Andres',
        last_name: 'Gomez',
        company: '',
        address_1: '123 a bbe',
        address_2: '',
        city: '',
        state: '0',
        postcode: '',
        country: 'CO',
        email: 'andres@wibbux.com',
        phone: '3003881653',
        identification: '123344567',
      },
      date_created: {
        date: '2024-06-11 09:32:34.000000',
        timezone_type: 3,
        timezone: 'America/Bogota',
      },
      date_paid: null,
      payment_type: 'subscription_payment',
      checkout_url: 'https://treli.co/t_pay?id=63405c5b5d0b&secret=846732',
      custom_fields: [],
      subscription_id: 729750,
    },
  ],
  _links: {
    self: {
      href: 'https://treli.co/wp-json/api/payments/list?payment_id=729749',
    },
  },
}

export const getPaymentByEmail = {
  pagination: {
    page: 1,
    page_size: 2,
    has_more: false,
  },
  results: [
    {
      id: 809731,
      total: '$0',
      total_raw: '0.00',
      fees: null,
      coupons: null,
      status: 'Aprobado',
      items: [
        {
          name: 'de prueba',
          quantity: 1,
          total: '0',
        },
      ],
      customer: {
        first_name: 'Andres',
        last_name: 'Gomez',
        company: '',
        address_1: '123 a bbe',
        address_2: '',
        city: 'Medellín',
        state: 'ANT',
        postcode: '',
        country: 'CO',
        email: 'andres@wibbux.com',
        phone: '3003881653',
        identification: '123344567',
        id_type: 'CC',
      },
      date_created: {
        date: '2024-07-23 10:05:06.000000',
        timezone_type: 3,
        timezone: 'America/Bogota',
      },
      date_paid: {
        date: '2024-07-23 10:05:07.000000',
        timezone_type: 3,
        timezone: 'America/Bogota',
      },
      payment_type: 'one_time_payment',
      checkout_url: 'https://treli.co/t_pay?id=6c425c5b5a03&secret=846732',
      custom_fields: [],
    },
    {
      id: 729749,
      total: '$130,999',
      total_raw: '130999.00',
      fees: null,
      coupons: null,
      status: 'Pendiente',
      items: [
        {
          name: 'Premium Plan',
          quantity: 1,
          total: '130999',
        },
      ],
      customer: {
        first_name: 'Andres',
        last_name: 'Gomez',
        company: '',
        address_1: '123 a bbe',
        address_2: '',
        city: '',
        state: '0',
        postcode: '',
        country: 'CO',
        email: 'andres@wibbux.com',
        phone: '3003881653',
        identification: '123344567',
      },
      date_created: {
        date: '2024-06-11 09:32:34.000000',
        timezone_type: 3,
        timezone: 'America/Bogota',
      },
      date_paid: null,
      payment_type: 'subscription_payment',
      checkout_url: 'https://treli.co/t_pay?id=63405c5b5d0b&secret=846732',
      custom_fields: [],
      subscription_id: 729750,
    },
  ],
  _links: {
    self: {
      href: 'https://treli.co/wp-json/api/payments/list?email=andres%40wibbux.com',
    },
  },
}

export const createPayment = {
  billing_address: {
    first_name: 'Test Name',
    last_name: 'Test Lastname',
    cedula: 123456789,
    address_1: 'Cra 2 2 2',
    city: 'Barranquilla',
    state: 'ATL',
    postcode: 80001,
    country: 'CO',
    phone: 3222222222,
  },
  requires_shipping: false,
  payment: {
    cardNumber: '4575623182290326',
    month: '12',
    year: '25',
    cardCvc: '123',
    cardtoken: 1,
    gateway: 'wompidirect',
  },
  email: 'test@treli.co',
  products: [{ id: 806862, quantity: 1, unit_price: 150000 }],
  currency: 'COP',
}

export const updatePaymentStatus = { payment_id: 798744, status: 'approved' }

export const updatePaymentData = {
  products: [
    {
      id: 806862,
      quantity: 1,
      unit_price: 130000,
    },
  ],
}
