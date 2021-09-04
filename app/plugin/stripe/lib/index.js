const stripe = require('stripe')(process.env.STRIPE_SK)

export const stripeWebhookVerifier = (request) => {
  let event
  const sig = request.headers['stripe-signature'];

  try {
    event = stripe.webhooks.constructEvent(JSON.parse(request.body), sig, process.env.STRIPE_WEBHOOK_SK);
    return {
      status: '200',
      event: event
    }
  }
  catch (err) {
    return {
      status: '400',
      error: err.message
    }
  }
}


