const { loadStripe } = require('@stripe/stripe-js')

const stripePromise = loadStripe(process.env.STRIPE_PK)

export const handleCheckoutSessionCreation = async (mode) => {
  const stripey = await stripePromise
  const response = await global.fetch(
    `${global.__REDWOOD__API_PROXY_PATH}/createCheckoutSession`,
    {
      method: 'POST',
      body: JSON.stringify({ mode: mode }),
    }
  )

  const session = await response.json()

  const result = await stripey.redirectToCheckout({
    sessionId: session.id,
  })
  if (result.error) {
    console.log(result.error.message)
  }
}
