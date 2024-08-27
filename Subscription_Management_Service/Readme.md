# Subscription Management API

## Overview

+ This API manages subscriptions, payments, and plans by consuming data from the Treli API. It provides endpoints to retrieve, create, and update payment records, plans, and subscriptions.

## Routes and Endpoints

### Payments

+ Get All Payments
  `GET /billing`

+ Get Payment by ID
  `GET /billing/:id`

+ Get Payments by User Email
  `GET /billing/user/:email`

+ Get Payment Templates
  `GET /billing/payment_templates`

+ Create a Payment
  `POST /billing`

+ Update Payment Status
  `POST /billing/update_payment_status`
  **Request Body:**

```json
{
  "payment_id": 892561,
  "status": "approved"
}
```

+ Update Payment Data
`POST /billing/update_payment/:id`
**Request Body:**

```json
{
  "products": [
    {
      "id": 806862,
      "quantity": 1,
      "unit_price": 130000
    }
  ]
}
```

For more details, refer to the Treli API docs. [update payment](https://treli.readme.io/reference/post_payments-update-status)

### Plans
+ Get All Plans
`GET /plans`

+ Get Plan by ID
`GET /plans/:id`

+ Create a Plan
`POST /plans`
For detailed information, consult the Treli API docs.[create a plan](https://treli.readme.io/reference/post_plans-create)

+ Update a Plan
`POST /plans/update/:id`
**Request Body**:

```json
{
  "interval": 1,
  "period": "month",
  "subsprice": 50000
}
```
For more details, refer to the Treli API docs: [update plan](https://treli.readme.io/reference/post_plans-create)

### Subscriptions
+ Get All Subscriptions
`GET /subscriptions`

+ Get Subscription by ID
`POST /subscriptions/:id`
(Handled as a POST request as per Treli API)

+ Get Subscriptions by User Email
`GET /subscriptions/user/:email`

+ Create a Subscription
`POST /subscriptions`
For detailed information, consult the Treli API docs.[create a subscription](https://treli.readme.io/reference/post_subscriptions-create-1)

+ Update a Subscription
`POST /subscriptions/update/:id`
For more details, refer to the Treli API docs.[update a subscription](https://treli.readme.io/reference/post_subscriptions-update-1)

+ Subscription Actions
`POST /subscriptions/actions/:action/:id`
(Actions include canceling or activating a subscription.)

## Mock Data
+ The project includes mock data to simulate various processes, such as creating or updating payments, plans, and subscriptions. These mocks are located in the mocks directories and can be used for development and testing purposes. Here are the available mock directories:

1. **test/mocks/payments/**: Contains mock data for payment operations.
2. **test/mocks/plans/**: Contains mock data for plan operations.
3. **test/mocks/subscriptions/**: Contains mock data for subscription operations.

## Environment Variables
+ The following environment variables are crucial for the API:

+ API_URL: The Treli API URL.
+ API_TOKEN: Production token for Treli account access.
+ API_TEST_TOKEN: Test token for accessing account data.

>[!Note]
>The API is initially configured to use the test token. To switch to production, update the API_TOKEN in the codebase.

## Testing
+ The API includes tests for payments, plans, and subscriptions endpoints. Basic tests for the subscriptions endpoint are implemented, with additional tests planned for future updates.
