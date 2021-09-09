const stripe = require('stripe')(process.env.STRIPE_SK)

export const handleStripeWebhooks = async (event, webhooksObj) => {
  let stripeEvent
  try {
    const sig = event.headers['stripe-signature'];
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, process.env.STRIPE_WEBHOOK_SK);

    return webhooksObj[stripeEvent.type](event)

  } catch (error) {
    throw error
  }
}
