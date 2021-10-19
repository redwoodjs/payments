const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')

const renderTemplateFile = (file, template, cb, vars) => {
  fs.readFile(template, (err, contents) => {
    // replace %MODE%_ with mode
    let result = contents
    for (const [key, value] of Object.entries(vars)) {
      const regex = new RegExp(`/\%${key.toUpperCase}\%/g`)
      results = results.replace(regex, value)
    }

    if (err) return cb(err)
    fs.writeFile(file, results, cb)
  })
}

const copyFunctionDir = async (fn) => {
  const targetDir = path.resolve(__dirname, `../../api/src/functions/${fn}`)
  const srcDir = path.resolve(__dirname, `./functions/${fn}`)
  await fsx.copy(srcDir, targetDir, (error) => {
    if (error) throw error
    console.log(`Stripe ${fn} function successfully copied`)
  })
}

const oneTimePurchaseCheckoutSetup = async () => {
  console.log('Generating One Time Purchase Checkout payment flow ...')
  const stripeCartPageFile = './web/src/pages/StripeCartPage/StripeCartPage.js'
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
    },
    { mode: 'payment' }
  )

  // Copy createCheckoutSession function
  await copyFunctionDir('createCheckoutSession')

  // Copy retrieveCheckoutSession function
  await copyFunctionDir('retrieveCheckoutSession')
}
module.exports = oneTimePurchaseCheckoutSetup
