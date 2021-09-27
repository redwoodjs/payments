require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SK)
// process.env.STRIPE_SK
const subscriptionCheckoutSetup = async () => {
  // Create products

  // Send priceID array

  // TODO: Add prompt to ask to configure Customer Portal
  const configuration = await stripe.billingPortal.configurations.create({
    business_profile: {
      privacy_policy_url: 'https://example.com/privacy',
      terms_of_service_url: 'https://example.com/terms',
    },
    features: {
      invoice_history: {
        enabled: true,
      },
      payment_method_update: {
        enabled: true,
      },
      subscription_cancel: {
        cancellation_reason: {
          enabled: false,
          options: ['too_expensive', 'other'],
        },
        enabled: false,
        mode: 'at_period_end',
        proration_behavior: 'none',
      },
      subscription_update: {
        default_allowed_updates: ['price'],
        products: [
          {
            prices: ['price_1JdarsFnEy6nnTnpxOI5D4fA'],
            product: 'prod_KIBEs5N3qDXwAb',
          },
          {
            prices: ['price_1JdattFnEy6nnTnpW5XYcieQ'],
            product: 'prod_KIBGMCHJlTW9ff',
          },
        ],
        enabled: true,
        proration_behavior: 'none',
      },
    },
  })

  console.log('PORTAL CONFIG:', configuration)
}

subscriptionCheckoutSetup()
