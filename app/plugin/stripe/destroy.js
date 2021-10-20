const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { execAsync, removeEnvVars } = require('./cmd/lib')

const handleCheckoutDestroy = async () => {
  const argv = yargs(hideBin(process.argv)).argv
  const mode = argv._[0]

  switch (mode) {
    case 'sub':
    case 'subscription':
      console.log('Destroying StripeCart page')
      await execAsync('yarn rw d page StripeCart')

      console.log('Destroying Stripe Checkout functions')
      await execAsync('yarn rw d function createCheckoutSession')
      await execAsync('yarn rw d function createCustomerPortalSession')
      await execAsync('yarn rw d function retrieveCheckoutSession')

      // TODO: remove env variables
      // await removeEnvVars(['STRIPE_PORTAL_ID'])
      break
    case undefined:
    case 'once-off':
    case 'payment':
      console.log('Destroying StripeCart page')
      await execAsync('yarn rw d page StripeCart')

      console.log('Destroying Stripe Checkout functions')
      await execAsync('yarn rw d function createCheckoutSession')
      await execAsync('yarn rw d function retrieveCheckoutSession')
      break
    default:
      console.info(
        "You need to specify either 'subscription' or 'payment' as a mode"
      )
      break
  }

  return
}

handleCheckoutDestroy()
