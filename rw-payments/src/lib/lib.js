const {loadStripe} = require("@stripe/stripe-js")

const stripePromise = loadStripe(process.env.STRIPE_PK_TEST)
const stripeInstance = require('stripe')(process.env.STRIPE_SK_TEST)

exports.redirectCheckout = async (payload) => {
    let stripe = await stripePromise;
    
    const response = await global.fetch(`${global.__REDWOOD__API_PROXY_PATH}/createCheckoutSession`, {
        method: "POST",
        body: JSON.stringify(payload)
    })

    const session = await response.json()
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });

   if (result.error) {
     console.log(result.error.message)
   }
}

exports.createSessionHandler = async ({body}, context) => {
  const session = await stripeInstance.checkout.sessions.create(JSON.parse(body));

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.STRIPE_SK_TEST}`
    },

    body: JSON.stringify(session)
  }
}