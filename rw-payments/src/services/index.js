const stripe = require('stripe')(
  process.env.STRIPE_API_SK_TEST
)

exports.createPaymentIntent = async ({ input }) => {
  const paymentIntent = await stripe.paymentIntents.create(input)
  return paymentIntent
}
