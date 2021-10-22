const stripe = require('stripe')(process.env.STRIPE_SK)

const handleStripeWebhooks = (event, context, webhooksObj, returnCb) => {
  let stripeEvent
  try {
    const sig = event.headers['stripe-signature']
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      process.env.STRIPE_WEBHOOK_SK
    )

    let results = {}
    if (typeof webhooksObj[stripeEvent.type] !== 'undefined') {
      results = webhooksObj[stripeEvent.type](event, context)
    }

    return returnCb(event, results)
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = handleStripeWebhooks
