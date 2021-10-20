const path = require('path')

const {
  appendToFileSync,
  copyFunctionDir,
  renderTemplateFile,
  execAsync,
} = require('./cmd/lib')

const oneTimePurchaseCheckoutSetup = async () => {
  console.log('Generating One Time Purchase Checkout payment flow ...')

  // Generate StripeCart page
  await execAsync('yarn rw g page StripeCart')

  // Copy over StripeCartTemplate contents
  const stripeCartPageFile = './web/src/pages/StripeCartPage/StripeCartPage.js'
  const stripeCartPageFileTemplate = path.resolve(
    __dirname,
    './templates/StripeCartPageTemplate.js'
  )
  await renderTemplateFile(stripeCartPageFile, stripeCartPageFileTemplate, {
    mode: `\'payment\'`,
  })

  // Copy createCheckoutSession function
  await copyFunctionDir('createCheckoutSession')

  // Copy retrieveCheckoutSession function
  await copyFunctionDir('retrieveCheckoutSession')
}
module.exports = oneTimePurchaseCheckoutSetup
