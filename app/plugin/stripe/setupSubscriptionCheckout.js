require('dotenv').config()
const path = require('path')
const stripe = require('stripe')(process.env.STRIPE_SK)
const {
  appendToFileSync,
  copyFunctionDir,
  renderTemplateFile,
  execAsync,
} = require('./cmd/lib')

// process.env.STRIPE_SK
const subscriptionCheckoutSetup = async () => {
  // Create products
  const priceList = [
    {
      currency: 'zar',
      unit_amount: 20000,
      recurring: {
        interval: 'month',
      },
      product_data: {
        id: 'prod_rw10X1Y2Z3001xvcx',
        name: 'Weekly Basket - 2 People',
      },
    },
    {
      currency: 'zar',
      unit_amount: 35000,
      recurring: {
        interval: 'month',
      },
      product_data: {
        id: 'prod_rw20Z3Y2X1002xvcx',
        name: 'Weekly Basket - 4 People',
      },
    },
  ]
  const getPortalConfig = (prices) => {
    return {
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
            enabled: true,
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
              prices: [prices[0].id],
              product: prices[0].product,
            },
            {
              prices: [prices[1].id],
              product: prices[1].product,
            },
          ],
          enabled: true,
          proration_behavior: 'none',
        },
      },
    }
  }

  try {
    // Check if products exists
    await stripe.products.retrieve('prod_rw10X1Y2Z3001xvcx')
    console.log('Skipping Product Creation...')
    console.log('Skipping Customer Portal configuration...')
  } catch (err) {
    const priceResults = []
    console.log('Creating redwoodjs-stripe test Products and Prices')
    for (const price of priceList) {
      const result = await stripe.prices.create(price)
      priceResults.push(result)
    }
    console.log('Configuring Customer Portal')
    const configuration = await stripe.billingPortal.configurations
      .create(getPortalConfig(priceResults))
      .catch((err) => {
        console.log(err)
      })
    // Save config id to env
    await appendToFileSync(
      '.env',
      `STRIPE_PORTAL_ID=${configuration.id}\n`,
      'Stripe Customer Portal id has been added to .env'
    )
  }

  // Copy createCustomerPortalSession to api/functionc folder
  await copyFunctionDir('createCustomerPortalSession')
  await copyFunctionDir('createCheckoutSession')
  await copyFunctionDir('retrieveCheckoutSession')

  // Generate StripeCart Page
  await execAsync('yarn rw g page StripeCart')

  // Copy over StripeCartTemplate contents
  const stripeCartPageFile = './web/src/pages/StripeCartPage/StripeCartPage.js'
  const stripeCartPageFileTemplate = path.resolve(
    __dirname,
    './templates/StripeCartPageTemplate.js'
  )
  await renderTemplateFile(stripeCartPageFile, stripeCartPageFileTemplate, {
    mode: `\'subscription\'`,
  })
  console.log('StripeCartPage generated')
}

module.exports = subscriptionCheckoutSetup
