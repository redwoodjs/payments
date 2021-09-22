const fs = require('fs');
const path = require('path')

const renderTemplateFile = (file, template, cb) => {
    fs.readFile(template, (err, contents) => {
      if (err) return cb(err);
      fs.writeFile(file, contents, cb);
    });
  }

const oneTimePurchaseCheckoutSetup = async () => {
  console.log('Generating One Time Purchase Checkout payment flow ...')
  const stripeCartPageFile = './web/src/pages/StripeCartPage/StripeCartPage.js'
  const stripeCartPageFileTemplate =  path.resolve(__dirname, './templates/StripeCartPageTemplate.js')

  await renderTemplateFile(stripeCartPageFile, stripeCartPageFileTemplate, (err) => {
    if (err) {
      throw err
    }
    console.log("StripeCartPage generated")
  })

}

oneTimePurchaseCheckoutSetup()
