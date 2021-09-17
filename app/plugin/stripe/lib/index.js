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

const {loadStripe} = require("@stripe/stripe-js")

const stripePromise = loadStripe(process.env.STRIPE_PK)

export const handleCheckoutSessionCreation = async () => {
  const stripey = await stripePromise
  const response = await global.fetch(`${global.__REDWOOD__API_PROXY_PATH}/createCheckoutSession`, {
    method: "POST"
  })

  const session = await response.json()
   const result = await stripey.redirectToCheckout({
      sessionId: session.id
   });
  if (result.error) {
     console.log(result.error.message)
   }
}
