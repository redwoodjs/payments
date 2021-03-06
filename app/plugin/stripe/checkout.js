const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const oneTimePurchaseCheckoutSetup = require('./setupOneTimePurchaseCheckout')
const setupSubscriptionCheckout = require('./setupSubscriptionCheckout')

const handleCheckoutSetup = () => {
  const argv = yargs(hideBin(process.argv)).argv
  const mode = argv._[0]

  switch (mode) {
    case 'sub':
    case 'subscription':
      return setupSubscriptionCheckout()
    case undefined:
    case 'once-off':
    case 'payment':
      return oneTimePurchaseCheckoutSetup()
    default:
      console.info(
        "You need to specify either 'subscription' or 'payment' as a mode"
      )
      break
  }

  return
}

handleCheckoutSetup()
