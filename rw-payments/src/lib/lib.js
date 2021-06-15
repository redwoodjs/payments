const {loadStripe} = require("@stripe/stripe-js")

const stripePromise = loadStripe(process.env.STRIPE_PK_TEST)

exports.redirectCheckout = async (payload) => {
    console.log('Entering package...')
    const stripe = await stripePromise;
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
