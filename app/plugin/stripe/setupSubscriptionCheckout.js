require('dotenv').config()
const readline = require('readline')
const { promisify } = require('util')
const { exec } = require('child_process')
const path = require('path')
const fs = require('fs')
const fsx = require('fs-extra')
const stripe = require('stripe')(process.env.STRIPE_SK)

const appendToFileSync = (file, data, successMsg = 'File Updated') => {
  return fs.promises.appendFile(file, data, 'utf8').then((err) => {
    if (err) throw err
    console.log(successMsg)
  })
}

const execSync = promisify((cmd, fn) => {
  exec(cmd, (error, stdout, stderr) => fn(error, stdout, stderr))
})

const renderTemplateFile = (file, template, cb) => {
  fs.readFile(template, (err, contents) => {
    if (err) return cb(err)
    fs.writeFile(file, contents, cb)
  })
}

const copyFunctionDir = async (fn) => {
  const targetDir = path.resolve(__dirname, `../../api/src/functions/${fn}`)
  const srcDir = path.resolve(__dirname, `./functions/${fn}`)
  const exists = await fsx.pathExists(targetDir)
  if (!exists) {
    await fsx.copy(srcDir, targetDir, (error) => {
      if (error) throw error
      console.log(`Stripe ${fn} function successfully copied`)
    })
  } else {
    console.log(`The function \'${fn}\' already exists`)
    return
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const question = promisify((message, fn) =>
  rl.question(message, (result) => fn(null, result))
)
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
        id: 'prod_rw10X1Y2Z3001bxxb',
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
        id: 'prod_rw20Z3Y2X1002axxa',
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

  // TODO Check if productid exists
  try {
    await stripe.products.retrieve('prod_rw10X1Y2Z3001bx0b')
    console.log('Skipping Product Creation...')
    console.log('Skipping Customer Portal configuration...')
    return
  } catch (err) {
    const priceResults = []

    console.log('Creating redwoodjs-stripe test Products and Prices')

    // for (const price of priceList) {
    //   const result = await stripe.prices.create(price)
    //   priceResults.push(result)
    // }

    // TODO: Add prompt to ask to configure Customer Portal
    console.log('Configuring Customer Portal')
    console.log('========================================')

    const configuration = await stripe.billingPortal.configurations
      .create(getPortalConfig(priceResults))
      .catch((err) => {
        console.log(err)
      })

    console.info(configuration)
    // Save config id to env
    await appendToFileSync(
      '.env',
      `STRIPE_PORTAL_ID=${configuration.id}\n`,
      'Stripe Customer Portal id has been added to .env'
    )

    // Copy createCustomerPortalSession to api/functionc folder
    await copyFunctionDir('createCustomerPortalSession')
    await copyFunctionDir('createCheckoutSession')
    await copyFunctionDir('retrieveCheckoutSession')

    // Generate StripeCart Page
    await execSync(
      'yarn rw g page StripeCart',
      async (error, stdout, stderr) => {
        if (error) {
          console.log(error.message)
        }
        const stripeCartPageFile =
          './web/src/pages/StripeCartPage/StripeCartPage.js'
        const stripeCartPageFileTemplate = path.resolve(
          __dirname,
          './templates/StripeCartPageTemplate.js'
        )

        await renderTemplateFile(
          stripeCartPageFile,
          stripeCartPageFileTemplate,
          (err) => {
            if (err) {
              throw err
            }
            console.log('StripeCartPage generated')
          }
        )
      }
    )

    return
  }

  // Scaffold out Customer Portal ???
  // fix command for payment generation
  // Refactor
}

module.exports = subscriptionCheckoutSetup
