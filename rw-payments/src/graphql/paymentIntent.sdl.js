const gql = require('graphql-tag').default

exports.schema = gql`
  input PaymentIntentInput {
    amount: Int
    currency: String
    payment_method_types: [String]
    receipt_email: String
  }

  type PaymentIntent {
    id: ID!
    amount: Int
    currency: String
    payment_method_types: [String]
    receipt_email: String
  }

  type Mutation {
    createPaymentIntent(input: PaymentIntentInput!): PaymentIntent
  }
`
