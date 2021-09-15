// const stripe = require('stripe')(process.env.STRIPE_SK)

// const { getConfig } = require('@redwoodjs/internal')

// const config = getConfig()

// const DOMAIN = config.web.apiProxyPath

// export const handleStripeWebhooks = (event, webhooksObj) => {
//  let stripeEvent
//   try {
//     const sig = event.headers['stripe-signature'];
//     stripeEvent = stripe.webhooks.constructEvent(event.body, sig, process.env.STRIPE_WEBHOOK_SK);

//     return webhooksObj[stripeEvent.type](event)

//   } catch (error) {
//     throw error
//   }
// }

export const handleCheckoutSessionCreation = () => {
  // console.log('You found me')
  fetch(`http://localhost:8910/.redwood/functions/createCheckoutSession`)
}
